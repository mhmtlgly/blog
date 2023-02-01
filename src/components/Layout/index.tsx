import { Inter } from "@next/font/google"

import type { LayoutProps } from "./types"
import { useToggleDarkMode } from "./hooks"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const Layout = ({ children }: LayoutProps) => {
  useToggleDarkMode()

  return (
    <div
      className={`min-h-screen grid gap-10 grid-rows-[auto_1fr_auto] ${inter.variable} font-sans`}
    >
      {children}
    </div>
  )
}
