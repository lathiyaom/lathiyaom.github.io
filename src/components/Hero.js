import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            I prevent backend failures that cost you customers
          </h1>

          <p className="hero-subtitle">
            Reliable systems that scale without the constant firefighting.
          </p>

          {/* Primary CTA */}
          <div className="hero-cta">
            <a href="#contact" className="btn-primary">
              Schedule a Call
            </a>
          </div>

          {/* Secondary contact links — SAME CSS */}
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/om-lathiya-0403382a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="icon-box">
                <Linkedin size={16} />
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
                <Github size={16} />
              </span>
              <span className="link-text">GitHub</span>
            </a>

            <a
              href="mailto:omlathiya.dev@gmail.com"
              className="contact-link"
            >
              <span className="icon-box">
                <Mail size={16} />
              </span>
              <span className="link-text">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
