import { Block, Document, Inline } from '@contentful/rich-text-types';
import {
  ContentfulClientApi,
  EntryCollection,
  Tag,
  createClient,
} from 'contentful';
import {
  CMSAuthor,
  FetchBlogEntriesReturn,
  FetchEntriesReturn,
  FetchPagesReturn,
  CMSFigureImage,
  CMSLegals,
  CMSPage,
  CMSPost,
  CMSTagList,
  CMSSettings,
} from '@/types/cms';
import { format, parseISO } from 'date-fns';

import { METADATA } from '@/constants';
import { fetchContent } from '@/services/embed';

const client: ContentfulClientApi = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  environment: process.env.CONTENTFUL_ENVIRONMENT_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  host: 'cdn.contentful.com',
});

export async function fetchSettings(): Promise<CMSSettings> {
  const _entries = await client.getEntries<{
    aboutPageList: Array<{ fields: { title: string; slug: string } }>;
  }>({
    content_type: 'settings',
    limit: 1,
  });
  const { aboutPageList } = _entries.items[0].fields;
  const aboutPageTabs = aboutPageList.map(({ fields }) => {
    return { title: fields.title, slug: fields.slug };
  });
  return {
    aboutPageTabs,
  };
}

export async function fetchTagList(): Promise<CMSTagList> {
  const _tags = await client.getTags();
  const tags: CMSTagList = {};
  _tags.items.forEach((tag) => {
    tags[tag.sys.id] = tag.name;
  });
  return tags;
}

export async function fetchBlogEntries(
  quantity = 100
): Promise<FetchBlogEntriesReturn> {
  const _entries = await client.getEntries({
    content_type: 'post', // only fetch blog post entry
    order: '-fields.date',
    limit: quantity,
  });

  const results = await generateEntries(_entries, 'post');
  return {
    entries: results.entries as Array<CMSPost>,
    total: results.total,
  };
}

export async function fetchBlogEntriesByTag(
  tag: string,
  quantity = 100
): Promise<FetchBlogEntriesReturn> {
  const taglist = await fetchTagList();

  const id = Object.entries(taglist).filter(([_, value]) => {
    const link = value.toLowerCase().replace(/\s+/g, '-');
    return tag === link;
  })[0][0];

  const _entries = await client.getEntries({
    content_type: 'post', // only fetch blog post entry
    order: '-fields.date',
    'metadata.tags.sys.id[in]': id,
    limit: quantity,
  });

  if (_entries.items.length > 0) {
    const results = await generateEntries(_entries, 'post');
    return {
      entries: results.entries as Array<CMSPost>,
      total: results.total,
    };
  }

  return Promise.reject(new Error(`Failed to fetch entries for ${tag}`));
}

export async function fetchEntryPreview(
  slug: string
): Promise<CMSPage | CMSPost> {
  const _client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN!,
    host: 'preview.contentful.com',
  });

  const _pages = await _client.getEntries({
    content_type: 'page',
    'fields.slug': slug,
    'fields.preview': true,
  });
  const _posts = await _client.getEntries({
    content_type: 'post',
    'fields.slug': slug,
    'fields.preview': true,
  });

  const _entries = [..._pages.items, ..._posts.items];
  const taglist = await fetchTagList();

  if (_entries.length > 0) {
    const entry = _entries[0];
    if (entry.sys.contentType.sys.id === 'post') {
      return convertPost(entry, taglist);
    }
    if (entry.sys.contentType.sys.id === 'page') {
      return convertPage(entry);
    }
  }

  return Promise.reject(new Error(`Failed to fetch preview for ${slug}`));
}

export async function fetchEntryBySlug(
  slug: string
): Promise<CMSPage | CMSPost> {
  const _pages = await client.getEntries({
    content_type: 'page',
    'fields.slug': slug,
  });
  const _posts = await client.getEntries({
    content_type: 'post',
    'fields.slug': slug,
  });

  const _entries = [..._pages.items, ..._posts.items];
  const taglist = await fetchTagList();

  if (_entries.length > 0) {
    const entry = _entries[0];
    if (entry.sys.contentType.sys.id === 'post') {
      return convertPost(entry, taglist);
    }
    if (entry.sys.contentType.sys.id === 'page') {
      return convertPage(entry);
    }
  }

  return Promise.reject(new Error(`Failed to fetch entry for ${slug}`));
}

