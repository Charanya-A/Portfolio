import React from 'react';
import "../styles/Publications.css";

const Publications: React.FC = () => {
  return (
    <section className="work-section" id="publication">
      <h2 className="work-title">Publication</h2>

      <div className="work-card">
        <div className="work-header">
          <span className="work-role">
            Early Disease Detection in Potato Plant using Deep Learning for Precise Agriculture
          </span>
          <a
            href="https://thegrenze.com/index.php?display=page&view=journalabstract&absid=3692&id=8"
            target="_blank"
            rel="noopener noreferrer"
            className="work-badge company hover-link"
          >
            Grenze Scientific Society
          </a>
          <span className="work-badge duration">Published: February 2025</span>
        </div>
        <p className="work-desc">
          This paper proposes a deep learning approach for early disease detection in potato crops, enhancing yield prediction and enabling timely intervention in precision agriculture.
        </p>
      </div>
    </section>
  );
};

export default Publications;
