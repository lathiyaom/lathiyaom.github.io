import React from 'react';
import { CalendarPlus, Github, Linkedin, Mail, Video } from 'lucide-react';

const EMAIL = 'omlathiya.dev@gmail.com';
const GOOGLE_CALENDAR_URL =
  'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Intro%20call%20with%20Om%20Lathiya&details=Hi%20Om%2C%20I%20would%20like%20to%20discuss%20a%20full-stack%20engineering%20or%20system%20design%20opportunity.%20Please%20add%20a%20Google%20Meet%20link%20to%20this%20event.&location=Google%20Meet&add=omlathiya.dev%40gmail.com';
const MAILTO_URL =
  `mailto:${EMAIL}?subject=Google%20Meet%20intro%20call&body=Hi%20Om%2C%0D%0A%0D%0AI%20would%20like%20to%20schedule%20a%20Google%20Meet%20intro%20call.%0D%0A%0D%0AMy%20preferred%20time%20slots%20are%3A%0D%0A1.%20%0D%0A2.%20%0D%0A3.%20%0D%0A%0D%0AContext%3A%0D%0A`;

const CallToAction = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-20 text-slate-950">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-200/50 blur-3xl" />

      <div className="relative mx-auto w-full max-w-5xl px-4">
        <div className="rounded-2xl border border-emerald-100 bg-white/85 p-8 shadow-[0_24px_80px_-55px_rgba(15,118,110,0.45)] backdrop-blur md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Let us talk</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
            Want to discuss the build over Google Meet?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
            Create a Google Calendar draft or send me your preferred time slots. I will confirm the timing
            and attach the Google Meet link.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={GOOGLE_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-emerald-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/10 transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              <CalendarPlus size={18} />
              Create Google Meet Event
            </a>
            <a
              href={MAILTO_URL}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-7 py-3 text-sm font-semibold text-sky-900 transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-100"
            >
              <Video size={18} />
              Send Time Slots
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <ContactLink href="https://www.linkedin.com/in/om-lathiya-0403382a3/" icon={<Linkedin size={17} />} label="LinkedIn" />
            <ContactLink href="https://github.com/lathiyaom" icon={<Github size={17} />} label="GitHub" />
            <ContactLink href={`mailto:${EMAIL}`} icon={<Mail size={17} />} label="Email" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactLink = ({ href, icon, label }) => (
  <a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-800"
  >
    {icon}
    {label}
  </a>
);

export default CallToAction;
