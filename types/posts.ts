export interface PostRoot {
  data: Data;
  meta: Meta;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  title: string;
  description: string;
  slug: string;
  views: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  thumbnail: Thumbnail;
  category: Category;
  tags: Tags;
  author: Author;
}

export interface Thumbnail {
  data: Data2;
}

export interface Data2 {
  id: number;
  attributes: Attributes2;
}

export interface Attributes2 {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

export interface Formats {
  small: Small;
  medium: Medium;
  thumbnail: Thumbnail2;
}

export interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Medium {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Thumbnail2 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Category {
  data: Data3;
}

export interface Data3 {
  id: number;
  attributes: Attributes3;
}

export interface Attributes3 {
  name: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Tags {
  data: Daum[];
}

export interface Daum {
  id: number;
  attributes: Attributes4;
}

export interface Attributes4 {
  name: string;
  status: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Author {
  data: Data4;
}

export interface Data4 {
  id: number;
  attributes: Attributes5;
}

export interface Attributes5 {
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Meta {}


declare module SinglePost {



}


