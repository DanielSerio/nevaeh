import React, { ReactElement } from 'react';
import DesktopNav from '../navigation/DesktopNav';
import MobileNav from '../navigation/MobileNav';
import HeaderLogoArea from './HeaderLogoArea';
import { AiFillHome, AiOutlineLineChart, AiOutlineSafety } from 'react-icons/ai'
import { RiFileUserFill } from 'react-icons/ri'
import { FaMicroblog } from 'react-icons/fa'
import HeaderContactInfo from './HeaderContactInfo';

export interface PageLink {
  icon: ReactElement
  text: string
  url: string
}

export default function Header() {
  const pages: PageLink[] = [
    {
      icon: <AiFillHome />,
      text: 'Home',
      url: '/'
    },
    {
      icon: <AiOutlineSafety />,
      text: 'Nevaeh',
      url: '/nevaeh'
    },
    {
      icon: <AiOutlineLineChart />,
      text: 'Nevaeh Advantage',
      url: '/nevaeh-advantage'
    },
    {
      icon: <RiFileUserFill />,
      text: 'Tom DeNoma',
      url: '/tom-denoma'
    },
    {
      icon: <FaMicroblog />,
      text: 'Blogs',
      url: '/blogs'
    }
  ]
  return (
    <header className="header">
      <section className="container">
        <HeaderLogoArea />
        <nav className='main-nav'>
          <DesktopNav links={pages} />
          <HeaderContactInfo />
          <MobileNav links={pages} />
        </nav>
      </section>
    </header>
  );
}
