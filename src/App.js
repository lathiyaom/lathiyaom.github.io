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
      {/* LAYER 1: 30-SECOND CLIENT HOOK */}
      <Hero />
      <BusinessPain />
      
      {/* LAYER 2: TRUST & PROOF */}
      <BackendServices />
      <ProjectHighlights />
      
      {/* LAYER 3: ENGINEERING DEPTH (HIDDEN BY DEFAULT) */}
      <TechStack />
      <PublicEngineering />
      
      <CallToAction />
    </div>
  );
}

export default App;