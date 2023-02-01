export type HeadingProps = {
  fontSize?: "xs" | "sm" | "md" | "lg" | "xl"
  title: string
} & (
  | {
      type: "text"
    }
  | { type: "link"; href: string }
)
