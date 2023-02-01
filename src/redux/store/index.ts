import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

import darkModeReducer from "../features/darkMode/slice"
import postsFiltersReducer from "../features/search/slice"

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  postFilters: postsFiltersReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
