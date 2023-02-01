import { useState, useRef, useEffect } from "react"

type useInterSectionObserverProps = {
  delay: number
}

export const useInterSectionObserver = (
  { delay }: useInterSectionObserverProps = { delay: 300 }
) => {
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const loadMoreRef = useRef<HTMLDivElement | null>(null)

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setIsLoading(true)
    } else {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver)

    isLoading &&
      setTimeout(() => {
        setPage((prev) => prev + 1)
      }, delay)

    if (loadMoreRef.current) observer.observe(loadMoreRef.current)
  }, [isLoading])

  return { loadMoreRef, page, isLoading }
}
