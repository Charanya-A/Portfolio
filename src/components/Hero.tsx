import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src="pic.jpg"
        alt="Profile"
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '1rem',
        }}
      />
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Charanya A</h1>
      <p style={{ color: '#d1d5db' }}>Full Stack Developer</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}>
        <a href="https://github.com/Charanya-A" target="_blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/charanya-amarnath-26169a246" target="_blank"><FaLinkedin /></a>
        <a href="https://www.instagram.com/charanya_amarnath?igshid=NGExMmI2YTkyZg==" target="_blank"><FaInstagram /></a>
      </div>
    </div>
  );
};

export default Hero;
