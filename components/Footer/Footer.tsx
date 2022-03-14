import React from 'react';
import CertSection from './CertSection';
import ContactSection from './ContactSection';
import FooterBlock from './FooterBlock';
import InfoSection from './InfoSection';
import NavSection from './NavSection';

export default function Footer() {
  return (
    <footer className="footer">
      <FooterBlock>
        <div className="footer-top">
          <div className="image-container">
            <img className="footer-top-logo" src="/n-logo.png" alt="Nevaeh Logo" />
          </div>
          <div className="card footer-card">
            <h1>Why Nevaeh?</h1>
            <h2 className='p'>Nevaeh’s experienced team brings efficiencies
              and nimbleness to our program managers. We create value by:</h2>
            <ul>
              <li>Providing an A-rated carrier/insurance paper</li>
              <li>Bringing a healthy risk appetite</li>
              <li>Delivering product and program expertise,
                including 40+ years of specialty program experience</li>
              <li>Aligning interest with a carrier that values
                program business</li>
            </ul>
          </div>
        </div>
      </FooterBlock>
      <FooterBlock className='sections'>
        <InfoSection />
        <ContactSection />
        <NavSection />
        <CertSection />
      </FooterBlock>
      <FooterBlock style={{ textAlign: 'center' }}>
        <small>Copyright © 2021 Nevaeh Insurance Solutions
          | All rights reserved.</small>
      </FooterBlock>
    </footer>
  );
}
