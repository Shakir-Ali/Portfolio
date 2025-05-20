'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';

const Skills = () => {
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
    <section id="skills" className="section bg-muted">
      <div className="container mx-auto px-4 py-16">
        <h2 className="section-title reveal text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="reveal bg-background/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-primary/80">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="group relative p-4 bg-card rounded-xl hover:bg-primary/5 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 relative transform group-hover:rotate-12 transition-transform duration-300">
                        <Image
                          src={skill.icon}
                          alt={`${skill.name} icon`}
                          fill
                          className="object-contain drop-shadow-md"
                        />
                      </div>
                      <span className="text-sm font-medium group-hover:text-primary transition-colors duration-300">{skill.name}</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;