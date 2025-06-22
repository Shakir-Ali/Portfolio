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
    <section id="education" className="py-20 bg-gradient-to-br from-[#f6f0fa] to-[#ede9fe]">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-[#7c3aed] tracking-tight">Education</h2>
      <div className="max-w-2xl mx-auto flex flex-col gap-8 mb-16">
        {education.map((edu) => (
          <div key={edu.institution} className="bg-white/90 rounded-2xl shadow-lg p-8 border border-[#c3b1e1]">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-lg text-[#7c3aed]">{edu.institution}</span>
              <span className="text-sm text-[#a78bfa]">{edu.date}</span>
            </div>
            <div className="text-[#5b4a6e] font-medium mb-1">{edu.degree}</div>
            <div className="text-[#5b4a6e] text-sm">{edu.description}</div>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold text-center mb-8 text-[#7c3aed] tracking-tight">Achievements</h2>
      <div className="max-w-2xl mx-auto flex flex-col gap-8">
        {achievements.map((ach) => (
          <div key={ach.title} className="bg-white/90 rounded-2xl shadow-lg p-6 border border-[#c3b1e1]">
            <div className="flex justify-between items-center mb-1">
              <span className="font-semibold text-base text-[#7c3aed]">{ach.title}</span>
              <span className="text-xs text-[#a78bfa]">{ach.date}</span>
            </div>
            <div className="text-[#5b4a6e] text-sm">{ach.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;