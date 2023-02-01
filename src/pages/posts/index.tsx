import { Icon } from "@iconify/react"
import Head from "next/head"
import Link from "next/link"
import { SearchInput } from "src/redux/features/search/components"
import { usePostsFiltersState } from "src/redux/features/search/hooks"

import type { AllPostsType } from "src/types/allPostsType"
import { getStaticPropsAllPostsPage } from "src/utils"

export default function AllPosts(props: AllPostsType) {
  const {
    postFilters: { searchQuery },
  } = usePostsFiltersState()
  return (
    <>
      <Head>
        <title>All posts</title>
        <meta name="description" content="All posts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SearchInput />
      <div className="mt-10 grid gap-4">
        {props.posts.items
          .filter((post) => {
            const postTitle = post.fields.title.toLowerCase()
            return searchQuery.every((query) => postTitle.includes(query))
          })

          .map((post) => (
            <Link
              key={post.fields.slug}
              href={`/posts/${post.fields.slug}`}
              className="flex items-center gap-1 underline"
            >
              <Icon icon="heroicons:chevron-double-right" />
              <p>{post.fields.title}</p>
            </Link>
          ))}
      </div>
    </>
  )
}

export const getStaticProps = async () => getStaticPropsAllPostsPage()
