import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Github,
  Linkedin,
  Mail,
  Network,
  Server,
  ShieldCheck,
  TerminalSquare,
} from 'lucide-react';

const heroStats = [
  { label: 'Product span', value: 'Frontend -> Cloud' },
  { label: 'Backend depth', value: 'APIs, data, events' },
  { label: 'Delivery focus', value: 'CI/CD, observability' },
];

const credibility = ['Full Stack SWE', 'Backend-heavy architecture', 'DevOps-aware delivery', 'Remote-ready communication'];

const Hero = () => {
  return (
    <section id="hero" className="mx-auto w-full max-w-7xl px-4 pb-14 pt-16 md:pb-20 md:pt-24">
      <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex items-center rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700 shadow-sm">
            Full Stack Software Engineer
          </p>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.03] text-slate-950 sm:text-5xl lg:text-7xl">
            Product engineering with backend depth and cloud-ready delivery.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I build reliable product systems across React interfaces, service architecture,
            databases, automation, and deployment pipelines. My work is designed for users,
            teams, and businesses that need software to hold up in production.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              Schedule Google Meet <ArrowRight size={16} />
            </a>
            <a
              href="#work"
              className="inline-flex min-h-11 items-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-800"
            >
              View Engineering Work
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {credibility.map((item) => (
              <span key={item} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-bold text-slate-600 shadow-sm">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <SocialLink href="https://www.linkedin.com/in/om-lathiya-0403382a3/" label="LinkedIn" icon={<Linkedin size={16} />} />
            <SocialLink href="https://github.com/lathiyaom" label="GitHub" icon={<Github size={16} />} />
            <SocialLink href="mailto:omlathiya.dev@gmail.com" label="Email" icon={<Mail size={16} />} />
          </div>
        </div>

        <aside className="relative rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-[0_24px_80px_-55px_rgba(15,23,42,0.45)] backdrop-blur sm:p-6">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-200/60 blur-2xl" />
          <div className="relative rounded-xl border border-slate-200 bg-slate-950 p-5 text-white">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">System Snapshot</p>
              <TerminalSquare size={18} className="text-emerald-300" />
            </div>
            <div className="mt-6 grid gap-3">

              <FlowRow
                icon={<Network size={17} />}
                label="Frontend Engineering"
                value="React interfaces, responsive UX systems, accessibility, frontend performance"
              />

              <FlowRow
                icon={<ShieldCheck size={17} />}
                label="Java Backend"
                value="Spring Boot APIs, microservices, distributed systems, transactional workflows"
              />

              <FlowRow
                icon={<Server size={17} />}
                label="Node.js Runtime"
                value="Express services, asynchronous processing, lightweight backend delivery"
              />

              <FlowRow
                icon={<Cpu size={17} />}
                label="Go Services"
                value="Concurrent processing, scalable backend services, performance-oriented APIs"
              />

              <FlowRow
                icon={<Database size={17} />}
                label="Python & Django"
                value="Backend workflows, automation systems, admin platforms, rapid product delivery"
              />

              <FlowRow
                icon={<CheckCircle2 size={17} />}
                label="Cloud & Delivery"
                value="Docker, CI/CD pipelines, observability, monitoring, rollback strategies"
              />
            </div>
          </div>

          <div className="relative mt-4 grid gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">{stat.label}</p>
                <p className="mt-2 text-sm font-bold text-slate-950">{stat.value}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

const FlowRow = ({ icon, label, value }) => (
  <div className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3">
    <span className="mt-0.5 text-emerald-300">{icon}</span>
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-100">{value}</p>
    </div>
  </div>
);

const SocialLink = ({ href, label, icon }) => (
  <a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-800"
  >
    {icon}
    {label}
  </a>
);

export default Hero;
