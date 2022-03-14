import React, { ComponentProps, CSSProperties } from 'react';

export interface FigureProps extends ComponentProps<'figure'> {
  caption: string
  imgSrc: string
  imgAlt: string
  height: number
  width: number
}

export default function Figure(Props: FigureProps) {
  const { caption, imgSrc, imgAlt, width, height, ...props } = Props

  const imgStyles: CSSProperties = {
    height: `${height}px`,
    width: `${width}px`,
    objectFit: 'cover',
    objectPosition: 'top center'
  }

  return (
    <div className="figure-container">
      <figure {...props}>
        <img src={imgSrc} alt={imgAlt} style={imgStyles} />
        <figcaption>
          <small>{caption}</small>
        </figcaption>
      </figure>
    </div>
  );
}
