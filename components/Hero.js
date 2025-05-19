'use client'
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const typewriterRef = useRef(null);

  // Typing effect for the subtitle
  useEffect(() => {
    const subtitle = document.querySelector('.hero-subtitle');
    const text = "Technology Analyst at Infosys | Full Stack Web Developer | Java SpringBoot Developer | Cloud Developer";
    const typingSpeed = 100; // milliseconds per character
    
    let i = 0;
    subtitle.textContent = "";
    
    // Clear any existing timeout
    if (typewriterRef.current) {
      clearTimeout(typewriterRef.current);
    }

    const typeWriter = () => {
      if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        typewriterRef.current = setTimeout(typeWriter, typingSpeed);
      }
    };
    
    typewriterRef.current = setTimeout(typeWriter, 1000);

    // Cleanup function
    return () => {
      if (typewriterRef.current) {
        clearTimeout(typewriterRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="hero-content">
            <h1 className="hero-title">Hi, I'm Shakir Ali</h1>
            <p className="hero-subtitle"></p>
            <div className="hero-buttons">
              <a href="#contact" className="btn">Contact Me</a>
              <a href="#about" className="btn btn-outline">Learn More</a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="hero-image">
              <img 
                src="/images/shakir_photo.jpg" 
                alt="Shakir's Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;