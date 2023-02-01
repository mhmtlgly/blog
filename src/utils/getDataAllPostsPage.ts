import { createClient } from "contentful"

export const getStaticPropsAllPostsPage = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  })

  const posts = await client.getEntries({
    content_type: "blogPost",
    order: "-sys.createdAt",
    limit: 200,
  })

  return {
    props: { posts },
  }
}
