import { useRouter } from 'next/router';
import React, { ComponentProps } from 'react';
import { PageLink } from '../Header/Header';

interface DesktopNavProps extends ComponentProps<'ul'> {
  links: PageLink[]
}
export default function DesktopNav(Props: DesktopNavProps) {
  const { links, ...props } = Props
  const router = useRouter()

  function liClassName(link: PageLink): string | undefined {
    const re = new RegExp(`${link.url}$`)
    if (re.test(router.pathname)) return 'active'
    return undefined
  }
  return (
    <ul className="desktop-nav" {...props}>
      {Boolean(links) && links.map((link: PageLink) => {
        return (
          <li key={link.url} className={liClassName(link)}>
            <a href={link.url} className="text-small">
              <span className="icon">{link.icon}</span>
              <span className="text">{link.text}</span>
            </a>
          </li>
        )
      })
      }
    </ul>
  );
}
