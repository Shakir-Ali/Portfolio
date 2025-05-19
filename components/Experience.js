'use client';
import React, { useEffect } from 'react';
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
      logo: "/images/infosys-logo.svg",
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
    <section id="experience" className="section py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title reveal text-center mb-16">Career Journey at Infosys</h2>
        
        {/* Company Logo */}
        <div className="flex justify-center mb-16 reveal">
          <div className="relative w-48 h-48 mb-8">
            <Image
              src="/images/infosys-logo.svg"
              alt="Infosys logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20"
            style={{ marginTop: '24px' }}
          />

          {/* Experience Items */}
          <div className="relative">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`reveal mb-24 flex w-full items-center justify-center last:mb-0`}
              >
                <div className="grid grid-cols-[1fr,auto,1fr] w-full items-center gap-4">
                  {/* Left side content (for even indexes) */}
                  <div className={`${index % 2 === 0 ? 'block' : 'hidden md:block'} text-right`}>
                    {index % 2 === 0 && (
                      <div className="p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-primary mb-2">{exp.title}</h3>
                        <p className="text-muted-foreground mb-1">{exp.location}</p>
                        <p className="text-sm font-medium text-primary/80 mb-4">{exp.date}</p>
                        <ul className="list-disc list-inside space-y-2 text-left">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground">{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Timeline node */}
                  <div className="relative flex items-center justify-center z-10">
                    <div className="w-6 h-6 rounded-full bg-primary shadow-glow"></div>
                  </div>

                  {/* Right side content (for odd indexes) */}
                  <div className={`${index % 2 === 1 ? 'block' : 'hidden md:block'}`}>
                    {index % 2 === 1 && (
                      <div className="p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-primary mb-2">{exp.title}</h3>
                        <p className="text-muted-foreground mb-1">{exp.location}</p>
                        <p className="text-sm font-medium text-primary/80 mb-4">{exp.date}</p>
                        <ul className="list-disc list-inside space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground">{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .shadow-glow {
          box-shadow: 0 0 0 4px rgba(var(--primary), 0.2),
                      0 0 0 8px rgba(var(--primary), 0.1);
        }
        
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .grid-cols-[1fr,auto,1fr] {
            grid-template-columns: auto 1fr;
            gap: 1rem;
          }

          .text-right {
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;