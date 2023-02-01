import { Icon } from "@iconify/react"
import { SetStateAction, Dispatch } from "react"

type MobileMenuIconProps = {
  onClick: Dispatch<SetStateAction<boolean>>
}

export const MobileMenuIcon = ({ onClick }: MobileMenuIconProps) => {
  return (
    <button
      className="lg:hidden"
      onClick={(e) => {
        e.preventDefault()
        onClick((prev) => !prev)
      }}
    >
      <Icon icon="heroicons:bars-3-bottom-right-solid" height={32} width={32} />
    </button>
  )
}
