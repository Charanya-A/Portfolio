import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa';
import '../styles/Footer.css';


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Copyright © 2025 – All rights reserved by Charanya A</p>
      </div>

      <div className="footer-center">
        <a href="/attributions" className="footer-link">Attributions</a>
        <a href="/shout-outs" className="footer-link">Shout Outs</a>
        <a href="/affiliates" className="footer-link">Affiliates</a>
      </div>

      <div className="footer-right">
        <a href="https://github.com/Charanya-A" target="_blank" rel="noopener noreferrer"><FaGithub className="footer-icon" /></a>
        <a href="https://www.linkedin.com/in/charanya-amarnath-26169a246" target="_blank" rel="noopener noreferrer"><FaLinkedin className="footer-icon"/></a>
        <a href="https://www.instagram.com/charanya_amarnath?igshid=NGExMmI2YTkyZg==" target="_blank" rel="noopener noreferrer"><FaInstagram className="footer-icon"/></a>
      </div>
    </footer>
  );
};

export default Footer;



