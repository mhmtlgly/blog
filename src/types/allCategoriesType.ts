export interface AllCategoriesType {
  categories: Data
}

export interface Data {
  sys: DataSys
  total: number
  skip: number
  limit: number
  items: Item[]
  includes: Includes
}

export interface Includes {
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
  type: string
  linkType: string
}

export interface Item {
  metadata: Metadata
  sys: AssetSys
  fields: ItemFields
}

export interface ItemFields {
  title: string
  slug: string
  icon: Asset
}

export interface DataSys {
  type: string
}
