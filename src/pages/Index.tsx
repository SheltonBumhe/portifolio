import React from 'react';
import { ArrowDown } from 'lucide-react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 animated-gradient-bg">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
