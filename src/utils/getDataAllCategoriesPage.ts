import { createClient } from "contentful"

export const getDataAllCategoriesPage = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  })

  const categories = await client.getEntries({
    content_type: "category",
    limit: 200,
  })

  return {
    props: { categories },
  }
}
