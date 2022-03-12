import React, { ComponentProps } from 'react';


interface ContentProps extends ComponentProps<'main'> { }

export default function Content({ children, ...props }: ContentProps) {
  return (
    <main className="content" {...props}>
      <div className="container">
        {children}
      </div>
    </main>
  );
}
