import React from 'react';

const BackendServices = () => {
  const workSteps = [
    {
      step: "01",
      title: "Assess your current systems",
      description: "Review architecture, identify failure points, and quantify business risk"
    },
    {
      step: "02",
      title: "Define success criteria",
      description: "Clarify reliability, performance, and cost goals before making changes"
    },
    {
      step: "03",
      title: "Prioritize critical fixes",
      description: "Focus first on issues that cause outages, data loss, or revenue impact"
    },
    {
      step: "04",
      title: "Implement proven solutions",
      description: "Apply battle-tested patterns that scale reliably under real traffic"
    },
    {
      step: "05",
      title: "Validate under load",
      description: "Test failure scenarios and peak traffic to confirm system behavior"
    },
    {
      step: "06",
      title: "Establish monitoring",
      description: "Set up metrics and alerts so problems surface before customers notice"
    }
  ];
  

  return (
    <section className="backend-services section">
      <div className="container">
        <h2 className="section-title">How I Work</h2>

        <div className="services-grid">
          {workSteps.map((step, index) => (
            <div key={index} className="service-card">
              <div className="step-number">{step.step}</div>
              <h3 className="service-title">{step.title}</h3>
              <p className="service-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackendServices;
