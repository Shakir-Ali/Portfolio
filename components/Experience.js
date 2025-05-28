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
    <section id="experience" className="min-h-screen relative bg-gradient-to-b from-background to-background/95 py-10">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-small-white/[0.2] -z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      <div className="container pt-36 pb-44 relative">
        <div className="relative">
          {/* Animated background elements */}
          <div className="absolute -top-16 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-32 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
          
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Professional Journey
          </h2>

          <div className="max-w-5xl mx-auto relative">
            {/* Company Logo */}
            <div className="relative mb-12 reveal flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                <Image
                  src="/images/infosys-logo.png"
                  alt="Infosys"
                  width={100}
                  height={100}
                  className="relative z-10 opacity-80 hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="relative space-y-8 pl-8">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent reveal">
                <div className="timeline-progress absolute top-0 w-full bg-gradient-to-b from-primary to-primary/50 origin-top"></div>
              </div>

              {experiences.map((exp, index) => (
                <div key={index} className="reveal group">
                  <div className="relative">
                    {/* Timeline marker */}
                    <div className="absolute -left-[22px] top-8 w-9 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    
                    {/* Role Card */}
                    <div className="relative bg-background/50 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                      {/* Gradient borders */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                      
                      {/* Glow effect */}
                      <div className="absolute -inset-px bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                      
                      {/* Content */}
                      <div className="relative">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                          <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            {exp.title}
                          </h3>
                          <span className="flex items-center gap-2 text-sm text-primary/80">
                            <Calendar size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                            {exp.date}
                          </span>
                        </div>
                        
                        {/* Company & Location */}
                        <div className="flex flex-col sm:flex-row gap-3 mb-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Building2 size={16} />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={16} />
                            {exp.location}
                          </span>
                        </div>

                        {/* Achievements */}
                        <ul className="space-y-3 text-muted-foreground">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="group/item flex items-start gap-2">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50 group-hover/item:bg-primary transition-colors duration-300" />
                              <span className="group-hover:item:text-foreground transition-colors duration-300">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;