import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import 'devicon/devicon.min.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C", "C++", "SQL", "JavaScript", "TypeScript"],
      gradient: "from-blue-500 to-purple-600",
      icon: null
    },
    {
      title: "Tools & Libraries",
      skills: ["JDBC", "Git", "JUnit", "NumPy", "scikit-learn", "Eclipse", "VS Code", "PostgreSQL", "MySQL", "FastAPI", "React", "JavaFX"],
      gradient: "from-green-500 to-blue-500",
      icon: "🛠️"
    },
    {
      title: "Core Concepts",
      skills: ["Object-Oriented Programming (OOP)", "API Development", "Relational Databases", "Machine Learning", "Data Analysis", "Full-Stack Development", "Cloud Deployment"],
      gradient: "from-purple-500 to-pink-500",
      icon: "🧠"
    },
    {
      title: "Soft Skills",
      skills: ["Team Leadership", "Problem Solving", "Project Management", "Communication", "Mentoring", "Critical Thinking"],
      gradient: "from-orange-500 to-red-500",
      icon: "🤝"
    }
  ];

  const languageIcons: Record<string, string> = {
    Python: 'devicon-python-plain colored',
    Java: 'devicon-java-plain colored',
    'C++': 'devicon-cplusplus-plain colored',
    C: 'devicon-c-plain colored',
    SQL: 'devicon-sqlite-plain colored',
    JavaScript: 'devicon-javascript-plain colored',
    TypeScript: 'devicon-typescript-plain colored',
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <div className={`h-2 bg-gradient-to-r ${category.gradient} rounded-t-lg`}></div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 flex items-center gap-3">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-800 transition-all duration-200 border border-gray-200 hover:border-blue-300 hover:scale-105 flex items-center gap-2"
                    >
                      {category.title === 'Programming Languages' && languageIcons[skill] ? (
                        <i className={languageIcons[skill]} style={{ fontSize: 20 }}></i>
                      ) : null}
                      {skill}
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

export default Skills;
