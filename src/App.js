import React from 'react';
import './App.css';

import Hero from './components/Hero';
import BusinessPain from './components/BusinessPain';
import BackendServices from './components/BackendServices';
import ProjectHighlights from './components/ProjectHighlights';
import TechStack from './components/TechStack';
import PublicEngineering from './components/PublicEngineering';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="App">
      {/* Global layout wrapper */}
      <main className="page">
        <Hero />
        <BusinessPain />
        <BackendServices />
        <ProjectHighlights />
        <TechStack />
        <PublicEngineering />
        <CallToAction />
      </main>
    </div>
  );
}

export default App;
