import { Navigation, Logo, MobileMenuIcon, MobileMenu } from "src/components"
import { DarkMode } from "src/redux/features/darkMode/components"

import { useRouteChange } from "./hooks"

export const Navbar = () => {
  const { isOpen, setIsOpen } = useRouteChange()
  return (
    <header className="p-4 flex justify-between mx-auto max-w-screen-lg w-full">
      <Logo slogan="blog" />
      <Navigation className="max-lg:hidden" />
      <DarkMode className="max-lg:hidden" />
      <MobileMenuIcon onClick={setIsOpen} />
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  )
}
