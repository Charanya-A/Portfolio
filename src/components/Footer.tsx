import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>2025 © Charanya A</p>
      </div>

      <div className="footer-center">
        <Link to="/attributions" className="footer-link">Attributions</Link>
        <Link to="/shout-outs" className="footer-link">Shout Outs</Link>
        <Link to="/affiliates" className="footer-link">Affiliates</Link>
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



