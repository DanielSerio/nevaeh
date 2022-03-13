import React, { ComponentProps } from 'react';

interface HeroProps extends ComponentProps<'div'> {
  url: string
  scrolltop: number
}

export default function Hero(Props: HeroProps) {
  const { url, children, scrolltop, ...props } = Props
  const styles = {
    backgroundImage: `url(${url})`,
    transform: `translateZ(-${200 + (scrolltop * 1.5)}px) translateY(-${scrolltop / 4}px)`,
    filter: `grayscale(30%) sepia(${(scrolltop || 1) / 300})`
  }
  return (
    <div className="hero" {...props}>
      <div className="hero-background" style={styles}></div>
      <div className="hero-foreground">
        <div className="hero-content-container">
          {children}
        </div>
      </div>
    </div>
  );
}
