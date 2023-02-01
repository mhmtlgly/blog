import { ReactNode } from "react"

type DrawerProps = {
  isOpen: boolean
  children: ReactNode
}

export const Drawer = ({ isOpen, children }: DrawerProps) => {
  return (
    <div
      className={`fixed top-0 bottom-0 w-full z-10 bg-gray-100 dark:bg-gray-800 transition-all 
      px-8 py-16 flex flex-col justify-between origin-right lg:hidden text-gray-700 ${
        isOpen ? "right-0" : "-right-full"
      }`}
    >
      {children}
    </div>
  )
}
