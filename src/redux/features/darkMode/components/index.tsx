import { Icon } from "@iconify/react"
import { useAppDispatch } from "src/redux/store"

import { setDarkMode } from "../slice"

type DarkModeProps = {
  className?: string
}

export const DarkMode = ({ className }: DarkModeProps) => {
  const dispatch = useAppDispatch()

  return (
    <button onClick={() => dispatch(setDarkMode())}>
      <Icon icon="ph:sun-thin" height={32} width={32} className={className} />
    </button>
  )
}
