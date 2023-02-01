export interface SingleCategoryType {
  category: Category
  posts: Post[]
}

export interface Category {
  metadata: Metadata
  sys: IconSys
  fields: CategoryFields
}

export interface CategoryFields {
  title: string
  slug: string
  icon: Icon
  tag?: ContentType[]
}

export interface Icon {
  metadata: Metadata
  sys: IconSys
  fields: IconFields
}

export interface IconFields {
  title: string
  file: File
}

export interface File {
  url: string
  details: Details
  fileName: string
  contentType: ContentTypeEnum
}

export type ContentTypeEnum = "image/svg+xml"

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

export interface IconSys {
  space: ContentType
  id: string
  type: FluffyType
  createdAt: Date
  updatedAt: Date
  environment: ContentType
  revision: number
  locale: Locale
  contentType?: ContentType
}

export interface ContentType {
  sys: ContentTypeSys
}

export interface ContentTypeSys {
  id: ID
  type: PurpleType
  linkType: LinkType
}

export type ID =
  | "master"
  | "7pjbebwlapcg"
  | "category"
  | "6padJ66DNiCGmTSVXhj6g4"
  | "blogPost"

export type LinkType = "Environment" | "Space" | "ContentType" | "Entry"

export type PurpleType = "Link"

export type Locale = "en-US"

export type FluffyType = "Asset" | "Entry"

export interface Post {
  metadata: Metadata
  sys: IconSys
  fields: PostFields
}

export interface PostFields {
  title: string
  slug: string
  category: Category[]
  references: string[]
  body?: string
}
