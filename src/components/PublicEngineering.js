import React from 'react';

const PublicEngineering = () => {
  return (
    <section className="public-engineering section">
      <div className="container">
        <h2 className="section-title">Trust Signals</h2>

        <div className="trust-content">
          <div className="trust-item">
            <h3 className="trust-experience">2.5+ years</h3>
            <p className="trust-description">
              designing and maintaining backend systems where reliability, data integrity, and scale matter
            </p>
          </div>

          <div className="trust-item">
            <h3 className="trust-systems">Public Engineering Work</h3>
            <p className="trust-description">
              Regularly publishing technical articles on backend architecture, failure modes, and system design on LinkedIn and Medium
            </p>
          </div>

          <div className="trust-item">
            <h3 className="trust-thinking">Systems-first mindset</h3>
            <p className="trust-description">
              Focused on preventing outages, race conditions, and scaling failures before they impact real users
            </p>
          </div>

          <div className="trust-philosophy">
            <blockquote className="philosophy-quote">
              "Good engineering is invisible. You only notice it when it fails — my work is to make sure it doesn’t."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicEngineering;
