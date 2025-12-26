import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="contact" className="bg-gradient-to-br from-blue-800 to-blue-900 py-20 px-6 text-white">
      <div className="max-w-[800px] mx-auto px-6">

        {/* Social proof / contact options */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://www.linkedin.com/in/om-lathiya-0403382a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-full transition-all duration-300 text-white no-underline hover:-translate-y-0.5"
          >
            <span className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
              <Linkedin size={18} />
            </span>
            <span className="font-medium">LinkedIn</span>
          </a>

          <a
            href="https://github.com/lathiyaom"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-full transition-all duration-300 text-white no-underline hover:-translate-y-0.5"
          >
            <span className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
              <Github size={18} />
            </span>
            <span className="font-medium">GitHub</span>
          </a>

          <a
            href="mailto:omlathiya.dev@gmail.com"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-full transition-all duration-300 text-white no-underline hover:-translate-y-0.5"
          >
            <span className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
              <Mail size={18} />
            </span>
            <span className="font-medium">Email</span>
          </a>
        </div>

        {/* CTA content */}
        <div className="text-center">
          <p className="text-xl text-white/90 mb-4 leading-relaxed">
            If this sounds like how you want your backend to behave,
            let's talk before problems turn into outages.
          </p>

          <p className="text-white/60 mb-8 text-sm">
            30-minute clarity call · No sales pitch · Clear next steps
          </p>

          <div className="flex justify-center">
            <a
              href="mailto:omlathiya.dev@gmail.com"
              className="inline-flex items-center justify-center bg-white text-blue-800 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-lg no-underline"
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
