import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';

const Contact = () => {
  const [open, setOpen] = useState(false);
  return (
    <section id="contact" className="py-20 bg-white text-black dark:bg-[#0f172a] dark:text-white transition-colors duration-300 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-white dark:bg-slate-900 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-700 dark:text-gray-200 mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology and innovation.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <Button
            variant="outline"
            className="border-2 border-white text-white dark:text-slate-900 hover:bg-white hover:text-blue-700 dark:hover:bg-slate-900 dark:hover:text-blue-300 transition-all duration-300"
            onClick={() => setOpen(true)}
          >
            View My Resume
          </Button>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-md mx-auto text-center">
              <h3 className="text-2xl font-extrabold mb-4">Resume Available Upon Request</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-200">For a copy of my resume, please contact me via email.</p>
              <a href="mailto:shelton.bumhe@email.com" className="text-blue-700 dark:text-blue-300 underline font-semibold">Request Resume</a>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/10 dark:bg-slate-900/20 backdrop-blur-md border-white/20 dark:border-slate-900/20 hover:bg-white/20 dark:hover:bg-slate-900/30 transition-all duration-300 hover:scale-105 font-sans">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <span className="text-2xl">📧</span>
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 dark:text-gray-200 mb-4">Ready to discuss your next project or opportunity?</p>
              <Button 
                variant="outline" 
                className="border-white dark:border-slate-900 text-blue-700 dark:text-blue-300 hover:bg-white dark:hover:bg-slate-900 hover:text-blue-800 dark:hover:text-blue-200 transition-all duration-300 font-semibold"
                onClick={() => window.location.href = 'mailto:sbumhe2@huskers.unl.edu'}
              >
                sbumhe2@huskers.unl.edu
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 dark:bg-slate-900/20 backdrop-blur-md border-white/20 dark:border-slate-900/20 hover:bg-white/20 dark:hover:bg-slate-900/30 transition-all duration-300 hover:scale-105 font-sans">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <span className="text-2xl">💼</span>
                LinkedIn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 dark:text-gray-200 mb-4">Let's connect and grow our professional network together!</p>
              <Button 
                variant="outline" 
                className="border-white dark:border-slate-900 text-blue-700 dark:text-blue-300 hover:bg-white dark:hover:bg-slate-900 hover:text-blue-800 dark:hover:text-blue-200 transition-all duration-300 font-semibold"
                onClick={() => window.open('https://www.linkedin.com/in/shelton-bumhe-027476312/', '_blank')}
              >
                Connect on LinkedIn
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-white/20 dark:border-slate-900/20">
          <p className="text-base text-gray-700 dark:text-gray-200">
            © 2025 Shelton Bumhe. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
