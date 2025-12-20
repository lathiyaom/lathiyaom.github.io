import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="contact" className="call-to-action section">
      <div className="container container-narrow">

        {/* Social proof / contact options */}
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/om-lathiya-0403382a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="icon-box">
              <Linkedin size={18} />
            </span>
            <span className="link-text">LinkedIn</span>
          </a>

          <a
            href="https://github.com/lathiyaom"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="icon-box">
              <Github size={18} />
            </span>
            <span className="link-text">GitHub</span>
          </a>

          <a
            href="mailto:omlathiya.dev@gmail.com"
            className="contact-link"
          >
            <span className="icon-box">
              <Mail size={18} />
            </span>
            <span className="link-text">Email</span>
          </a>
        </div>

        {/* CTA content */}
        <div className="cta-content">
          <p className="cta-description">
            If this sounds like how you want your backend to behave,
            let’s talk before problems turn into outages.
          </p>

          <p className="cta-meta">
            30-minute clarity call · No sales pitch · Clear next steps
          </p>

          <div className="cta-buttons">
            <a
              href="mailto:omlathiya.dev@gmail.com"
              className="btn-primary cta-primary"
            >
              Schedule a Call
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CallToAction;
