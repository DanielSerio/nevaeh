import { useState, UIEvent } from "react"

export default function usePageScroll() {
  const [scrolltop, setScrolltop] = useState<number>(0)

  function onScroll(e: UIEvent) {
    const { scrollTop } = e.target as HTMLDivElement
    if (scrollTop <= 600) setScrolltop(scrollTop)
  }

  return { onScroll, scrolltop }
}