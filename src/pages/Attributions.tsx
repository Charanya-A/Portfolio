import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle', color: 'white' };

const Attributions: React.FC = () => {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#121212', minHeight: '100vh', color: 'white' }}>
      <p style={{ color: '#d1d5db', fontSize: '0.9rem' }}>
        <Link to="/" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Home</Link> {'>'} Attributions
      </p>

      <h2 style={{ marginTop: '1rem' }}>Attributions</h2>

      <ul style={{ marginTop: '1.5rem', lineHeight: '2' }}>
        <li>
          <a href="https://icons8.com/icon/ARy6tFUfwclb/github" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6' }}>
            <FaGithub style={iconStyle} />
            GitHub Icon
          </a>{" "}
          by <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6' }}>Icons8</a>
        </li>
        <li>
          <a href="https://icons8.com/icons/set/linkedin" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6' }}>
            <FaLinkedin style={iconStyle} />
            LinkedIn Icon
          </a>{" "}
          by <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6' }}>Icons8</a>
        </li>
        <li>
          <a href="https://icons8.com/icon/ZOFC5nSr215Y/instagram" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6' }}>
            <FaInstagram style={iconStyle} />
            Instagram Icon
          </a>{" "}
          by <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6' }}>Icons8</a>
        </li>
      </ul>
    </div>
  );
};

export default Attributions;
