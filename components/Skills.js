'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: "/images/skills/html5.svg" },
        { name: "CSS", icon: "/images/skills/css3.svg" },
        { name: "JavaScript", icon: "/images/skills/javascript.svg" },
        { name: "TypeScript", icon: "/images/skills/typescript.svg" },
        { name: "Angular", icon: "/images/skills/angular.svg" },
        { name: "JSP", icon: "/images/skills/jsp.png" },
        { name: "REST API", icon: "/images/skills/api.svg" },
        { name: "SOAP API", icon: "/images/skills/api.svg" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Java", icon: "/images/skills/java.svg" },
        { name: "Spring Boot", icon: "/images/skills/spring.svg" },
        { name: "Hibernate", icon: "/images/skills/hibernate.png" },
        { name: "Microservices", icon: "/images/skills/microservices.svg" },
        { name: "RESTful APIs", icon: "/images/skills/api.svg" },
        { name: "Unit Testing", icon: "/images/skills/junit.png" },
        { name: "Integration Testing", icon: "/images/skills/testing.svg" }
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker", icon: "/images/skills/docker.svg" },
        { name: "Jenkins", icon: "/images/skills/jenkins.svg" },
        { name: "Kubernetes", icon: "/images/skills/kubernetes.svg" },
        { name: "Apache Kafka", icon: "/images/skills/kafka.svg" },
        { name: "AWS", icon: "/images/skills/aws.svg" },
        { name: "Github Actions", icon: "/images/skills/github-actions.svg" },
        { name: "CI/CD Pipelines", icon: "/images/skills/cicd.svg" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: "/images/skills/mysql.svg" },
        { name: "Oracle", icon: "/images/skills/oracle.svg" },
        { name: "PostgreSQL", icon: "/images/skills/postgresql.svg" },
        { name: "Database Design", icon: "/images/skills/database.svg" },
        { name: "SQL Optimization", icon: "/images/skills/sql.svg" }
      ]
    },
    {
      title: "Tools & Testing",
      skills: [
        { name: "Git", icon: "/images/skills/git.svg" },
        { name: "Github", icon: "/images/skills/github.svg" },
        { name: "JUnit", icon: "/images/skills/junit.png" },
        { name: "Mockito", icon: "/images/skills/mockito.png" },
        { name: "Spring Test", icon: "/images/skills/spring-test.svg" },
        { name: "Dozer", icon: "/images/skills/java.svg" },
        { name: "Version Control", icon: "/images/skills/git.svg" }
      ]
    },
    {
      title: "Core Competencies",
      skills: [
        { name: "DBMS", icon: "/images/skills/database.svg" },
        { name: "Operating Systems", icon: "/images/skills/os.svg" },
        { name: "System Design", icon: "/images/skills/system-design.svg" },
        { name: "Computer Networks", icon: "/images/skills/network.svg" },
        { name: "Data Structures", icon: "/images/skills/data-structure.svg" },
        { name: "Algorithms", icon: "/images/skills/algorithm.svg" }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen relative bg-gradient-to-b from-background/95 to-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-small-white/[0.2] -z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      <div className="container pt-32 pb-40 relative">
        <div className="relative">
          {/* Animated background elements */}
          <div className="absolute -top-16 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-32 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
          
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Skills & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="reveal group">
                <div className="relative bg-background/50 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 shadow-lg 
                  hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                  {/* Top gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-px bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                  
                  <div className="relative">
                    <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                      {category.title}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} 
                          className="group/skill flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-primary/5 transition-colors duration-300">
                          <div className="w-12 h-12 relative">
                            <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                            <Image
                              src={skill.icon}
                              alt={skill.name}
                              width={48}
                              height={48}
                              className="relative w-full h-full object-contain transform group-hover/skill:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <span className="text-sm text-center text-muted-foreground group-hover/skill:text-foreground transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom gradient line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;