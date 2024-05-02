import { Document } from '@contentful/rich-text-types';

export type CMSFigureImage = {
  title: string | null;
  description: string | null;
  imageUrl: string;
  width: string | number;
  height: string | number;
};

export type CMSAuthor = {
  name: string;
  avatar?: CMSFigureImage;
  shortBio: string;
  email: string;
  // Eg. Marketing Researcher
  position: string | null;
  twitter: string | null;
  facebook: string | null;
  github: string | null;
};

export interface CMSPost {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  body: Document;
  author?: CMSAuthor;
  publishedDate: string;
  publishedDateISO: string;
  featureImage?: CMSFigureImage;
  fullHeader?: boolean;
  tags: Array<string>;
  slug: string;
}

export interface CMSLegals {
  order: number;
  title: string;
  description?: Document;
  source?: string;
}

export function isPost(object: unknown): object is CMSPost {
  return Object.prototype.hasOwnProperty.call(object, 'publishedDate');
}

export interface FetchEntriesReturn {
  entries: Array<any>;
  total: number;
}

export type CMSTagList = {
  [key: string]: string;
};

export interface FetchBlogEntriesReturn extends FetchEntriesReturn {
  entries: Array<CMSPost>;
}

export type CMSPageMetadata = {
  metaDescription: string;
  metaType: 'website' | 'article';
  metaPublishedTime?: string;
};

export type CMSPage = {
  title: string;
  slug: string;
  headline: string | null;
  body: Document;
  useExactTitle?: boolean;
} & CMSPageMetadata;

export function isPage(object: unknown): object is CMSPage {
  return Object.prototype.hasOwnProperty.call(object, 'headline');
}

export interface FetchPagesReturn extends FetchEntriesReturn {
  entries: Array<CMSPage>;
}

export type CMSSettings = {
  aboutPageTabs: Array<{
    title: string;
    slug: string;
  }>;
};
