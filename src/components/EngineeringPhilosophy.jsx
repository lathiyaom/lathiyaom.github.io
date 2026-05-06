import React from 'react';

const principles = [
  {
    title: 'Simplicity over cleverness',
    copy: 'The best architecture is understandable by the next engineer who has to debug it under pressure.',
  },
  {
    title: 'Observability before optimization',
    copy: 'Logs, metrics, and health signals turn production behavior into evidence instead of guesswork.',
  },
  {
    title: 'Failure-mode thinking',
    copy: 'I design for retries, partial outages, duplicate requests, slow dependencies, and recovery paths.',
  },
  {
    title: 'Product context matters',
    copy: 'A technical decision is only good if it fits user needs, business risk, team capacity, and maintenance cost.',
  },
];

const EngineeringPhilosophy = () => (
  <section className="border-y border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-20">
    <div className="mx-auto w-full max-w-7xl px-4">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Engineering Philosophy</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
        Systems should be reliable, explainable, and built for the team that owns them.
      </h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {principles.map((principle) => (
          <article key={principle.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold text-slate-950">{principle.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{principle.copy}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default EngineeringPhilosophy;
