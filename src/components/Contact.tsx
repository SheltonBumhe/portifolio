import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-700 to-indigo-700 dark:from-blue-300 dark:to-indigo-300 text-white dark:text-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-white dark:bg-slate-900 mx-auto rounded-full"></div>
          <p className="text-lg text-blue-100 dark:text-blue-900 mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/10 dark:bg-slate-900/20 backdrop-blur-md border-white/20 dark:border-slate-900/20 hover:bg-white/20 dark:hover:bg-slate-900/30 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="text-white dark:text-slate-900 flex items-center gap-3">
                <span className="text-2xl">📧</span>
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-100 dark:text-blue-900 mb-4">Ready to discuss your next project or opportunity?</p>
              <Button 
                variant="outline" 
                className="border-white dark:border-slate-900 text-white dark:text-slate-900 hover:bg-white dark:hover:bg-slate-900 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300"
                onClick={() => window.location.href = 'mailto:sbumhe2@huskers.unl.edu'}
              >
                sbumhe2@huskers.unl.edu
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 dark:bg-slate-900/20 backdrop-blur-md border-white/20 dark:border-slate-900/20 hover:bg-white/20 dark:hover:bg-slate-900/30 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="text-white dark:text-slate-900 flex items-center gap-3">
                <span className="text-2xl">💼</span>
                LinkedIn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-100 dark:text-blue-900 mb-4">Let's connect and grow our professional network together!</p>
              <Button 
                variant="outline" 
                className="border-white dark:border-slate-900 text-white dark:text-slate-900 hover:bg-white dark:hover:bg-slate-900 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300"
                onClick={() => window.open('https://www.linkedin.com/in/shelton-bumhe-027476312/', '_blank')}
              >
                Connect on LinkedIn
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-white/20 dark:border-slate-900/20">
          <p className="text-blue-100 dark:text-blue-900">
            © 2025 Shelton Bumhe. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
