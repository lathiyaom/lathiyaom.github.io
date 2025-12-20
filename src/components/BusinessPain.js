import React from 'react';

const BusinessPain = () => {
  const hireReasons = [
    {
      pain: "Revenue loss from downtime",
      detail:
        "Founders lose customers when systems fail during peak traffic.",
      outcome:
        "I design architectures that maintain 99.9%+ uptime."
    },
    {
      pain: "Data corruption and race conditions",
      detail:
        "Inconsistent state creates support overhead and compliance risk.",
      outcome:
        "I implement transactional safeguards that protect data integrity."
    },
    {
      pain: "Unpredictable scaling costs",
      detail:
        "Poor architecture turns growth into runaway infrastructure bills.",
      outcome:
        "I build systems that scale predictably and cost-effectively."
    }
  ];

  return (
    <section className="business-pain section">
      <div className="container">
        <h2 className="section-title">Why Clients Hire Me</h2>

        <div className="pain-list">
          {hireReasons.map((item, index) => (
            <div key={index} className="pain-item">
              <span className="pain-bullet" aria-hidden="true" style={{ color: 'blue' }}>✓</span>
              <p className="pain-text">
                <strong className="pain-highlight" style={{ color: 'black' }}>{item.pain}:</strong>{" "}
                {item.detail}{" "}
                <span className="pain-outcome">{item.outcome}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessPain;
