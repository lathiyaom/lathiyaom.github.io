import React from 'react';
import { Cloud, Code2, Database, Gauge, GitPullRequest, LayoutDashboard, MessagesSquare, Server } from 'lucide-react';

const capabilities = [
  {
    icon: <LayoutDashboard size={20} />,
    title: 'Frontend Engineering',
    copy: 'Interfaces built for real workflows: responsive layouts, accessible controls, fast feedback, and component patterns that stay maintainable.',
    value: 'Users move faster and teams avoid UI rewrites.',
  },
  {
    icon: <Server size={20} />,
    title: 'Backend Engineering',
    copy: 'APIs, services, validation, transactions, and background processing designed around reliability and clear contracts.',
    value: 'Business logic stays safe as traffic and complexity grow.',
  },
  {
    icon: <Cloud size={20} />,
    title: 'Infrastructure & DevOps',
    copy: 'Dockerized services, CI checks, environment discipline, deployment notes, and rollback-ready delivery.',
    value: 'Releases become repeatable instead of stressful.',
  },
  {
    icon: <Database size={20} />,
    title: 'Data & Messaging',
    copy: 'PostgreSQL, MongoDB, Redis, queues, and event streams chosen by consistency, latency, and operational needs.',
    value: 'Data flow becomes explicit and easier to debug.',
  },
  {
    icon: <Gauge size={20} />,
    title: 'Performance Engineering',
    copy: 'Frontend rendering, API latency, caching, query behavior, and payload size treated as one connected product experience.',
    value: 'The product feels faster where users notice it.',
  },
  {
    icon: <MessagesSquare size={20} />,
    title: 'Product Engineering',
    copy: 'I connect technical choices to the user journey, business risk, team constraints, and long-term maintenance cost.',
    value: 'Engineering decisions support the product strategy.',
  },
  {
    icon: <Code2 size={20} />,
    title: 'Scalability Engineering',
    copy: 'Capacity thinking, idempotency, backpressure, queues, service boundaries, and failure paths designed before they become incidents.',
    value: 'Growth does not turn into constant firefighting.',
  },
  {
    icon: <GitPullRequest size={20} />,
    title: 'Developer Experience',
    copy: 'Readable code, documented decisions, clear scripts, testable modules, and handoff notes that help teams keep momentum.',
    value: 'Future contributors can understand and extend the system.',
  },
];

const FullStackCapabilities = () => (
  <section id="capabilities" className="bg-white py-20">
    <div className="mx-auto w-full max-w-7xl px-4">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Full Stack Capabilities</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
        I work across the product surface and the system underneath it.
      </h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm">
              {item.icon}
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.copy}</p>
            <p className="mt-4 rounded-xl bg-white px-3 py-2 text-xs font-bold text-slate-700">{item.value}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default FullStackCapabilities;
