import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Icon } from "@iconify/react"

import { DarkMode } from "src/redux/features/darkMode/components"
import { Navigation } from "src/components"

type MobileMenuProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  return (
    <div
      className={`fixed top-0 bottom-0 w-full z-10 bg-gray-100 dark:bg-gray-800 transition-all 
      px-8 py-16 flex flex-col justify-between origin-right lg:hidden ${
        isOpen ? "right-0" : "-right-full"
      }`}
    >
      <button
        className="absolute top-4 right-4"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Icon icon="heroicons:x-circle" height={32} width={32} />
      </button>
      <Navigation />
      <DarkMode />
    </div>
  )
}
