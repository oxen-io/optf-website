import { Document } from '@contentful/rich-text-types';

export type FigureImage = {
  title: string | null;
  description: string | null;
  imageUrl: string;
  width: string | number;
  height: string | number;
};

export type Author = {
  name: string;
  avatar?: FigureImage;
  shortBio: string;
  email: string;
  // Eg. Marketing Researcher
  position: string | null;
  twitter: string | null;
  facebook: string | null;
  github: string | null;
};

export interface Post {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  body: Document;
  author?: Author;
  publishedDate: string;
  publishedDateISO: string;
  featureImage?: FigureImage;
  fullHeader?: boolean;
  tags: Array<string>;
  slug: string;
}

export interface Legals {
  order: number;
  title: string;
  description?: Document;
  source?: string;
}

export function isPost(object: unknown): object is Post {
  return Object.prototype.hasOwnProperty.call(object, 'publishedDate');
}

export interface FetchEntriesReturn {
  entries: Array<any>;
  total: number;
}

export type TagList = {
  [key: string]: string;
};

export interface FetchBlogEntriesReturn extends FetchEntriesReturn {
  entries: Array<Post>;
}

export type PageMetadata = {
  metaDescription: string;
  metaType: 'website' | 'article';
  metaPublishedTime?: string;
};

export type Page = {
  title: string;
  slug: string;
  headline: string | null;
  body: Document;
  useExactTitle?: boolean;
} & PageMetadata;

export function isPage(object: unknown): object is Page {
  return Object.prototype.hasOwnProperty.call(object, 'headline');
}

export interface FetchPagesReturn extends FetchEntriesReturn {
  entries: Array<Page>;
}

export type Settings = {
  aboutPageTabs: Array<{
    title: string;
    slug: string;
  }>;
};
