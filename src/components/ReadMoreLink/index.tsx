import { Icon } from "@iconify/react"
import Link from "next/link"

type ReadMoreLinkProps = {
  href: string
}

export const ReadMoreLink = ({ href }: ReadMoreLinkProps) => (
  <Link
    href={href}
    className="flex gap-2 items-center bg-emerald-100 text-emerald-900 dark:text-emerald-900 
    rounded-full px-5 py-3 uppercase text-xs w-max hover:bg-emerald-200"
  >
    read more
    <Icon icon="heroicons:arrow-long-right" className="h-6 w-6" />
  </Link>
)
