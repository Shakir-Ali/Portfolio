'use client';
import React, { useEffect } from 'react';
import { Calendar, MapPin, Building2 } from 'lucide-react';
import Image from 'next/image';

const Experience = () => {
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

  const experiences = [
    {
      title: "Technology Analyst",
      company: "Infosys",
      location: "Jaipur, Rajasthan",
      date: "Oct 2024 - Present",
      logo: "/images/infosys-logo.png",
      achievements: [
        "Led a multi-functional team of 5 engineers to deliver high-performance scalable applications, improving system efficiency by 75%.",
        "Collaborated with product stakeholders to define roadmaps and translate requirements into technical solutions.",
        "Mentored junior developers, fostering a culture of continuous learning and improving team productivity by 30%."
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "Infosys",
      location: "Jaipur, Rajasthan",
      date: "Oct 2023 - Oct 2024",
      logo: "/images/infosys-logo.svg",
      achievements: [
        "Boosted backend processing speed by 64% through implementation of Apache Kafka and Camel Saga for asynchronous workflows.",
        "Led the full development lifecycle of crew management and inbound systems — from design to deployment.",
        "Delivered 150+ sprint items through Agile processes, improving release efficiency and reducing downtime",
        "Reduced production deployment time by 40% via optimized CI/CD pipelines using Jenkins and Docker."
      ]
    },
    {
      title: "Software Engineer",
      company: "Infosys",
      location: "Jaipur, Rajasthan",
      date: "Sep 2021 - Oct 2023",
      logo: "/images/infosys-logo.svg",
      achievements: [
        "Built RESTful APIs with Java Spring Boot, cutting frontend load time by 35% and enhancing user experience.",
        "Integrated SOLA services using Java and Dozer BeanFactory, reducing implementation time by 30%.",
        "Developed comprehensive test suites (unit, integration, E2E), improving system stability and reducing bugs in production by 98%"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-[#f6f0fa] to-[#ede9fe]">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-[#7c3aed] tracking-tight">Experience</h2>
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        {experiences.map((exp, idx) => (
          <div key={exp.company} className="bg-white/90 rounded-2xl shadow-lg p-8 border border-[#c3b1e1]">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-lg text-[#7c3aed]">{exp.company}</span>
              <span className="text-sm text-[#a78bfa]">{exp.date}</span>
            </div>
            <div className="text-[#5b4a6e] font-medium mb-1">{exp.title}</div>
            <div className="text-[#5b4a6e] text-sm">
              <span className="flex items-center gap-1">
                <Building2 size={16} />
                {exp.location}
              </span>
            </div>
            <ul className="space-y-3 text-muted-foreground mt-4">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="group/item flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:item:bg-primary transition-colors duration-300" />
                  <span className="group-hover:item:text-foreground transition-colors duration-300">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;