import React, { ComponentProps } from 'react';

interface HeroProps extends ComponentProps<'div'> {
  url: string
  scrolltop: number
}

export default function Hero(Props: HeroProps) {
  const { url, children, scrolltop, ...props } = Props
  const styles = {
    backgroundImage: `url(${url})`,
    //transform: `translateZ(-${200 + (scrolltop / 6)}px)`,
    filter: `grayscale(${30 + (Math.floor(scrolltop || 1) / 8)}%) blur(${scrolltop / 60}px)`
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
