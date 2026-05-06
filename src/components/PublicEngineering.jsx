import React from 'react';
import { BookOpen, Github, GraduationCap } from 'lucide-react';

const signals = [
  {
    icon: <Github size={18} />,
    title: 'Open source mindset',
    copy: 'Code should be readable, documented, and shaped so other engineers can contribute without archaeology.',
  },
  {
    icon: <BookOpen size={18} />,
    title: 'Technical writing',
    copy: 'I use writing to clarify architecture decisions, failure modes, and system trade-offs.',
  },
  {
    icon: <GraduationCap size={18} />,
    title: 'Learning velocity',
    copy: 'I adapt across stacks by leaning on fundamentals: HTTP, data modeling, concurrency, deployment, and observability.',
  },
];

const PublicEngineering = () => (
  <section className="bg-white py-20">
    <div className="mx-auto w-full max-w-7xl px-4">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Open Source / Writing / Learning</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
        I communicate engineering decisions clearly because delivery is a team sport.
      </h2>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {signals.map((signal) => (
          <article key={signal.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm">
              {signal.icon}
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-950">{signal.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{signal.copy}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default PublicEngineering;
