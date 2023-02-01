import { useEffect } from "react"

import { useDarkModeState } from "src/redux/features/darkMode/hooks"

export const useToggleDarkMode = () => {
  const { darkMode } = useDarkModeState()

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark")
  }, [darkMode])
}
