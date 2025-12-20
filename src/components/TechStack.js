import React from "react";

const TechStack = () => {
  const coreCapabilities = [
    {
      title: "System Reliability Engineering",
      description: "Builds fault-tolerant architectures that prevent outages and data loss, keeping businesses operational during traffic spikes"
    },
    {
      title: "Database & Transaction Design",
      description: "Creates data models and transaction logic that maintain integrity at scale, eliminating corruption and race conditions"
    },
    {
      title: "Performance & Scaling Architecture",
      description: "Designs systems that handle growth without exponential cost increases, optimizing for both speed and efficiency"
    },
    {
      title: "Quality Assurance & Testing",
      description: "Implements comprehensive testing strategies that catch issues before production, ensuring system stability"
    },
    {
      title: "Observability & Monitoring",
      description: "Implements metrics, logging, and alerting to detect failures early and diagnose issues before customers are affected"
    },
    {
      title: "Failure Analysis & Risk Mitigation",
      description: "Identifies systemic risks and designs safeguards to prevent cascading failures and revenue-impacting incidents"
    }
  ];
  

  return (
    <section className="tech-stack section">
      <div className="container">
        <h2 className="section-title">Core Capabilities (Compressed)</h2>

        <div className="core-capabilities">
          <div className="capabilities-grid">
            {coreCapabilities.map((capability, index) => (
              <div key={index} className="capability-item">
                <h4 className="capability-title">{capability.title}</h4>
                <p className="capability-description">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
