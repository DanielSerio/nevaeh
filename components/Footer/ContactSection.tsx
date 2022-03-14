import React from 'react';
import { AiFillMail } from 'react-icons/ai';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';

export default function ContactSection() {
  return (
    <div className="footer-section contact-section">
      <h2 className="h3">Contact</h2>
      <ul>
        <li>
          <div className="label">
            <span className="icon">
              <BsFillTelephoneOutboundFill />
            </span>
            <span className="text">Phone</span>
          </div>
          <a className="value" href="tel:+16145619904">
            +1 614-561-9904
          </a>
        </li>
        <li>
          <div className="label">
            <span className="icon">
              <AiFillMail />
            </span>
            <span className="text">Email</span>
          </div>
          <a className="value" href="mailto:tom.denoma@nevaehinsurance.com">
            tom.denoma@nevaehinsurance.com
          </a>
        </li>
        <li>
          <img src="/qr.jpg" alt="QR Code" />
        </li>
      </ul>
    </div>
  );
}
