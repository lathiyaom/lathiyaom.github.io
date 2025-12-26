import React from "react";

const PublicEngineering = () => {
  return (
    <section className="bg-white py-20 px-6 max-w-[1400px] mx-auto">
      <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight mb-3 relative inline-block text-gray-900 after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-[60px] after:h-[3px] after:bg-blue-800 after:rounded-full">
        Trust Signals
      </h2>
      <div className="max-w-[800px] mx-auto px-6">
        {/* Scannable trust list */}
        <ul className="list-none p-0 m-0 flex flex-col gap-4 mb-12">
          <li className="bg-white rounded-[14px] p-6 border border-gray-100 flex items-start gap-4 transition-all duration-300 hover:border-blue-800/20 hover:shadow-sm">
            <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold shrink-0">
              ✓
            </span>
            <span>
              <strong className="text-gray-900">2.5+ years</strong> designing
              and maintaining backend systems where reliability, data integrity,
              and scale matter
            </span>
          </li>

          <li className="bg-white rounded-[14px] p-6 border border-gray-100 flex items-start gap-4 transition-all duration-300 hover:border-blue-800/20 hover:shadow-sm">
            <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold shrink-0">
              ✓
            </span>
            <span>
              <strong className="text-gray-900">Public engineering work</strong>{" "}
              — regularly publishing practical articles on backend architecture,
              failure modes, and system design on LinkedIn and Medium
            </span>
          </li>

          <li className="bg-white rounded-[14px] p-6 border border-gray-100 flex items-start gap-4 transition-all duration-300 hover:border-blue-800/20 hover:shadow-sm">
            <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold shrink-0">
              ✓
            </span>
            <span>
              <strong className="text-gray-900">Systems-first mindset</strong>{" "}
              focused on preventing outages, race conditions, and scaling
              failures before they impact real users
            </span>
          </li>
        </ul>

        {/* Philosophy */}
        <div className="text-center mt-12">
          <blockquote className="text-xl italic text-gray-600 relative px-12 py-4">
            <span className="absolute left-0 top-0 text-5xl text-blue-800/20 font-serif leading-none">
              "
            </span>
            Good engineering is invisible. You only notice it when it fails — my
            work is to make sure it doesn't.
            <span className="absolute right-0 bottom-0 text-5xl text-blue-800/20 font-serif leading-none">
              "
            </span>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default PublicEngineering;
