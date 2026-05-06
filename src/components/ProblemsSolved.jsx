import React from 'react';

const problems = [
  'Scaling bottlenecks',
  'Frontend performance',
  'API latency',
  'Race conditions',
  'Database optimization',
  'Caching strategy',
  'Cloud migration',
  'CI/CD automation',
  'Observability gaps',
  'Monolith decomposition',
  'Deployment reliability',
  'System design trade-offs',
];

const ProblemsSolved = () => (
  <section className="bg-white py-20">
    <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 lg:grid-cols-[0.72fr_1fr] lg:items-start">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Problems I Solve</p>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
          I am useful where product pressure meets engineering complexity.
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          I prefer problems where the answer is not just another framework, but better boundaries,
          better data flow, better delivery discipline, and a clearer understanding of trade-offs.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {problems.map((problem) => (
          <div key={problem} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-900">
            {problem}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemsSolved;
