import React, { ComponentProps } from 'react';
import { formatClassNames } from '../../utils';

interface PageBlockProps extends ComponentProps<'section'> {
  inverted?: boolean
}


export default function PageBlock(Props: PageBlockProps) {
  const { inverted, className, children, ...props } = Props
  const base: string = `page-block ${inverted ? 'inverted' : ''}`.trimEnd()
  return (
    <section className={formatClassNames(base, className)} {...props}>
      <div className="page-block-container">
        {children}
      </div>
    </section>
  );
}
