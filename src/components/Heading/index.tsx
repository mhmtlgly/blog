import Link from "next/link"

import { HeadingProps } from "./types"

export const Heading = (props: HeadingProps) => {
  if (props.type === "text") {
    const { fontSize, type, title } = props
    return <h2 className="flex">{title}</h2>
  } else {
    const { fontSize, href, type, title } = props
    return <Link href={href}>{title}</Link>
  }
}
