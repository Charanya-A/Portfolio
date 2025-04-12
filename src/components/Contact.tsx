import React, { useEffect, useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import "../styles/Contact.css";

const Contact: React.FC = () => {
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    const now = new Date();
    const date = now.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });
    const time = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
    setTimestamp(`${date} • ${time}`);
  }, []);

  return (
    <section className="connect-section">
      <h2 className="connect-title">Connect</h2>
      <p style={{ color: '#9ca3af', fontSize: '0.85rem', marginTop: '-0.5rem', marginBottom: '1.2rem' }}>
        {timestamp}
      </p>

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
