import { useAppSelector } from "src/redux/store"

export const usePostsFiltersState = () => {
  const { postFilters } = useAppSelector((state) => state)

  return {
    postFilters,
  }
}
