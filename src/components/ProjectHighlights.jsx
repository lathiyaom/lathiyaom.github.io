import React from "react";

const ProjectHighlights = () => {
  const projects = [
    {
      title: "High-traffic notification platform",
      context:
        "5M+ daily events with unreliable delivery and duplicate messages",
      action:
        "Redesigned event processing with Kafka streams and Redis deduplication",
      outcome:
        "Achieved 99.9% delivery guarantee, eliminated duplicates, reduced infrastructure costs",
    },
    {
      title: "E-commerce booking system",
      context:
        "Race conditions causing double bookings and revenue loss during peak sales",
      action:
        "Implemented distributed locking with Redis and ACID transaction controls",
      outcome:
        "Zero double bookings, safe peak-traffic handling, protected revenue streams",
    },
    {
      title: "Legacy monolith migration",
      context: "System couldn't scale without downtime, blocking user growth",
      action:
        "Migrated to microservices with zero-downtime deployment strategy",
      outcome:
        "300% scalability improvement, 99.95% uptime during transition, faster feature releases",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 max-w-[1400px] mx-auto">
      <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight mb-3 relative inline-block text-gray-900 after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-[60px] after:h-[3px] after:bg-blue-800 after:rounded-full">
        Proof / Experience Highlights
      </h2>
      <p className="text-gray-500 flex flex-start text-lg mb-16 max-w-2xl font-poppins">
        <i>
          
          <strong> Real systems. Real problems. Measurable outcomes.</strong>
        </i>
      </p>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-[14px] p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-blue-800/20 hover:-translate-y-0.5"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3 before:content-[''] before:w-2 before:h-2 before:bg-blue-800 before:rounded-full">
                {p.title}
              </h3>

              <p className="text-gray-600 mb-3 leading-relaxed">
                <strong className="text-gray-900 font-semibold">
                  Context:
                </strong>{" "}
                {p.context}
              </p>

              <p className="text-gray-600 mb-3 leading-relaxed">
                <strong className="text-gray-900 font-semibold">Action:</strong>{" "}
                {p.action}
              </p>

              <p className="text-emerald-700 leading-relaxed bg-emerald-50 px-4 py-3 rounded-lg border-l-4 border-emerald-600">
                <strong className="text-emerald-800 font-semibold">
                  Outcome:
                </strong>{" "}
                {p.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;
