import React from 'react';

const CallToAction = () => {
  return (
    <section id="contact" className="call-to-action section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-buttons">
            <a
              href="mailto:omlathiya.dev@gmail.com"
              className="btn-primary cta-primary"
            >
              Schedule a Call
            </a>
          </div>

          <p className="cta-description">
            Let's discuss your backend challenges and explore how we can prevent them from impacting your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
