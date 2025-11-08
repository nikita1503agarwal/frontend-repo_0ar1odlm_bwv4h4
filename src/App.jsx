import React from 'react';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>
      <Hero />
      <main id="content" className="relative z-0">
        <Services />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
