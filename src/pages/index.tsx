import Head from "next/head"
import { GetStaticProps } from "next"

import type { AllPostsType } from "src/types/allPostsType"
import type { AllCategoriesType } from "src/types/allCategoriesType"
import { BlogPost, List, ReadMoreLink } from "src/components"
import { useInterSectionObserver } from "src/hooks"
import { getDataHomePage } from "src/utils"

export default function Home(props: AllPostsType & AllCategoriesType) {
  const { loadMoreRef, page } = useInterSectionObserver()

  const postsPerPage = 9
  const hasPosts = postsPerPage * page < props.posts.items.length
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <List
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
        items={props.posts.items.slice(0, postsPerPage * page)}
        renderItem={(post) => (
          <BlogPost
            className="border p-4 rounded-lg flex flex-col gap-4"
            key={post.fields.slug}
          >
            <List
              className="flex gap-2 flex-wrap"
              items={post.fields.category}
              renderItem={(category) => (
                <img
                  key={category.fields.slug}
                  src={category.fields.icon.fields.file.url}
                  alt=""
                  className="h-8 w-8"
                />
              )}
            />
            <h2 className="text-xl">{post.fields.title}</h2>
            <ReadMoreLink href={`/posts/${post.fields.slug}`} />
          </BlogPost>
        )}
      />
      <div
        className={`${hasPosts ? "animate-pulse bg-gray-50 p-4 " : ""}`}
        ref={loadMoreRef}
      >
        {hasPosts ? "loading..." : ""}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => getDataHomePage()