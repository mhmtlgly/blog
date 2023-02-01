import { ElementType, ReactNode, ComponentPropsWithoutRef } from "react"

type Props<Item, As extends ElementType> = {
  items: Item[]
  renderItem: (item: Item) => ReactNode
  className?: string
  as?: As
}

export function List<Item, As extends ElementType>({
  items,
  renderItem,
  className,
  as,
  ...rest
}: Props<Item, As> &
  Omit<ComponentPropsWithoutRef<As>, keyof Props<Item, As>>) {
  const Component = as ?? "div"
  return (
    <Component className={className} {...rest}>
      {items ? items.map(renderItem) : null}
    </Component>
  )
}
