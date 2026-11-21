import React from 'react';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Research from '../components/sections/Research';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Research />
      <About />
      <Skills />
      <Contact />
    </>
  );
}
