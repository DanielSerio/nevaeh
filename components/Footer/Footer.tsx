import React from 'react';
import FooterBlock from './FooterBlock';

export default function Footer() {
  return (
    <footer className="footer">
      <FooterBlock>
        <div className="footer-top">
          <div className="image-container"></div>
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
      <FooterBlock>
        sections
      </FooterBlock>
      <FooterBlock></FooterBlock>
    </footer>
  );
}
