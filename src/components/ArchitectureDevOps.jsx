import React from 'react';
import { BellRing, Box, CloudCog, DatabaseZap, GitCommit, Server, ShieldAlert, Workflow } from 'lucide-react';

const pipeline = ['Commit', 'CI Checks', 'Build Image', 'Deploy', 'Health Check', 'Observe'];

const architectureLayers = [
  { icon: <Box size={18} />, title: 'Frontend layer', copy: 'React routes, component boundaries, API clients, loading and error states.' },
  { icon: <Server size={18} />, title: 'Service layer', copy: 'REST APIs, domain services, validation, idempotency, background jobs.' },
  { icon: <DatabaseZap size={18} />, title: 'Data layer', copy: 'PostgreSQL, MongoDB, Redis, queues, indexes, caching, retention.' },
  { icon: <CloudCog size={18} />, title: 'Cloud layer', copy: 'Docker workloads, environment config, deployment gates, rollback notes.' },
  { icon: <BellRing size={18} />, title: 'Observability', copy: 'Logs, metrics, health checks, latency tracking, alert-ready signals.' },
  { icon: <ShieldAlert size={18} />, title: 'Failure handling', copy: 'Retries, dead-letter queues, graceful degradation, recovery playbooks.' },
];

const ArchitectureDevOps = () => (
  <section id="architecture" className="border-y border-slate-200 bg-slate-950 py-20 text-white">
    <div className="mx-auto w-full max-w-7xl px-4">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Architecture & DevOps</p>
      <div className="mt-3 grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-start">
        <div>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Designed like a production system, not a demo.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            I think through request paths, deployment paths, failure paths, and ownership boundaries.
            That is what makes a product easier to scale, debug, operate, and hand over.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Deployment Pipeline</p>
            <Workflow size={18} className="text-emerald-300" />
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {pipeline.map((step, index) => (
              <div key={step} className="rounded-xl border border-white/10 bg-slate-900 p-3">
                <GitCommit size={16} className="text-emerald-300" />
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.08em] text-slate-400">0{index + 1}</p>
                <p className="mt-1 text-sm font-bold text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {architectureLayers.map((layer) => (
          <article key={layer.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-emerald-300/30">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-300/10 text-emerald-300">
              {layer.icon}
            </div>
            <h3 className="mt-5 text-lg font-bold text-white">{layer.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{layer.copy}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ArchitectureDevOps;
