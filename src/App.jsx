import React from 'react';
import './App.css';
import { useLenis } from './hooks/useLenis';

import Hero from './components/Hero';
import BusinessPain from './components/BusinessPain';
import BackendServices from './components/BackendServices';
import ProjectHighlights from './components/ProjectHighlights';
import TechStack from './components/TechStack';
import PublicEngineering from './components/PublicEngineering';
import CallToAction from './components/CallToAction';

function App() {
  useLenis();

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Global layout wrapper */}
      <main className="max-w-full mx-auto p-0 w-full box-border">
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
