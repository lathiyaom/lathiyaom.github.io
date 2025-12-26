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
    <section className="bg-white py-20 px-6 max-w-[1400px] mx-auto">
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight mb-3 relative inline-block text-gray-900 after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-[60px] after:h-[3px] after:bg-blue-800 after:rounded-full">
         How I Work
        </h2>
      <div className="max-w-[1200px] mx-auto px-6">
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-2">
          {workSteps.map((step, index) => (
            <div 
              key={index} 
              className="bg-[#FAFAFA] rounded-[14px] p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-100 hover:border-blue-800/20 group"
            >
              <div className="text-[3rem] font-bold text-blue-800/10 absolute top-4 right-4 leading-none transition-colors duration-300 group-hover:text-blue-800/20">{step.step}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 relative z-10">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed text-[0.95rem] relative z-10">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackendServices;
