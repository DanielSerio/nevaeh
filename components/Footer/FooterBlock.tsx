import React, { ComponentProps } from 'react';
import { formatClassNames } from '../../utils';

export interface FooterBlockProps extends ComponentProps<'section'> { }

export default function FooterBlock(Props: FooterBlockProps) {
  const { children, className, ...props } = Props
  return (
    <section className={formatClassNames('footer-block', className)} {...props}>
      <div className="footer-block-container">
        {children}
      </div>
    </section>
  );
}
