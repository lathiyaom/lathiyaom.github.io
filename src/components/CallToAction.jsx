import React, { useCallback, useRef, useState } from "react";
import { Linkedin, Github, Mail, Loader2, Calendar } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/omlathiya-dev/30min";
const CALENDLY_SCRIPT_SRC =
  "https://assets.calendly.com/assets/external/widget.js";

const CallToAction = () => {
  const widgetRef = useRef(null);
  const hasInitialized = useRef(false);
  const scriptLoading = useRef(false);

  const [showWidget, setShowWidget] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const initCalendly = useCallback(() => {
    if (!window.Calendly || !widgetRef.current || hasInitialized.current) return;

    hasInitialized.current = true;

    window.Calendly.initInlineWidget({
      url: CALENDLY_URL,
      parentElement: widgetRef.current,
    });
  }, []);

  const loadCalendlyScript = useCallback(() => {
    if (window.Calendly) {
      initCalendly();
      return;
    }

    if (scriptLoading.current) return;
    scriptLoading.current = true;

    setLoading(true);

    const existingScript = document.querySelector(
      `script[src="${CALENDLY_SCRIPT_SRC}"]`
    );

    if (existingScript) {
      existingScript.addEventListener("load", initCalendly);
      return;
    }

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;

    script.onload = () => {
      setLoading(false);
      initCalendly();
    };

    script.onerror = () => {
      setLoading(false);
      setError(true);
    };

    document.body.appendChild(script);
  }, [initCalendly]);

  const handleBookClick = () => {
    setShowWidget(true);
    setTimeout(loadCalendlyScript, 0);
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-blue-800 to-blue-900 py-20 px-6 text-white"
    >
      <div className="max-w-[800px] mx-auto">

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <SocialLink
            href="https://www.linkedin.com/in/om-lathiya-0403382a3/"
            icon={<Linkedin size={18} />}
            label="LinkedIn"
          />
          <SocialLink
            href="https://github.com/lathiyaom"
            icon={<Github size={18} />}
            label="GitHub"
          />
          <SocialLink
            href="mailto:omlathiya.dev@gmail.com"
            icon={<Mail size={18} />}
            label="Email"
          />
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-xl text-white/90 mb-4">
            If this sounds like how you want your backend to behave,
            let’s talk before problems turn into outages.
          </p>

          <p className="text-white/60 mb-8 text-sm">
            30-minute clarity call · No sales · Clear next steps
          </p>

          {!showWidget && !error && (
            <button
              onClick={handleBookClick}
              aria-label="Book a free 30-minute call"
              className="inline-flex items-center gap-2 bg-white text-blue-800 font-semibold px-8 py-4 rounded-full text-lg transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Calendar size={20} />
              Book Your Free Call
            </button>
          )}

          {/* Widget */}
          <div
            className={`transition-all duration-700 overflow-hidden ${showWidget ? "max-h-[800px] opacity-100 mt-8" : "max-h-0 opacity-0"
              }`}
          >
            {loading && (
              <div className="flex justify-center items-center h-32">
                <Loader2 className="animate-spin mr-2" />
                Loading scheduler…
              </div>
            )}

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                <p>Unable to load calendar.</p>
                <a
                  href="mailto:omlathiya.dev@gmail.com"
                  className="underline font-semibold mt-2 inline-block"
                >
                  Fallback: Email me instead
                </a>
              </div>
            )}

            <div
              ref={widgetRef}
              role="region"
              aria-label="Schedule a call"
              className="w-full"
              style={{ minWidth: 320, height: 700 }}
            />

            <noscript>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Schedule directly on Calendly
              </a>
            </noscript>
          </div>

          {showWidget && (
            <p className="text-white/40 text-xs mt-4">
              Trouble loading?
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                Open in new tab
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

/* ---------- Small reusable component ---------- */
const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-full transition hover:-translate-y-0.5"
  >
    <span className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
      {icon}
    </span>
    <span className="font-medium">{label}</span>
  </a>
);

export default CallToAction;
