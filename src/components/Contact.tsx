import React from 'react';
import { MdEmail } from 'react-icons/md';

const Contact: React.FC = () => {
  return (
    <section className="section">
      <h1 className="section-title">Contact</h1>
      <div className="section-content contact-text">
        <p>
          Feel free to reach out to me via&nbsp;
          <a
            href="mailto:charanya.1si21is015@gmail.com"
            className="email-inline-icon"
            aria-label="Email Charanya"
          >
            <MdEmail />
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
