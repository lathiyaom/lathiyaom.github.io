import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-white text-center py-14 pb-10 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 w-full box-border">
        <div>
          <h1 className="text-[3.5rem] font-bold tracking-tight max-w-[900px] mx-auto mb-6 text-gray-900 leading-[1.1] break-words [text-wrap:balance] md:text-[2.75rem] sm:text-[2.25rem]">
            I prevent backend failures that cost you customers
          </h1>

          <p className="text-xl text-gray-500 max-w-[680px] mx-auto mb-10 leading-relaxed md:text-lg">
            Reliable systems that scale without the constant firefighting.
          </p>

          {/* Primary CTA */}
          <div className="mb-8">
            <a 
              href="#contact" 
              className="bg-blue-800 text-white py-4 px-8 rounded-[14px] font-semibold text-base no-underline inline-flex items-center justify-center gap-3 transition-all duration-300 border-none cursor-pointer relative overflow-hidden shadow-md min-w-[160px] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-md"
            >
              Schedule a Call
            </a>
          </div>

          {/* Secondary contact links */}
          <div className="mt-8 mb-0 pt-0 flex justify-center gap-4 flex-wrap">
            <a
              href="https://www.linkedin.com/in/om-lathiya-0403382a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 border border-gray-200 py-[0.45rem] px-[0.85rem] rounded-full shadow-sm flex items-center gap-2.5 no-underline transition-all duration-200 hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="w-7 h-7 bg-blue-50 text-blue-800 rounded-full flex items-center justify-center">
                <Linkedin size={16} />
              </span>
              <span className="text-gray-900 text-[0.85rem] font-medium">LinkedIn</span>
            </a>

            <a
              href="https://github.com/lathiyaom"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 border border-gray-200 py-[0.45rem] px-[0.85rem] rounded-full shadow-sm flex items-center gap-2.5 no-underline transition-all duration-200 hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="w-7 h-7 bg-blue-50 text-blue-800 rounded-full flex items-center justify-center">
                <Github size={16} />
              </span>
              <span className="text-gray-900 text-[0.85rem] font-medium">GitHub</span>
            </a>

            <a
              href="mailto:omlathiya.dev@gmail.com"
              className="bg-white text-gray-900 border border-gray-200 py-[0.45rem] px-[0.85rem] rounded-full shadow-sm flex items-center gap-2.5 no-underline transition-all duration-200 hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="w-7 h-7 bg-blue-50 text-blue-800 rounded-full flex items-center justify-center">
                <Mail size={16} />
              </span>
              <span className="text-gray-900 text-[0.85rem] font-medium">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
