import { useAppSelector } from "src/redux/store"

export const useThemeState = () => {
  const { postFilters } = useAppSelector((state) => state)

  return {
    postFilters,
  }
}
