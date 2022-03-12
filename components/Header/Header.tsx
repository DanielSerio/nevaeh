import React from 'react';
import DesktopNav from '../navigation/DesktopNav';
import MobileNav from '../navigation/MobileNav';
import HeaderLogoArea from './HeaderLogoArea';

export default function Header() {
  return (
    <header className="header">
      <section className="container">
        <HeaderLogoArea />
        <nav className='main-nav'>
          <DesktopNav />
          <MobileNav />
        </nav>
      </section>
    </header>
  );
}
