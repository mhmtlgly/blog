export interface SinglePostType {
  post: Post
}

export interface Post {
  metadata: Metadata
  sys: IconSys
  fields: PostFields
}

export interface PostFields {
  title: string
  slug: string
  category: Category[]
  body: string
  references: string[]
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
  tag: ContentType[]
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

export interface IconSys {
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
  linkType: string
}

export type Type = "Link"
