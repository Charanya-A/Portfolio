import React from 'react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        <a
          href="https://github.com/Charanya-A/Portfolio-new-"
          className="project-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project-header">
            <h3 className="project-title">My Digital Space</h3>
          </div>
          <p className="project-description">Vite · React · TypeScript · TailwindCSS</p>
        </a>

        <a
          href="https://github.com/Charanya-A/Early-Disease-Detection-in-Potato-Plant-using-Deep-Learning-for-Precise-Agriculture"
          className="project-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project-header">
            <h3 className="project-title">Early-Disease-Detection-in-Potato-Plant-using-Deep-Learning-for-Precise-Agriculture</h3>
            <span className="project-badge">Open Source</span>
          </div>
          <p className="project-description">Deep Learning</p>
        </a>

        <a
          href="https://github.com/Charanya-A/Real-Time-LPG-Leakage-Detection-System-using-MQ-5-sensor-and-Arduino-UNO"
          className="project-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project-header">
            <h3 className="project-title">Real-Time-LPG-Leakage-Detection-System-using-MQ-5-sensor-and-Arduino-UNO</h3>
            <span className="project-badge">Open Source</span>
          </div>
          <p className="project-description">Embedded System</p>
        </a>

        <a
          href="https://github.com/Charanya-A/Waste-food-management-system"
          className="project-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project-header">
            <h3 className="project-title">Waste-food-management-system</h3>
            <span className="project-badge">Open Source</span>
          </div>
          <p className="project-description">Python</p>
        </a>
      </div>
    </section>
  );
};

export default Projects;
