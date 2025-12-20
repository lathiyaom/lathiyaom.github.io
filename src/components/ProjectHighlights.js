import React from "react";

const ProjectHighlights = () => {
  const projects = [
    {
      title: "High-traffic notification platform",
      context: "5M+ daily events with unreliable delivery and duplicate messages",
      action: "Redesigned event processing with Kafka streams and Redis deduplication",
      outcome: "Achieved 99.9% delivery guarantee, eliminated duplicates, reduced infrastructure costs"
    },
    {
      title: "E-commerce booking system",
      context: "Race conditions causing double bookings and revenue loss during peak sales",
      action: "Implemented distributed locking with Redis and ACID transaction controls",
      outcome: "Zero double bookings, safe peak-traffic handling, protected revenue streams"
    },
    {
      title: "Legacy monolith migration",
      context: "System couldn't scale without downtime, blocking user growth",
      action: "Migrated to microservices with zero-downtime deployment strategy",
      outcome: "300% scalability improvement, 99.95% uptime during transition, faster feature releases"
    }
  ];

  return (
    <section className="section project-highlights">
      <div className="container">
        <h2 className="section-title">Proof / Experience Highlights</h2>
        <p className="section-subtitle">
          Real systems. Real problems. Measurable outcomes.
        </p>

        <div className="projects-list">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <h3 className="project-title">{p.title}</h3>

              <p className="project-context">
                <strong>Context:</strong> {p.context}
              </p>

              <p className="project-action">
                <strong>Action:</strong> {p.action}
              </p>

              <p className="project-outcome">
                <strong>Outcome:</strong> {p.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;
  