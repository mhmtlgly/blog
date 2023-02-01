import { createClient } from "contentful"
import { GetStaticProps } from "next"

import type { PostFields } from "src/types/singlePostType"

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export const getStaticPathsSinglePostPage = async () => {
  const response = await client.getEntries<PostFields>({
    content_type: "blogPost",
    limit: 200,
  })

  const paths = response.items.map((item) => {
    return {
      params: {
        postSlug: item?.fields?.slug,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticPropsSinglePostPage: GetStaticProps = async (context) => {
  const data = await client.getEntries({
    content_type: "blogPost",
    ["fields.slug"]: context?.params?.postSlug,
    limit: 200,
  })

  return {
    props: {
      post: data.items[0],
    },
  }
}
