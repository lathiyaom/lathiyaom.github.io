import { useLenis } from './hooks/useLenis';

import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ProjectHighlights from './components/ProjectHighlights';
import FullStackCapabilities from './components/FullStackCapabilities';
import ArchitectureDevOps from './components/ArchitectureDevOps';
import ProblemsSolved from './components/ProblemsSolved';
import EngineeringPhilosophy from './components/EngineeringPhilosophy';
import PublicEngineering from './components/PublicEngineering';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const navItems = [
  { href: '#work', label: 'Work' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#contact', label: 'Contact' },
];

function App() {
  useLenis();

  return (
    <div className="min-h-screen text-slate-900">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/86 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3">
          <a href="#hero" className="font-['Space_Grotesk'] text-sm font-bold uppercase tracking-[0.18em] text-slate-950">
            Om Lathiya
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.slice(0, -1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700"
          >
            Book Meet
          </a>
        </nav>
      </header>

      <main className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[46rem] bg-[radial-gradient(ellipse_at_top_left,rgba(13,148,136,0.18),transparent_56%),radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.12),transparent_48%),linear-gradient(180deg,#f8fffb,transparent_70%)]" />
        <Hero />
        <TrustStrip />
        <ProjectHighlights />
        <FullStackCapabilities />
        <ArchitectureDevOps />
        <ProblemsSolved />
        <EngineeringPhilosophy />
        <PublicEngineering />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
