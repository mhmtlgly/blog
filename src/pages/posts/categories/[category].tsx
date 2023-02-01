import { Icon } from "@iconify/react"
import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import { BlogPost, List } from "src/components"

import type { SingleCategoryType } from "src/types/singleCategoryType"

import {
  getStaticPathsSingleCategoryPage,
  getStaticPropsSingleCategoryPage,
} from "src/utils"

export default function SingleCategory(props: SingleCategoryType) {
  return (
    <>
      <Head>
        <title>React</title>
        <meta name="description" content="All posts related to React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex items-end mb-10 gap-2 mx-auto w-max">
        <img
          src={props.category.fields.icon.fields.file.url}
          alt=""
          className="h-14 w-14 border rounded-lg p-2"
        />
        <div>
          <h2 className="text-2xl font-black">{props.category.fields.title}</h2>
          <span>
            ({props.posts.length} {props.posts.length === 1 ? "post" : "posts"})
          </span>
        </div>
      </div>
      <div className="w-1/2 border-b mx-auto mb-10"></div>
      <List
        className="grid gap-4"
        items={props.posts}
        renderItem={(post) => (
          <BlogPost key={post.fields.slug}>
            <Link
              href={`/posts/${post.fields.slug}`}
              className="flex items-center gap-1 underline decoration-gray-300"
            >
              <Icon icon="heroicons:chevron-double-right" />
              <p>{post.fields.title}</p>
            </Link>
          </BlogPost>
        )}
      />
    </>
  )
}

export const getStaticPaths = async () => getStaticPathsSingleCategoryPage()

export const getStaticProps: GetStaticProps = async (context) =>
  getStaticPropsSingleCategoryPage(context)
