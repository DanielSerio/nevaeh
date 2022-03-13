import React, { ComponentProps, RefObject, useCallback, useRef, useState } from 'react';
import { useClickOutside } from '../../hooks/use-click-outside';
import { formatClassNames } from '../../utils';
import MenuButton from '../controls/MenuButton';
import { PageLink } from '../Header/Header';

interface MobileNavProps extends ComponentProps<'ul'> {
  links: PageLink[]
}

export default function MobileNav(Props: MobileNavProps) {
  const { links, ...props } = Props
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
  const ref: RefObject<HTMLUListElement> = useRef<HTMLUListElement>(null)

  const close = useCallback(
    () => setMenuIsOpen(false)
    , [setMenuIsOpen])

  useClickOutside(ref, close, menuIsOpen)

  const toggleIsOpen = useCallback(
    () => {
      setMenuIsOpen(!menuIsOpen)
    }
    , [menuIsOpen, setMenuIsOpen])


  return (
    <div className="mobile-nav-container">
      <MenuButton onClick={toggleIsOpen} />
      <ul ref={ref} className={formatClassNames('mobile-nav', menuIsOpen ? 'open' : undefined)} {...props}>
        {Boolean(links) && links.map((link: PageLink) => {
          return (
            <li key={link.url}>
              <a href={link.url} className="text-small">
                <span className="icon">{link.icon}</span>
                <span className="text">{link.text}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
