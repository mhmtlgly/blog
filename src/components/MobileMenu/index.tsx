import { Dispatch, SetStateAction } from "react"
import { Icon } from "@iconify/react"

import { DarkMode } from "src/redux/features/darkMode/components"
import { Drawer, Navigation } from "src/components"

type MobileMenuProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  return (
    <Drawer isOpen={isOpen}>
      <Icon
        icon="heroicons:x-circle"
        height={32}
        width={32}
        role="button"
        className="absolute top-4 right-4"
        onClick={() => setIsOpen((prev) => !prev)}
      />
      <Navigation />
      <DarkMode />
    </Drawer>
  )
}
