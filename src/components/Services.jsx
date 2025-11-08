import React from 'react';
import { Figma, Rocket, Target, Workflow } from 'lucide-react';

const services = [
  {
    icon: <Target className="h-5 w-5 text-teal-300" />,
    title: 'Product Strategy',
    desc: 'Rapid discovery, user insights and positioning to align your product with measurable outcomes.',
  },
  {
    icon: <Figma className="h-5 w-5 text-teal-300" />,
    title: 'UI/UX Design',
    desc: 'From wireframes to high-fidelity visuals and prototypes that feel real and test well.',
  },
  {
    icon: <Workflow className="h-5 w-5 text-teal-300" />,
    title: 'Design Systems',
    desc: 'Scalable components, tokens and documentation so your team ships consistently and faster.',
  },
  {
    icon: <Rocket className="h-5 w-5 text-teal-300" />,
    title: 'MVP to Growth',
    desc: 'Launch quickly, validate with users, and iterate toward product-market fit with confidence.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-center gap-2">
        <span className="h-6 w-1 rounded-full bg-teal-400" />
        <h2 className="text-2xl font-semibold sm:text-3xl">Services tailored for startups</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, idx) => (
          <div
            key={idx}
            className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-teal-300/40 hover:bg-white/10"
          >
            <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-white/5 p-2">
              {s.icon}
            </div>
            <h3 className="text-lg font-medium">{s.title}</h3>
            <p className="mt-2 text-sm text-white/70">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
