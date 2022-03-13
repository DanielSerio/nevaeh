import React, { ComponentProps } from 'react';
import { PageLink } from '../Header/Header';

interface DesktopNavProps extends ComponentProps<'ul'> {
  links: PageLink[]
}
export default function DesktopNav(Props: DesktopNavProps) {
  const { links, ...props } = Props
  return (
    <ul className="desktop-nav" {...props}>
      {Boolean(links) && links.map((link: PageLink) => {
        return (
          <li key={link.url}>
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
