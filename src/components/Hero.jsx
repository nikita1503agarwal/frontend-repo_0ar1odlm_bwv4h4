import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      {/* 3D Scene Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-neutral-950/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-28 text-center sm:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur">
          <Rocket className="h-4 w-4 text-teal-300" />
          <span className="text-sm text-white/80">UI/UX Designer • Helping startups and growing businesses</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Crafting delightful product experiences
          <span className="block bg-gradient-to-r from-teal-300 via-sky-300 to-purple-300 bg-clip-text text-transparent">
            that convert and scale
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-base text-white/70 sm:text-lg">
          I design playful, modern and conversion-focused interfaces. From MVP to growth, I partner with teams to move fast without breaking the experience.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-teal-400 px-5 py-3 font-medium text-black transition hover:bg-teal-300"
          >
            View selected work
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Services & process
          </a>
        </div>
      </div>
    </section>
  );
}
