import React from "react";

const TechStack = () => {
  const coreCapabilities = [
    {
      title: "System Reliability Engineering",
      description:
        "Builds fault-tolerant architectures that prevent outages and data loss, keeping businesses operational during traffic spikes",
    },
    {
      title: "Database & Transaction Design",
      description:
        "Creates data models and transaction logic that maintain integrity at scale, eliminating corruption and race conditions",
    },
    {
      title: "Performance & Scaling Architecture",
      description:
        "Designs systems that handle growth without exponential cost increases, optimizing for both speed and efficiency",
    },
    {
      title: "Quality Assurance & Testing",
      description:
        "Implements comprehensive testing strategies that catch issues before production, ensuring system stability",
    },
    {
      title: "Observability & Monitoring",
      description:
        "Implements metrics, logging, and alerting to detect failures early and diagnose issues before customers are affected",
    },
    {
      title: "Failure Analysis & Risk Mitigation",
      description:
        "Identifies systemic risks and designs safeguards to prevent cascading failures and revenue-impacting incidents",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 max-w-[1400px] mx-auto">
      <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight mb-3 relative inline-block text-gray-900 after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-[60px] after:h-[3px] after:bg-blue-800 after:rounded-full">
        Core Technical Capabilities
      </h2>
      <div className="max-w-[1200px] mx-auto mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreCapabilities.map((capability, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-lg p-7 border border-gray-200 border-l-4 border-l-transparent transition-all duration-500 group-hover:border-gray-300 group-hover:shadow-lg group-hover:bg-gray-50 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-800 to-blue-600 transform origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100"></div>

                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors duration-300 line-clamp-2">
                    {capability.title}
                  </h4>

                  <div className="w-8 h-0.5 bg-blue-800 rounded-full mb-4 transition-all duration-500 group-hover:w-12"></div>

                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {capability.description}
                  </p>
                </div>

                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-tl from-blue-800/5 to-transparent rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
