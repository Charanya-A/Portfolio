import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import "../styles/Contact.css";

const Contact: React.FC = () => {
  return (
    <section className="connect-section">
      <h2 className="connect-title">Connect</h2>
      <div className="connect-card">
        <p className="connect-text">
          Feel free to reach out to me via&nbsp;
          <a
            href="mailto:charanya.1si21is015@gmail.com"
            className="email-inline-icon"
            aria-label="Email Charanya"
          >
            <MdEmail className="footer-icon" />
          </a>
          or through my&nbsp;
          <a
            href="https://www.linkedin.com/in/charanya-amarnath-26169a246"
            target="_blank"
            rel="noopener noreferrer"
            className="email-inline-icon"
          >
            <FaLinkedin className="footer-icon" />
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
