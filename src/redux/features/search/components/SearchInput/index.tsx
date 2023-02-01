import { useAppDispatch } from "src/redux/store"
import { setSearchQuery } from "src/redux/features/search/slice"
import { useRef } from "react"
import { Icon } from "@iconify/react"

export const SearchInput = () => {
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="text-center bg-gray-100 p-4 rounded-lg flex items-center">
      <Icon
        icon="heroicons:magnifying-glass"
        className="h-8 w-8 text-gray-400 cursor-pointer"
        onClick={() => inputRef.current?.focus()}
      />
      <input
        ref={inputRef}
        placeholder="search..."
        autoComplete="off"
        type="search"
        name="searcQuery"
        id="searcQuery"
        onChange={(e) => dispatch(setSearchQuery(e.target.value.toLowerCase()))}
        value={inputRef.current?.value ?? ""}
        className="border-none capitalize focus:ring-0 w-full bg-gray-100"
      />
    </div>
  )
}
