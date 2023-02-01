import { createClient } from "contentful"
import { GetStaticPropsContext } from "next"

export const getDataHomePage = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  })

  const posts = await client.getEntries({
    content_type: "blogPost",
    order: "-sys.createdAt",
    limit: 200,
  })

  const categories = await client.getEntries({
    content_type: "category",
    limit: 200,
  })

  return {
    props: { posts, categories },
  }
}
