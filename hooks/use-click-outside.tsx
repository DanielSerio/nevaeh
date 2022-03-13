import { RefObject, useEffect } from "react";

export function useClickOutside(
  ref: RefObject<HTMLElement>,
  callback: () => void,
  menuIsOpen: boolean
): void {
  useEffect(() => {
    function handler(this: Document, e: MouseEvent) {
      if (ref && ref.current) {
        if (
          menuIsOpen &&
          !(e.target as HTMLElement).contains(ref.current as HTMLElement)
        ) callback()
      }
    }

    document.addEventListener('click', handler)

    return () => {
      document.removeEventListener('click', handler)
    }
  }, [ref, callback, menuIsOpen])
}