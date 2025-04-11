import React from 'react';
import "../styles/Education.css"; 

const Education: React.FC = () => {
  return (
    <section className="education-section">
      <h1 className="education-title">Education</h1>
      <div className="education-card">
        <p className="education-degree">
          Bachelor of Engineering
          <span className="education-badge">Information Science</span>
          <span className="education-badge">2021–2025</span>
        </p>
        <p className="education-college">Siddaganga Institute Of Technology</p>
        <p className="education-cgpa">CGPA - 9.24</p>
      </div>
    </section>
  );
};

export default Education;
