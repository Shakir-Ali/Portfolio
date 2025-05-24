'use client'
import React from 'react';
import { ArrowDown, Code, Briefcase, Coffee, Star } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const roles = [
    "Technology Analyst",
    "Full Stack Developer",
    "Java SpringBoot Developer",
    "Cloud Developer"
  ];

  return (
    <section id="home" className="min-h-screen relative bg-gradient-to-b from-background via-background/95 to-background/90">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-small-white/[0.2] -z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      
      <div className="container pt-32 lg:pt-40 pb-40 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left relative">
            {/* Animated background elements */}
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
            
            <div className="relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Hi, I'm Shakir Ali
              </h1>
              
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start text-lg text-muted-foreground/80">
                {roles.map((role, index) => (
                  <span key={index} className="px-4 py-1.5 bg-primary/5 rounded-full hover:bg-primary/10 transition-colors">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Passionate about creating efficient, scalable solutions and turning complex problems into elegant applications.
            </p>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="group relative px-6 py-3 bg-primary text-primary-foreground rounded-lg overflow-hidden shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-foreground/0 via-primary-foreground/5 to-primary-foreground/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Contact Me</span>
              </a>
              <a 
                href="#about" 
                className="group px-6 py-3 border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Decorative code elements */}
            <div className="absolute top-0 left-0 -z-10 opacity-20">
              <Code className="w-6 h-6 text-primary animate-float" />
            </div>
            <div className="absolute bottom-0 right-0 -z-10 opacity-20">
              <Star className="w-4 h-4 text-primary animate-float-delayed" />
            </div>
          </div>
          
          <div className="relative group">
            {/* Image container with effects */}
            <div className="relative z-10 rounded-2xl overflow-hidden bg-gradient-to-b from-primary/20 to-transparent p-2">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
                <div className="relative w-full max-w-[400px] mx-auto">
                  <Image 
                    src="/images/shakir_photo.jpeg" 
                    alt="Shakir Ali - Full Stack Developer"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Background elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-2xl blur-2xl group-hover:via-primary/10 transition-all duration-500" />
            <div className="absolute inset-0 bg-grid-small-white/[0.2] rounded-2xl" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to About section"
      >
        <span className="text-sm">Scroll Down</span>
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;