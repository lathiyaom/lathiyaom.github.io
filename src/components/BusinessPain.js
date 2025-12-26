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
    <section className="bg-[#FAFAFA] py-10 relative">
      <div className="max-w-[1400px] mx-auto px-4 w-full box-border">
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight mb-3 relative inline-block text-gray-900 after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-[60px] after:h-[3px] after:bg-blue-800 after:rounded-full">
          Why Clients Hire Me
        </h2>

        <div className="max-w-[1200px] mx-auto mt-8">
          {hireReasons.map((item, index) => (
            <div 
              key={index} 
              className="flex gap-6 bg-white p-4 rounded-[14px] shadow-sm border border-gray-200 mb-6 transition-all duration-300 relative overflow-hidden before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-blue-800 before:scale-y-0 before:transition-transform before:duration-300 before:origin-top hover:shadow-lg hover:-translate-y-0.5 hover:border-gray-300 hover:before:scale-y-100 md:flex-col md:gap-4 md:text-left md:p-6"
            >
              <span className="text-blue-800 text-[1.75rem] flex-shrink-0 mt-1 font-bold" aria-hidden="true">✓</span>
              <p className="text-gray-500 text-base leading-relaxed">
                <strong className="text-gray-900 font-semibold">{item.pain}:</strong>{" "}
                {item.detail}{" "}
                <span className="text-emerald-600">{item.outcome}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessPain;
