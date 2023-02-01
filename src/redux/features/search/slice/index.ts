import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type PostFiltersType = {
  categories: string[]
  searchQuery: string[]
}

const initialState: PostFiltersType = {
  categories: [],
  searchQuery: [],
}

export const postsFiltersSlice = createSlice({
  name: "postsFilters",
  initialState,
  reducers: {
    setCategories: (state: PostFiltersType, action: PayloadAction<string>) => {
      return {
        ...state,
        categories: state.categories.includes(action.payload)
          ? [
              ...state.categories.filter(
                (category) => category !== action.payload
              ),
            ]
          : [...state.categories, action.payload],
      }
    },
    setSearchQuery: (state: PostFiltersType, action: PayloadAction<string>) => {
      return {
        ...state,
        searchQuery: action.payload.split(" "),
      }
    },
  },
})

export const { setCategories, setSearchQuery } = postsFiltersSlice.actions

export default postsFiltersSlice.reducer
