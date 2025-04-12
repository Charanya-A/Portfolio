import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import WorkExp from './components/WorkExp';
import Footer from './components/Footer';
import Attributions from './pages/Attributions'; 
import ShoutOut from './pages/ShoutOut';
import Affiliates from './pages/Affiliates';

const MainContent = () => (
  <>
    <Hero />
    <About />
    <WorkExp />
    <Projects />
    <Education />
    <Contact />
  </>
);

const App: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="app">
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/attributions" element={<Attributions />} />
            <Route path="/shout-outs" element={<ShoutOut />} />
            <Route path="/affiliates" element={<Affiliates />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
