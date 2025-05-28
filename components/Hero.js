'use client'
import React from 'react';
import { ArrowDownRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative w-full bg-dot-pattern">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/50" />
      
      {/* Main content */}
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-start justify-center min-h-[85vh] py-20">
          {/* Social links */}
          <div className="flex gap-6 mb-8">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 leading-tight">
            Technology
            <br />
            Analyst &
            <br />
            <span className="text-primary">Developer</span>
          </h1>

          {/* Description */}
          <p className="max-w-md text-lg text-muted-foreground/80 mb-12">
            Hi, I'm Shakir Ali. Passionate about creating efficient, scalable solutions 
            and turning complex problems into elegant applications.
          </p>

          {/* CTA Section */}
          <div className="flex gap-6 items-center">
            <a 
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-primary rounded-lg overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-primary/25"
            >
              Get in Touch
              <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </a>
            <a 
              href="#about"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Learn more about me →
            </a>
          </div>

          {/* Decorative elements - Background Dots */}
          <div className="absolute inset-0 bg-grid-small-white/[0.2] -z-[1]" />
          
          {/* Scroll indicator */}
          <div className="absolute bottom-12 right-4 md:right-12 text-sm text-muted-foreground/60 writing-vertical-lr">
            Scroll to explore
          </div>
        </div>
      </div>

      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
    </div>
  );
};

export default Hero;