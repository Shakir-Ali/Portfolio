'use client';
import React, { useEffect } from 'react';
import { GraduationCap, Award, Trophy } from 'lucide-react';

const Education = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealElements = () => {
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealElements);
    revealElements();
    
    return () => {
      window.removeEventListener('scroll', revealElements);
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
    <section id="education" className="section bg-muted">
      <div className="container mx-auto px-4 py-16">
        <h2 className="section-title reveal text-3xl font-bold text-center mb-12">Education & Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2 bg-primary/10 rounded-lg text-primary">
                <GraduationCap size={24} />
              </span>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            
            {education.map((edu, index) => (
              <div key={index} className="mb-6 p-6 bg-card rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-2">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground mb-3">{edu.institution}</p>
                <p className="text-sm font-medium text-primary/80 mb-3">{edu.date}</p>
                <p className="text-sm text-muted-foreground">{edu.description}</p>
              </div>
            ))}
          </div>
          
          <div className="reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2 bg-primary/10 rounded-lg text-primary">
                <Trophy size={24} />
              </span>
              <h3 className="text-xl font-semibold">Achievements</h3>
            </div>
            
            <div className="p-6 bg-card rounded-lg shadow-md">
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`${
                      index !== achievements.length - 1 ? 'pb-6 border-b border-border' : ''
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold">{achievement.title}</h4>
                      <span className="text-sm font-medium text-primary/80">{achievement.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;