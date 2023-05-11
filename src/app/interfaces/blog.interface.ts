export interface BlogResponse {
  contentlets: Blog[];
}

export interface Blog {
  publishDate: string;
  postingDate: string;
  inode: string;
  host: string;
  variantId: string;
  locked: boolean;
  stInode: string;
  contentType: string;
  identifier: string;
  image: string;
  urlTitle: string;
  tags: string;
  folder: string;
  hasTitleImage: boolean;
  sortOrder: number;
  hostName: string;
  modDate: string;
  imageMetaData: ImageMetaData;
  blogContent: BlogContent;
  title: string;
  baseType: string;
  archived: boolean;
  working: boolean;
  live: boolean;
  owner: string;
  imageVersion: string;
  imageContentAsset: string;
  languageId: number;
  URL_MAP_FOR_CONTENT: string;
  url: string;
  titleImage: string;
  modUserName: string;
  urlMap: string;
  hasLiveVersion: boolean;
  modUser: string;
  teaser: string;
  __icon__: string;
  contentTypeIcon: string;
}

interface BlogContent {
  type: string;
  attrs?: Attrs;
  content: Content5[];
}

interface Content5 {
  type: string;
  attrs?: Attrs2;
  content?: Content4[];
}

interface Content4 {
  type: string;
  marks?: Mark[];
  text?: string;
  attrs?: Attrs4;
  content?: Content3[];
}

interface Content3 {
  type: string;
  attrs: Attrs5;
  content: Content2[];
}

interface Content2 {
  type: string;
  marks?: Mark2[];
  text?: string;
  attrs?: Attrs4;
  content?: Content[];
}

interface Content {
  type: string;
  text: string;
}

interface Mark2 {
  type: string;
}

interface Attrs5 {
  textAlign?: string;
  colspan?: number;
  rowspan?: number;
  colwidth?: any;
}

interface Attrs4 {
  textAlign: string;
}

interface Mark {
  type: string;
  attrs?: Attrs3;
}

interface Attrs3 {
  href: string;
  target: string;
  class?: any;
}

interface Attrs2 {
  textAlign?: string;
  level?: number;
  data?: Data;
}

interface Data {
  shortyWorking: string;
  cachettl: string;
  publishDate: string;
  mimeType: string;
  type: string;
  inode: string;
  path: string;
  seokeywords?: string;
  host: string;
  locked: boolean;
  stInode: string;
  contentType: string;
  identifier: string;
  image: string;
  __icon__: string;
  shortDescription: string;
  tags: string;
  folder: string;
  liveInode: string;
  hasTitleImage: boolean;
  sortOrder: number;
  name: string;
  shortyLive: string;
  template: string;
  hostName: string;
  modDate: string;
  extension: string;
  canRead: boolean;
  canEdit: boolean;
  description: string;
  title: string;
  seoTitle: string;
  baseType: string;
  archived: boolean;
  working: boolean;
  canLock: boolean;
  friendlyName: string;
  live: boolean;
  owner: string;
  imageVersion: string;
  imageContentAsset: string;
  isContentlet: boolean;
  languageId: number;
  workingInode: string;
  statusIcons: string;
  url: string;
  seodescription: string;
  titleImage: string;
  modUserName: string;
  hasLiveVersion: boolean;
  modUser: string;
  contentTypeIcon: string;
  language: string;
}

interface Attrs {
  chartCount: number;
  wordCount: number;
  readingTime: number;
}

interface ImageMetaData {
  modDate: number;
  sha256: string;
  length: number;
  title: string;
  version: number;
  isImage: boolean;
  fileSize: number;
  name: string;
  width: number;
  contentType: string;
  height: number;
}
