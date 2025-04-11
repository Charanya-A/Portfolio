import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin} from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section className="section">
      <h1 className="section-title">Connect</h1>
      <div className="section-content contact-text">
        <p>
          Feel free to reach out to me via&nbsp;
          <a
            href="mailto:charanya.1si21is015@gmail.com"
            className="email-inline-icon"
            aria-label="Email Charanya"
          >
            <a href="https://www.linkedin.com/in/charanya-amarnath-26169a246" target="_blank" rel="noopener noreferrer"><FaLinkedin className="footer-icon"/></a>
            <MdEmail />
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
