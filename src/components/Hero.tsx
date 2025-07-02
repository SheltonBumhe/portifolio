import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background text-foreground transition-colors duration-300">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-slate-400 to-slate-600 dark:from-slate-700 dark:to-slate-900 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-slate-200 to-slate-400 dark:from-slate-800 dark:to-slate-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-700 via-slate-700 to-indigo-700 dark:from-blue-300 dark:via-slate-200 dark:to-indigo-300 bg-clip-text text-transparent">
              Shelton Bumhe
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 mb-8 font-light">
            Software Developer | Data Scientist | Problem Solver
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            I am a Software Engineer passionate about data science and building innovative solutions. 
            Currently pursuing a B.S. in Computer Science at the University of Nebraska-Lincoln.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-blue-400 dark:to-indigo-400 hover:from-blue-800 hover:to-indigo-800 dark:hover:from-blue-300 dark:hover:to-indigo-300 text-white dark:text-slate-900 px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              See My Work
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-700 dark:border-blue-300 text-blue-700 dark:text-blue-300 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-300 dark:hover:text-slate-900 px-8 py-3 text-lg font-medium transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
