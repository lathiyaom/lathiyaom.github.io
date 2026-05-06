import React from 'react';
import { Activity, Boxes, Gauge, GitBranch, LockKeyhole, ServerCog } from 'lucide-react';

const caseStudies = [
  {
    title: 'High-Traffic Notification Platform',
    type: 'Event-driven backend',
    metric: '5M+ events/day',
    problem: 'Critical notifications were delayed, duplicated, and hard to reason about during traffic spikes.',
    decisions: ['Kafka partitions by user/account', 'Redis idempotency keys', 'retry + dead-letter flow', 'delivery metrics per channel'],
    stack: 'Spring Boot, Kafka, Redis, PostgreSQL, Docker',
    impact: 'Higher delivery confidence, duplicate suppression, clearer operational visibility.',
    diagram: ['API Gateway', 'Notification API', 'Kafka Topics', 'Workers', 'Redis + DB'],
  },
  {
    title: 'E-commerce Booking Engine',
    type: 'Consistency under load',
    metric: '0 double-booking goal',
    problem: 'Concurrent purchase attempts could reserve the same inventory during peak sales windows.',
    decisions: ['Redis lock per inventory key', 'idempotent booking requests', 'transactional state changes', 'rollback path for failed payment'],
    stack: 'React, Spring Boot, Redis, PostgreSQL, JMeter',
    impact: 'Safer checkout flow, fewer support escalations, and predictable behavior under concurrency.',
    diagram: ['React Checkout', 'Booking API', 'Redis Lock', 'Postgres Tx', 'Payment Result'],
  },
  {
    title: 'Legacy Monolith Migration',
    type: 'Architecture modernization',
    metric: '300% scale headroom',
    problem: 'A tightly coupled system slowed releases and forced the whole product to scale together.',
    decisions: ['strangler migration', 'API gateway routing', 'service boundaries by domain', 'incremental database split'],
    stack: 'Spring Boot, Node.js, PostgreSQL, Docker, CI/CD',
    impact: 'Independent deployments, lower release risk, and clearer ownership between product domains.',
    diagram: ['Gateway', 'Legacy App', 'Auth Service', 'Orders Service', 'Shared Observability'],
  },
  {
    title: 'SaaS Operations Dashboard',
    type: 'Frontend/product system',
    metric: 'Faster triage UX',
    problem: 'Support and operations teams needed a clearer way to inspect health, users, and workflow state.',
    decisions: ['role-based navigation', 'componentized data views', 'optimistic UI where safe', 'responsive dense layouts'],
    stack: 'React, JavaScript, REST APIs, Tailwind, accessibility checks',
    impact: 'Cleaner workflows, faster scanning, and product screens designed around repeated operational use.',
    diagram: ['Routes', 'Data Hooks', 'Table Views', 'Filters', 'Action Panels'],
  },
  {
    title: 'Cloud Deployment Foundation',
    type: 'DevOps/platform delivery',
    metric: 'Rollback-ready releases',
    problem: 'Manual deployment steps created inconsistent environments and made failure recovery slower.',
    decisions: ['Docker build contract', 'CI validation gates', 'environment variables by stage', 'health checks + rollback notes'],
    stack: 'Docker, GitHub Actions, Linux, cloud hosting, logging',
    impact: 'Repeatable releases, clearer handoff, and a deployment workflow that can scale with the team.',
    diagram: ['Git Push', 'CI Checks', 'Image Build', 'Deploy', 'Monitor'],
  },
];

const ProjectHighlights = () => {
  return (
    <section id="work" className="border-y border-slate-200 bg-gradient-to-br from-slate-50 via-white to-emerald-50 py-20">
      <div className="mx-auto w-full max-w-7xl px-4">
        <SectionEyebrow>Featured Case Studies</SectionEyebrow>
        <div className="mt-3 grid gap-5 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <h2 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
            Production-oriented projects framed by problem, architecture, and trade-offs.
          </h2>
          <p className="text-sm leading-7 text-slate-600">
            Each study highlights the kind of engineering maturity teams care about: where the system can fail,
            how data moves, how releases happen, and which decisions improve product reliability.
          </p>
        </div>

        <div className="mt-10 grid gap-5">
          {caseStudies.map((project) => (
            <article key={project.title} className="grid gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col justify-between gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">{project.type}</span>
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">{project.metric}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-slate-950">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{project.problem}</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <MiniSignal icon={<Gauge size={16} />} label="Impact" value={project.impact} />
                  <MiniSignal icon={<ServerCog size={16} />} label="Stack" value={project.stack} />
                  <MiniSignal icon={<LockKeyhole size={16} />} label="Risk handled" value="Scale, consistency, recovery" />
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Architecture Flow</p>
                  <Activity size={17} className="text-emerald-700" />
                </div>
                <ArchitectureFlow nodes={project.diagram} />
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {project.decisions.map((decision) => (
                    <div key={decision} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700">
                      {decision}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArchitectureFlow = ({ nodes }) => (
  <div className="mt-5 grid gap-3 md:grid-cols-5">
    {nodes.map((node, index) => (
      <div key={node} className="relative">
        <div className="min-h-20 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <Boxes size={17} className="text-emerald-700" />
          <p className="mt-3 text-sm font-bold text-slate-900">{node}</p>
        </div>
        {index < nodes.length - 1 && (
          <GitBranch className="mx-auto mt-2 text-slate-300 md:absolute md:-right-5 md:top-7 md:mt-0 md:rotate-0" size={18} />
        )}
      </div>
    ))}
  </div>
);

const MiniSignal = ({ icon, label, value }) => (
  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
    <div className="flex items-center gap-2 text-emerald-700">
      {icon}
      <p className="text-[11px] font-bold uppercase tracking-[0.12em]">{label}</p>
    </div>
    <p className="mt-2 text-xs font-semibold leading-5 text-slate-600">{value}</p>
  </div>
);

const SectionEyebrow = ({ children }) => (
  <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">{children}</p>
);

export default ProjectHighlights;
