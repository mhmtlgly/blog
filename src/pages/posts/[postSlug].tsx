import Head from "next/head"
import { GetStaticProps } from "next"

import type { SinglePostType } from "src/types/singlePostType"
import {
  getStaticPathsSinglePostPage,
  getStaticPropsSinglePostPage,
} from "src/utils"
import { Content, List } from "src/components"
import Link from "next/link"

export default function SinglePost(props: SinglePostType) {
  return (
    <>
      <Head>
        <title>{props.post.fields.title}</title>
        <meta name="description" content={`${props.post.fields.title}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <article className="mx-auto max-w-prose">
        <List
          className="flex items-center gap-2 mb-3"
          items={props.post.fields.category}
          renderItem={(category) => (
            <Link
              href={`/posts/categories/${category.fields.slug}`}
              key={category.fields.slug}
            >
              <img
                src={category.fields.icon.fields.file.url}
                className="w-10 h-10"
              />
            </Link>
          )}
        />

        <h2 className="text-2xl mb-5 font-semibold">
          {props.post.fields.title}
        </h2>

        <Content>{props.post.fields.body}</Content>

        {props.post.fields.references?.length > 0 ? (
          <h6 className="capitalize mt-20">References</h6>
        ) : null}

        <List
          className="grid gap-3"
          items={props.post.fields.references}
          renderItem={(reference) => (
            <div key={reference}>
              <a
                href={reference}
                target={"_blank"}
                rel="noopener noreferrer"
                className="text-xs text-gray-500 underline decoration-dotted decoration-gray-300 underline-offset-4 cursor-pointer hover:text-gray-900"
              >
                {reference}
              </a>
            </div>
          )}
        />
      </article>
    </>
  )
}

export const getStaticPaths = async () => getStaticPathsSinglePostPage()

export const getStaticProps: GetStaticProps = async (context) =>
  getStaticPropsSinglePostPage(context)
