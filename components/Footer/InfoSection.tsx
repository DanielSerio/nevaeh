import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import LinkButton from '../controls/LinkButton';

export default function InfoSection() {
  return (
    <div className="footer-section info-section">
      <img src="/logo.png" alt="Nevaeh Logo" />
      <p>For more information about Nevaeh and for our experienced
        program managers please contact us.</p>
      <LinkButton type="social" href="https://www.linkedin.com/in/tom-denoma-b0386518a/">
        <span className="icon"><BsLinkedin /></span>
        <span className="text">Linkedin</span>
      </LinkButton>
    </div>
  );
}
