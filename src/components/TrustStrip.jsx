import React from 'react';

const trustItems = [
  'React UI Systems',
  'Spring Boot APIs',
  'Scalable Backends',
  'Docker Delivery',
  'CI/CD Pipelines',
  'Redis + Kafka',
  'Cloud Deployment',
  'Observability',
];

const TrustStrip = () => (
  <section aria-label="Engineering focus areas" className="border-y border-slate-200 bg-white/80">
    <div className="mx-auto grid w-full max-w-7xl gap-3 px-4 py-5 sm:grid-cols-2 lg:grid-cols-4">
      {trustItems.map((item) => (
        <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-bold text-slate-700">
          {item}
        </div>
      ))}
    </div>
  </section>
);

export default TrustStrip;
