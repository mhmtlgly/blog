import { Icon } from "@iconify/react"
import Link from "next/link"

type LogoProps = {
  text?: string
  slogan?: string
}

export const Logo = ({ slogan, text }: LogoProps) => (
  <Link href="/" className="flex items-center">
    <div className="flex items-center gap-1">
      <Icon icon="heroicons:information-circle-solid" height={40} width={40} />
      <small className="uppercase font-bold">{text}</small>
    </div>
    <span className="uppercase font-bold">{slogan}</span>
  </Link>
)
