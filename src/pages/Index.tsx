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
      <div className="max-w-5xl mx-auto py-12">
        <Carousel className="relative shadow-2xl rounded-3xl overflow-hidden" opts={{ loop: true, dragFree: true }}>
          <CarouselContent>
            <CarouselItem className="h-[calc(100vh-96px)] flex flex-col items-center justify-center">
              <div className="flex-1 w-full flex flex-col items-center justify-center">
                <Hero />
              </div>
            </CarouselItem>
            <CarouselItem className="h-[calc(100vh-96px)] flex flex-col items-center justify-center">
              <div className="flex-1 w-full flex flex-col items-center justify-center">
                <About />
              </div>
            </CarouselItem>
            <CarouselItem className="h-[calc(100vh-96px)] flex flex-col items-center justify-center">
              <div className="flex-1 w-full flex flex-col items-center justify-center">
                <Projects />
              </div>
            </CarouselItem>
            <CarouselItem className="h-[calc(100vh-96px)] flex flex-col items-center justify-center">
              <div className="space-y-12 flex-1 w-full flex flex-col items-center justify-center">
                <Experience />
                <Skills />
                <Contact />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="z-20 left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md shadow-lg hover:bg-blue-100 transition-all duration-300" />
          <CarouselNext className="z-20 right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md shadow-lg hover:bg-blue-100 transition-all duration-300" />
        </Carousel>
      </div>
    </div>
  );
};

export default Index;
