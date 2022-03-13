import React from 'react';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import LinkButton from '../controls/LinkButton';
export default function HeaderContactInfo() {
  return (
    <div className="header-contact-info text-small">
      <a href="tel:+16145619904">
        <span className="icon">
          <BsFillTelephoneOutboundFill />
        </span>
        <span className="text">+1 614-561-9904</span>
      </a>
      <LinkButton href="/contact">
        <span className="text">Get a Quote</span>
      </LinkButton>
    </div>
  );
}
