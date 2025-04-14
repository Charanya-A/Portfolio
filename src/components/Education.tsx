import React from 'react';
import "../styles/Education.css"; 

const Education: React.FC = () => {
  return (
    <section className="education-section">
      <h2 className="education-title">Education</h2>
      <div className="education-card">
        <p className="education-role">
          Bachelor of Engineering
          <span className="education-badge stream">Information Science</span>
          <span className="education-badge duration">2021–2025</span>
        </p>
        <p className="education-college">Siddaganga Institute Of Technology</p>
        <p className="education-cgpa">CGPA - 9.24</p>
      </div>

      <div className="education-card">
        <p className="education-role">
          Pre-University Course (PUC)
          <span className="education-badge stream">PCMC</span>
          <span className="education-badge duration">2019–2021</span>
        </p>
        <p className="education-college">Vidyanidhi PU College</p>
        <p className="education-cgpa">Percentage - 98%</p>
      </div>

      <div className="education-card">
        <p className="education-role">
          10th Standard
          <span className="education-badge duration">2019</span>
        </p>
        <p className="education-college">Sri Chaitanya Techno School</p>
        <p className="education-cgpa">Percentage - 95.4%</p>
      </div>

    </section>
  );
};

export default Education;
