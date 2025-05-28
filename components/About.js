'use client';
import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    let observer;
    
    // Using Intersection Observer for better performance and reliability
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Trigger when even 10% of the element is visible
    });
    
    reveals.forEach(element => {
      observer.observe(element);
      // Ensure elements are visible if JavaScript fails
      setTimeout(() => {
        if (!element.classList.contains('active')) {
          element.classList.add('active');
        }
      }, 1000);
    });
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
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

          <div className="reveal max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p className="leading-relaxed">
              I'm a software engineer with a strong foundation in backend and full-stack development, currently shaping scalable solutions at Infosys. I enjoy turning complex challenges into clean, efficient code and thrive in collaborative, agile environments. Over the years, I've honed my skills in Java, Spring Boot, Angular, and DevOps tools—always aiming to build with performance, stability, and user experience in mind.
            </p>
            
            <p className="leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, mentoring teammates, or quietly pushing the limits of what I can do next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;