'use client';
import React, { useEffect } from 'react';
import { GraduationCap, Award, Trophy, Sparkles } from 'lucide-react';

const Education = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    let observer;
    
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
    
    reveals.forEach(element => {
      observer.observe(element);
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

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "BK Birla Institute of Engineering and Technology, Pilani",
      date: "Sept 2016 - May 2020",
      description: "Core coursework included Database Management Systems, Operating Systems, System Design, and Computer Networks."
    }
  ];

  const achievements = [
    {
      title: "RISE Award – Most Valuable Player",
      date: "March 2025",
      description: "Recognized for exceptional performance and ownership of key projects."
    },
    {
      title: "RISE Best Team Award",
      date: "2024",
      description: "Awarded for successfully delivering a critical solution as part of a high-performing team."
    },
    {
      title: "Insta Award – Employee of the Quarter",
      date: "2023",
      description: "Recognized for efforts leading to 30% faster delivery of project deliverables."
    }
  ];

  return (
    <section id="education" className="min-h-screen relative bg-gradient-to-b from-background to-background/95">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-small-white/[0.2] -z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="container mx-auto px-4 pt-32 pb-40 relative">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          Education & Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education Section */}
          <div className="reveal">
            <div className="flex items-center gap-4 mb-8">
              <span className="p-3 bg-primary/10 rounded-xl text-primary">
                <GraduationCap size={24} className="animate-float" />
              </span>
              <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Education
              </h3>
            </div>
            
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="group relative bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 
                  hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  <h4 className="text-xl font-semibold mb-3 text-foreground/90">{edu.degree}</h4>
                  <p className="text-base text-muted-foreground mb-3">{edu.institution}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-medium px-3 py-1 bg-primary/10 rounded-full text-primary">
                      {edu.date}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              </div>
            ))}
          </div>
          
          {/* Achievements Section */}
          <div className="reveal">
            <div className="flex items-center gap-4 mb-8">
              <span className="p-3 bg-primary/10 rounded-xl text-primary">
                <Trophy size={24} className="animate-float" />
              </span>
              <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Achievements
              </h3>
            </div>
            
            <div className="relative bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 
              hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              
              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`group relative ${
                      index !== achievements.length - 1 ? 'pb-8 border-b border-primary/10' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <Sparkles size={16} className="text-primary animate-pulse" />
                        <h4 className="text-lg font-semibold text-foreground/90">{achievement.title}</h4>
                      </div>
                      <span className="text-sm font-medium px-3 py-1 bg-primary/10 rounded-full text-primary">
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-7">{achievement.description}</p>
                  </div>
                ))}
              </div>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;