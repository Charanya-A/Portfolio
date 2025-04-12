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
    </section>
  );
};

export default Education;
