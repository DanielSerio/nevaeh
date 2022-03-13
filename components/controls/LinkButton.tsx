import React, { ComponentProps } from 'react';
import { formatClassNames } from '../../utils';

type LinkButtonType = 'primary' | 'accent' | 'footer';

interface LinkButtonProps extends ComponentProps<'a'> {
  type?: LinkButtonType
  href: string
}

export default function LinkButton(Props: LinkButtonProps) {
  const { type, href, children, ...props } = Props
  if (!type)
    return (
      <a href={href} className={formatClassNames('link-btn', type ? type : 'primary')} {...props}>
        {children}
      </a>
    );
}
