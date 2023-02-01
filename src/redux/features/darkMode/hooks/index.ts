import { useAppSelector } from "src/redux/store"

export const useDarkModeState = () => {
  const { darkMode } = useAppSelector((state) => state)

  return {
    darkMode,
  }
}
