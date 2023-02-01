import { usePostsFiltersState } from "../../hooks"
import { useAppDispatch } from "src/redux/store"
import { setCategories } from "src/redux/features/search/slice"

export const Chip = () => {
  const dispatch = useAppDispatch()
  const { postFilters } = usePostsFiltersState()
  return (
    <div className="flex flex-wrap gap-2 py-4">
      {postFilters.categories.map((filter) => (
        <div
          key={filter}
          className="border py-2 px-4 w-max rounded-full flex gap-4 items-center"
        >
          <span>{filter}</span>
          <small
            onClick={() => dispatch(setCategories(filter))}
            className="cursor-pointer"
          >
            x
          </small>
        </div>
      ))}
    </div>
  )
}
