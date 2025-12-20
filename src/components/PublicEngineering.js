import React from 'react';

const PublicEngineering = () => {
  return (
    <section className="public-engineering section">
      <div className="container container-narrow">
        <h2 className="section-title">Trust Signals</h2>

        {/* Scannable trust list */}
        <ul className="trust-list">
          <li className="trust-point">
            <strong>2.5+ years</strong> designing and maintaining backend systems
            where reliability, data integrity, and scale matter
          </li>

          <li className="trust-point">
            <strong>Public engineering work</strong> — regularly publishing
            practical articles on backend architecture, failure modes, and
            system design on LinkedIn and Medium
          </li>

          <li className="trust-point">
            <strong>Systems-first mindset</strong> focused on preventing outages,
            race conditions, and scaling failures before they impact real users
          </li>
        </ul>

        {/* Philosophy */}
        <div className="trust-philosophy">
          <blockquote className="philosophy-quote">
            “Good engineering is invisible. You only notice it when it fails —
            my work is to make sure it doesn’t.”
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default PublicEngineering;
