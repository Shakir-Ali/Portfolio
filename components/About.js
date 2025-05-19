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
    <section id="about" className="section bg-muted">
      <div className="container mx-auto px-4 py-16">
        <h2 className="section-title reveal text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="reveal space-y-8">
            <p className="text-lg leading-relaxed">
              I am a Software Engineer with 4 years of experience specializing in backend and full-stack development. With a strong foundation in Java and Spring Boot, I've consistently delivered high-performance applications while leading engineering teams at Infosys.
            </p>
            
            <p className="text-lg leading-relaxed">
              My technical expertise spans across modern web technologies, cloud solutions, and DevOps practices. I've successfully improved system efficiency by 75% through innovative solutions and reduced deployment time by 40% using optimized CI/CD pipelines.
            </p>

            <p className="text-lg leading-relaxed">
              As a passionate advocate for quality and innovation, I focus on creating scalable solutions while mentoring junior developers. My contributions have been recognized through multiple awards, including the RISE Award for exceptional project ownership and the Best Team Award for delivering critical solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;