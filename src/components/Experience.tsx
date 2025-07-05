import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Lead Installer",
      company: "Thrasher Concrete & Foundation Repair",
      period: "May 2024 – August 2024",
      description: "Led installation projects and managed team operations for foundation repair services.",
      responsibilities: [
        "Supervised 4 team members ensuring proper project completion",
        "Installed concrete supports in 24 homes using EverBrace System to repair cracked foundations",
        "Performed caulking and gutter installation to prevent damage and enhance home aesthetics"
      ],
      type: "Work Experience",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Math Tutor",
      company: "Dominion College",
      period: "Feb 2022 – Aug 2023",
      description: "Provided personalized mathematics tutoring to help students achieve academic success.",
      responsibilities: [
        "Provided one-on-one math tutoring and feedback to help students improve understanding",
        "Achieved a 99% pass rate with most students earning high grades",
        "Developed personalized learning strategies for diverse student needs"
      ],
      type: "Leadership Experience",
      gradient: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#0f172a] text-foreground transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-blue-300 dark:to-indigo-300 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-blue-300 dark:to-indigo-300 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg bg-card dark:bg-slate-900">
              <div className={`h-2 bg-gradient-to-r ${exp.gradient.replace('blue-500', 'blue-700').replace('purple-600', 'indigo-700').replace('green-500', 'emerald-700').replace('blue-500', 'blue-700')} dark:from-blue-300 dark:to-indigo-300 rounded-t-lg`}></div>
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-700 dark:text-blue-300">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                    <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{exp.type}</div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{exp.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-700 dark:bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{responsibility}</p>
                    </div>
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

export default Experience;
