import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-[#0f172a] text-foreground transition-colors duration-300 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Photo */}
        <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          <div className="w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-slate-200 to-slate-400 dark:from-slate-800 dark:to-slate-600 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Professional portrait of Shelton Bumhe"
              className="w-72 h-72 object-cover rounded-full"
            />
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 text-left space-y-8">
          <div className="animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <span className="inline-block px-4 py-2 mb-4 bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-blue-300 dark:to-indigo-300 text-white dark:text-slate-900 rounded-full text-xs font-semibold tracking-widest uppercase shadow-md animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              Transforming Ideas Into Digital Solutions
            </span>
            <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-blue-300 dark:to-indigo-300 bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
              About Me
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed font-medium animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              I am a Computer Science student and Data Scientist with a passion for building innovative, high-impact solutions. My expertise spans full-stack development, AI/ML, and data analysis. I thrive on turning complex challenges into elegant, scalable products.
            </p>
          </div>
          <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
            <div className="flex flex-wrap gap-3">
              {['Full-Stack Development', 'AI/ML', 'Data Analysis', 'Team Leadership', 'Problem Solving'].map((skill, i) => (
                <span key={skill} className="px-4 py-2 bg-gradient-to-r from-slate-200 to-slate-400 dark:from-slate-800 dark:to-slate-600 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold shadow animate-fade-in" style={{ animationDelay: `${0.8 + i * 0.1}s`, animationFillMode: 'both' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '1.3s', animationFillMode: 'both' }}>
            <p className="text-base text-gray-500 dark:text-gray-400 mt-4">
              B.S. in Computer Science, University of Nebraska-Lincoln
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
