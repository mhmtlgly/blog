import Link from "next/link"
import { links } from "./data"
import { List } from "src/components"

type NavigationProps = {
  className?: string
}

export const Navigation = ({ className }: NavigationProps) => (
  <List
    as="nav"
    className={`flex flex-col gap-4 lg:flex-row ${className}`}
    items={links}
    renderItem={(link) => (
      <Link
        key={link.id}
        href={link.href}
        className="flex items-center gap-1 uppercase text-sm"
      >
        {link.icon}
        {link.title}
      </Link>
    )}
  />
)
