import React from 'react';
import { ArrowDown } from 'lucide-react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-foreground transition-colors duration-300">
      <Navigation />
      <div className="max-w-5xl mx-auto py-12 flex flex-col gap-16">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
