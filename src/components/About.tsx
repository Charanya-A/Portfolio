import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section className="about-container">
      <h2 className="about-title">Get to Know Me</h2>
      <div className="about-content">
        <p>
          Hey! I’m an aspiring full stack developer with a deep curiosity for how things work behind the screen. I'm currently learning, building, and refining my skills one project at a time.
        </p>
        <p>
          I love solving problems, experimenting with ideas, and turning concepts into real, usable digital experiences. For me, every bug fixed and every feature built is a small win in the bigger journey of becoming a better developer.
        </p>
        <p>
          Outside of coding, you’ll usually find me sketching, drawing different forms of art, spending time with friends, or just recharging with music and good conversations. I believe in staying creative, connected, and curious.
        </p>
      </div>
    </section>
  );
};

export default About;
