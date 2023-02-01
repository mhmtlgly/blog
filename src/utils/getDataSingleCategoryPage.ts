import { createClient } from "contentful"
import { GetStaticProps } from "next"

import type { CategoryFields, PostFields } from "src/types/singleCategoryType"

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export const getStaticPathsSingleCategoryPage = async () => {
  const response = await client.getEntries<CategoryFields>({
    content_type: "category",
    limit: 200,
  })

  const paths = response.items.map((item) => {
    return {
      params: {
        category: item?.fields?.slug,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticPropsSingleCategoryPage: GetStaticProps = async (
  context
) => {
  const categoryName = context?.params?.category
  const categoryData = await client.getEntries({
    content_type: "category",
    ["fields.slug"]: categoryName,
    limit: 200,
  })

  const posts = await client
    .getEntries<PostFields>({
      content_type: "blogPost",
      limit: 200,
    })
    .then((entries) =>
      entries.items.filter((item) =>
        item.fields.category.some(
          (category) => category.fields.slug === categoryName
        )
      )
    )

  return {
    props: {
      category: categoryData.items[0],
      posts,
    },
  }
}
