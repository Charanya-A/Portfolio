import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="content-wrapper">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
