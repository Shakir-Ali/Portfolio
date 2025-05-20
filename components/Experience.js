'use client';
import React, { useEffect } from 'react';
import { Calendar, MapPin, Building2 } from 'lucide-react';
import Image from 'next/image';

const Experience = () => {
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
    <section id="experience" className="section">
      <div className="container mx-auto px-4 py-16">
        <h2 className="section-title reveal text-3xl font-bold text-center mb-12">Professional Journey</h2>
        
        <div className="max-w-5xl mx-auto">

          {/* Company Logo */}
          <div className="relative mb-8 reveal">
            <Image
              src="/images/infosys-logo.png"
              alt="Infosys"
              width={80}
              height={80}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          {/* Experience Cards */}
          <div className="relative space-y-6 pl-8">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-border reveal">
              <div className="timeline-progress absolute top-0 w-full bg-primary origin-top"></div>
            </div>
            {experiences.map((exp, index) => (
              <div key={index} className="reveal">
                <div className="relative">
                  {/* Timeline marker */}
                  <div className="absolute -left-[10px] top-6 w-[18px] h-[4px] bg-primary"></div>
                  {/* Role Card */}
                  <div className="bg-muted p-6 rounded-xl border border-border hover:border-primary/20 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Building2 className="text-primary h-5 w-5" />
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-4">
                      {exp.achievements.map((achievement, i) => (
                        <li 
                          key={i} 
                          className="pl-6 relative text-muted-foreground group"
                        >
                          <div className="absolute left-0 top-[10px] w-2 h-2 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform duration-200"></div>
                          <div className="border-l-2 border-border group-hover:border-primary transition-colors duration-200 pl-4 py-1">
                            {achievement}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-progress {
          height: 0%;
          transition: height 0.6s ease-in-out;
          animation: grow-line 1s ease forwards;
        }

        @keyframes grow-line {
          0% {
            height: 0%;
          }
          100% {
            height: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;