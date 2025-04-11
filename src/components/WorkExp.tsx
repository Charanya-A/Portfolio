import React from 'react';
import "../styles/WorkExp.css";

const WorkExp: React.FC = () => {
  return (
    <section className="work-section">
      <h1 className="work-title">Work Experience</h1>

      <div className="work-card">
        <p className="work-role">
          FullStack AI Developer Intern
          <a
            href="https://stacklane.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="work-badge company hover-link"
          >
            StackLane
          </a>
          <span className="work-badge duration">March 2025 – Present</span>
        </p>
        <p className="work-desc">
          Building modern web apps using Next.js, React.js, and Node.js. Hands-on with AI-driven development using Mistral models and Weaviate vector database.
        </p>
      </div>
    </section>
  );
};

export default WorkExp;
