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
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-foreground transition-colors duration-300 relative overflow-hidden">
      {/* Moving Stars Animated Background (dark mode only, full page) */}
      <div className="fixed inset-0 z-0 pointer-events-none hidden dark:block">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }} style={{ background: 'transparent' }}>
          <Stars radius={40} depth={50} count={2000} factor={2} saturation={0} fade={true} speed={1} />
        </Canvas>
      </div>
      <Navigation />
      <div className="max-w-5xl mx-auto py-12 flex flex-col gap-16 relative z-10">
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
