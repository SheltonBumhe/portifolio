import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "💡 ShelFin: AI-Powered Personal Finance Assistant",
      description: "Designed and built a comprehensive full-stack budgeting application with AI-powered spending forecasts and cross-platform accessibility.",
      technologies: ["JavaFX", "React", "FastAPI", "Python", "scikit-learn", "PostgreSQL"],
      highlights: [
        "Integrated AI models using Python and scikit-learn to forecast user spending from uploaded CSV files",
        "Engineered a FastAPI-based microservice to parse and analyze financial data in real-time",
        "Deployed the backend to the cloud using Render with proper environment configuration and CORS handling",
        "Built a modern desktop interface in JavaFX and connected it to the online API using HTTP requests",
        "Developed a responsive React web version for cross-platform accessibility",
        "Packaged the JavaFX app into a DMG installer for macOS using jpackage"
      ],
      gradient: "from-green-400 to-blue-500"
    },
    {
      title: "Invoice Management System",
      description: "Designed and developed a comprehensive invoice management system for Very Good Building & Development Company (VGB) to streamline business operations.",
      technologies: ["Java", "SQL", "JDBC", "MySQL"],
      highlights: [
        "Built robust database connectivity using JDBC for reliable data operations",
        "Implemented comprehensive CRUD operations for invoice management",
        "Designed normalized database schema for optimal performance",
        "Created user-friendly interface for business workflow management"
      ],
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Knight's Solver",
      description: "Built a recursive Python program to solve a chess-based knight's movement puzzle using advanced algorithmic approaches.",
      technologies: ["Python", "NumPy", "Recursion", "Algorithm Design"],
      highlights: [
        "Implemented depth-limited search algorithm for efficient puzzle solving",
        "Utilized NumPy for optimized mathematical computations",
        "Designed recursive solution with backtracking for complex problem-solving",
        "Optimized performance through algorithmic refinement"
      ],
      gradient: "from-blue-400 to-purple-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white text-black dark:bg-[#0f172a] dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Relevant Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Here are some of my key projects that showcase my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <div className={`h-2 bg-gradient-to-r ${project.gradient} rounded-t-lg`}></div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
