'use client';
import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealElements = () => {
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealElements);
    revealElements();
    
    return () => {
      window.removeEventListener('scroll', revealElements);
    };
  }, []);

  return (
    <section id="about" className="min-h-screen relative bg-gradient-to-b from-background to-background/95">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-small-white/[0.2] -z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      <div className="container pt-32 pb-40 relative">
        <div className="relative">
          {/* Animated background elements */}
          <div className="absolute -top-16 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-32 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
          
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            About Me
          </h2>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="reveal space-y-8 bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 hover:border-primary/20 transition-colors duration-300 shadow-lg">
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              
              <p className="text-lg text-muted-foreground leading-relaxed reveal">
                I am a Software Engineer with 4 years of experience specializing in backend and full-stack development. With a strong foundation in Java and Spring Boot, I've consistently delivered high-performance applications while leading engineering teams at Infosys.
              </p>
              
              <div className="relative px-6 py-4 bg-primary/5 rounded-lg reveal">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
                  My technical expertise spans across modern web technologies, cloud solutions, and DevOps practices. I've successfully improved system efficiency by 75% through innovative solutions and reduced deployment time by 40% using optimized CI/CD pipelines.
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed reveal">
                As a passionate advocate for quality and innovation, I focus on creating scalable solutions while mentoring junior developers. My contributions have been recognized through multiple awards, including the RISE Award for exceptional project ownership and the Best Team Award for delivering critical solutions.
              </p>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;