function convertPost(rawData: any, taglist: CMSTagList): CMSPost {
  const rawPost = rawData.fields;
  const rawFeatureImage = rawPost?.featureImage
    ? rawPost?.featureImage.fields
    : null;
  const rawAuthor = rawPost.author ? rawPost.author.fields : null;

  return {
    id: rawData.sys.id ?? null,
    body: rawPost.body ?? null,
    subtitle: rawPost.subtitle ?? null,
    description: rawPost.description ?? null,
    publishedDateISO: rawPost.date,
    publishedDate: format(parseISO(rawPost.date), 'MMMM dd, yyyy'),
    slug: rawPost.slug,
    tags: convertTags(rawData.metadata.tags, taglist),
    title: rawPost.title,
    featureImage: convertImage(rawFeatureImage),
    fullHeader: rawPost.fullHeader ?? null,
    author: convertAuthor(rawAuthor),
  };
}

function convertImage(rawImage: any): CMSFigureImage {
  return {
    imageUrl: rawImage?.file.url.replace('//', 'https://') ?? null, // may need to put null check as well here
    description: rawImage?.description ?? null,
    title: rawImage?.title ?? null,
    width: rawImage?.file.details.image.width,
    height: rawImage?.file.details.image.height,
  };
}

function convertAuthor(rawAuthor: any): CMSAuthor {
  return {
    name: rawAuthor?.name ?? null,
    avatar: convertImage(rawAuthor.avatar.fields),
    shortBio: rawAuthor?.shortBio ?? null,
    position: rawAuthor?.position ?? null,
    email: rawAuthor?.email ?? null,
    twitter: rawAuthor?.twitter ?? null,
    facebook: rawAuthor.facebook ?? null,
    github: rawAuthor.github ?? null,
  };
}

function convertTags(rawTags: any, taglist: CMSTagList): string[] {
  const tags = rawTags.map((tag: Tag) => {
    return taglist[tag.sys.id];
  });
  return tags;
}

async function generateEntries(
  entries: EntryCollection<unknown>,
  entryType: 'post' | 'page'
): Promise<FetchEntriesReturn> {
  let _entries: Array<CMSPost | CMSPage> = [];
  if (entries && entries.items && entries.items.length > 0) {
    switch (entryType) {
      case 'post':
        // eslint-disable-next-line no-case-declarations -- TODO: refactor
        const taglist = await fetchTagList();
        _entries = entries.items.map((entry) => convertPost(entry, taglist));
        break;
      case 'page':
        _entries = entries.items.map((entry) => convertPage(entry));
        break;
      default:
        break;
    }
    return { entries: _entries, total: entries.total };
  }

  return { entries: _entries, total: 0 };
}

export function generateRoute(slug: string): string {
  const route =
    slug.indexOf('/blog/') > 0 ? slug.split('/blog/')[0] : '/blog/' + slug;
  return route;
}

async function loadMetaData(node: Block | Inline) {
  // is embedded link not embedded media
  if (!node.data.target.fields.file) {
    if (node.data.target.sys.contentType.sys.id === 'post') {
      node.data.target.fields.url = `${METADATA.HOST_URL}/blog/${node.data.target.fields.slug}`;
    }
    node.data.target.fields.meta = await fetchContent(
      node.data.target.fields.url
    );
  }
  return node;
}

export async function fetchLegals(quantity = 100) {
  const _entries = await client.getEntries({
    content_type: 'legals',
    limit: quantity,
  });

  const items: CMSLegals[] = [];
  _entries.items.forEach((item: any) => {
    items.push(item.fields);
  });

  return items;
}

export async function generateLinkMeta(doc: Document): Promise<Document> {
  const promises = doc.content.map(async (node: Block | Inline) => {
    if (node.nodeType === 'embedded-entry-block') {
      node = await loadMetaData(node);
    } else {
      // check for inline embedding
      const innerPromises = node.content.map(async (innerNode) => {
        if (
          innerNode.nodeType === 'embedded-entry-inline' &&
          innerNode.data.target.sys.contentType.sys.id !== 'markup'
        ) {
          innerNode = await loadMetaData(innerNode);
        }
      });
      await Promise.all(innerPromises);
    }
  });
  await Promise.all(promises);
  return doc;
}

export async function fetchPages(quantity = 100): Promise<FetchPagesReturn> {
  const _entries = await client.getEntries({
    content_type: 'page',
    limit: quantity,
  });

  const results = await generateEntries(_entries, 'page');
  return {
    entries: results.entries as Array<CMSPage>,
    total: results.total,
  };
}

function convertPage(rawData: any): CMSPage {
  const rawPage = rawData.fields;

  return {
    title: rawPage.title,
    slug: rawPage.slug,
    headline: rawPage.headline ?? null,
    body: rawPage.body,
    metaDescription: rawPage.metaDescription ?? '',
    metaType: rawPage.metaType ?? 'website',
    metaPublishedTime: rawPage.metaPublishedTime ?? '',
  };
}
