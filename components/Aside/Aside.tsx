import React from 'react';
import { MdMail, MdPhone } from 'react-icons/md';
import LinkButton from '../controls/LinkButton';

export default function Aside() {
  return (
    <aside className="aside">
      <section className="aside-container">
        <span className="text-large">For more infomation contact</span>
        <address>
          <h1>Tom DeNoma</h1>
          <h2 className="p">President & CEO</h2>
          <a href="tel:+16145619904">
            <span className="icon"><MdPhone /></span>
            <span className="text">614 561 9904</span>
          </a>
          <a href="mailto:tom.denoma@nevaehinsurance.com">
            <span className="icon"><MdMail /></span>
            <span className="text">tom.denoma@nevaehinsurance.com</span>
          </a>
        </address>
      </section>
    </aside>
  );
}
