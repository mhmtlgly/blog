import { useAppDispatch } from "src/redux/store"
import { AllCategoriesType } from "src/types/allCategoriesType"

import { usePostsFiltersState } from "../../hooks"
import { setCategories } from "../../slice"

export const SelectCategory = ({ categories }: AllCategoriesType) => {
  const dispatch = useAppDispatch()
  const { postFilters } = usePostsFiltersState()
  return (
    <select
      id="categorySelection"
      className=""
      value=""
      onChange={(e) => {
        dispatch(setCategories(e.currentTarget.value))
      }}
    >
      <>
        <option value="">select a category</option>
        {categories.items
          .filter((item) =>
            postFilters.categories.every(
              (filter) => item.fields.title !== filter
            )
          )
          .map((item) => (
            <option
              key={item.fields.slug}
              id="categorySelection"
              value={item.fields.title}
            >
              {item.fields.title}
            </option>
          ))}
      </>
    </select>
  )
}
