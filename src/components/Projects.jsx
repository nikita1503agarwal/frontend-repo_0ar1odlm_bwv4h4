import React from 'react';

const projects = [
  {
    title: 'Fintech Onboarding',
    tag: 'UX • Web App',
    desc: 'Reduced drop-off by 32% with a streamlined, trust-building flow for KYC and funding.',
    image:
      'https://images.unsplash.com/photo-1551281044-8d8d0d8f1d5f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Health SaaS Dashboard',
    tag: 'UI • Design System',
    desc: 'Built a modular system enabling 4 product teams to ship faster with consistent patterns.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'AI Marketing Site',
    tag: 'UX/UI • Website',
    desc: 'Playful motion and clear storytelling increased demo requests by 54% in 6 weeks.',
    image:
      'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-center gap-2">
        <span className="h-6 w-1 rounded-full bg-teal-400" />
        <h2 className="text-2xl font-semibold sm:text-3xl">Selected work</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <article
            key={idx}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt="Project visual"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
            </div>
            <div className="p-5">
              <div className="text-xs uppercase tracking-wide text-teal-300/80">{p.tag}</div>
              <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="mailto:hello@yourname.design?subject=Project%20inquiry"
          className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
        >
          Let’s build something great
        </a>
      </div>
    </section>
  );
}
