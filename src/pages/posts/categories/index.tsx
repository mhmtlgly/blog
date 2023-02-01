import Head from "next/head"
import Link from "next/link"
import { List } from "src/components"

import { AllCategoriesType } from "src/types/allCategoriesType"
import { getDataAllCategoriesPage } from "src/utils"

export default function AllCategories(props: AllCategoriesType) {
  return (
    <>
      <Head>
        <title>All Blog Categories</title>
        <meta name="description" content="A list of all blog categories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h2 className="text-2xl font-black uppercase mb-4">
        categories
        <span className="text-base font-normal ml-1">
          ({props.categories.total})
        </span>
      </h2>
      <List
        className="flex flex-wrap gap-2"
        items={props.categories.items.sort((a, b) =>
          a.fields.title < b.fields.title ? -1 : 0
        )}
        renderItem={(category) => (
          <Link
            key={category.fields.slug}
            href={`/posts/categories/${category.fields.slug}`}
            className="inline-flex items-center gap-2 border px-4 py-2 rounded-full group hover:bg-gray-100"
          >
            <img
              src={category.fields.icon.fields.file.url}
              alt=""
              className="w-8 h-8 grayscale group-hover:grayscale-0"
            />
            {category.fields.title}
          </Link>
        )}
      />
    </>
  )
}

export const getStaticProps = async () => getDataAllCategoriesPage()
