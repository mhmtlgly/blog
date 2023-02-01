export interface AllPostsType {
  posts: Posts
}

export interface Posts {
  sys: PostsSys
  total: number
  skip: number
  limit: number
  items: Item[]
  includes: Includes
}

export interface Includes {
  entry: Entry[]
  asset: Asset[]
}

export interface Asset {
  metadata: Metadata
  sys: AssetSys
  fields: AssetFields
}

export interface AssetFields {
  title: string
  file: File
}

export interface File {
  url: string
  details: Details
  fileName: string
  contentType: string
}

export interface Details {
  size: number
  image: Image
}

export interface Image {
  width: number
  height: number
}

export interface Metadata {
  tags: any[]
}

export interface AssetSys {
  space: ContentType
  id: string
  type: string
  createdAt: Date
  updatedAt: Date
  environment: ContentType
  revision: number
  locale: string
  contentType?: ContentType
}

export interface ContentType {
  sys: ContentTypeSys
}

export interface ContentTypeSys {
  id: string
  type: Type
  linkType: LinkType
}

export type LinkType = "Environment" | "Space" | "Entry" | "ContentType"

export type Type = "Link"

export interface Entry {
  metadata: Metadata
  sys: AssetSys
  fields: EntryFields
}

export interface EntryFields {
  title: string
  slug: string
  icon: Asset
  tag: ContentType[]
}

export interface Item {
  metadata: Metadata
  sys: AssetSys
  fields: ItemFields
}

export interface ItemFields {
  title: string
  slug: string
  category: Entry[]
  body: string
  references: string[]
}

export interface PostsSys {
  type: string
}
