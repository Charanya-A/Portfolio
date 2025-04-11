import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const scrollToWorkExperience = () => {
    const workExpSection = document.getElementById('work-experience');
    if (workExpSection) {
      workExpSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-container">
      <img src="/pic.jpg" alt="Profile" className="hero-image" />

      <div className="hero-content">
        <h1 className="hero-name">Charanya A</h1>
        <p className="hero-role" onClick={scrollToWorkExperience} style={{ cursor: 'pointer', color: '#0073e6', textDecoration: 'underline' }}>
          Full Stack Developer
        </p>
        <div className="hero-icons">
          <a href="https://github.com/Charanya-A" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/charanya-amarnath-26169a246" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/charanya_amarnath?igshid=NGExMmI2YTkyZg==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;