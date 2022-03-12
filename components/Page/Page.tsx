import React, { ComponentProps } from 'react';
import { formatClassNames } from '../../utils';

export interface PageProps extends ComponentProps<'div'> { }

export default function Page({ className, children, ...props }: PageProps) {
  return (
    <div className={formatClassNames('page', className)} {...props}>
      {children}
    </div>
  );
}
