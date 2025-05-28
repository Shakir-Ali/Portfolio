'use client';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { LayoutGrid, Code2, Cloud, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [navPositions, setNavPositions] = useState({ x: 0, width: 0 });
  const buttonRefs = useRef([]);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: "/images/skills/html5.svg" },
        { name: "CSS", icon: "/images/skills/css3.svg" },
        { name: "JavaScript", icon: "/images/skills/javascript.svg" },
        { name: "TypeScript", icon: "/images/skills/typescript.svg" },
        { name: "React", icon: "/images/skills/react.svg" },
        { name: "Angular", icon: "/images/skills/angular.svg" },
        { name: "Next.js", icon: "/images/skills/nextjs.svg" },
        { name: "Tailwind CSS", icon: "/images/skills/tailwind.svg" },
        { name: "Shadcn UI", icon: "/images/skills/shadcn.svg" },
        { name: "JSP", icon: "/images/skills/jsp.svg" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Java", icon: "/images/skills/java.svg" },
        { name: "Spring Boot", icon: "/images/skills/spring.svg" },
        { name: "Hibernate", icon: "/images/skills/hibernate.svg" }
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
        { name: "GCP", icon: "/images/skills/gcp.svg" },
        { name: "Github Actions", icon: "/images/skills/github-actions.svg" },
        { name: "CI/CD Pipelines", icon: "/images/skills/cicd.svg" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: "/images/skills/mysql.svg" },
        { name: "PostgreSQL", icon: "/images/skills/postgresql.svg" },
        { name: "MongoDB", icon: "/images/skills/mongodb.svg" },
        { name: "SQLite3", icon: "/images/skills/sqlite.svg" }
      ]
    },
    {
      title: "Tools & Testing",
      skills: [
        { name: "Git", icon: "/images/skills/git.svg" },
        { name: "GitHub", icon: "/images/skills/github.svg" },
        { name: "Postman", icon: "/images/skills/postman.svg" },
        { name: "Swagger", icon: "/images/skills/swagger.svg" },
        { name: "SonarQube", icon: "/images/skills/sonarqube.svg" },
        { name: "JUnit", icon: "/images/skills/junit5.svg" },
        { name: "Mockito", icon: "/images/skills/mockito.png" }
      ]
    }
  ];

  const categoryIcons = {
    "Frontend Development": <LayoutGrid className="w-5 h-5" />,
    "Backend Development": <Code2 className="w-5 h-5" />,
    "DevOps & Cloud": <Cloud className="w-5 h-5" />,
    "Databases": <Database className="w-5 h-5" />,
    "Tools & Testing": <Wrench className="w-5 h-5" />
  };

  useEffect(() => {
    // Function to update the active button position
    const updatePosition = () => {
      const activeButton = buttonRefs.current[activeCategory];
      if (activeButton) {
        const buttonRect = activeButton.getBoundingClientRect();
        const navbarRect = activeButton.parentElement.getBoundingClientRect();
        setNavPositions({
          x: buttonRect.left - navbarRect.left,
          width: buttonRect.width
        });
      }
    };

    // Initial position update
    updatePosition();

    // Update on window resize
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [activeCategory]);

  return (
    <section id="skills" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Category Navigation */}
        <div className="flex justify-center mb-8">
          <nav className="flex flex-nowrap overflow-x-auto max-w-full p-1.5 bg-white rounded-xl shadow-lg relative">
            <div 
              className="absolute h-[calc(100%-8px)] bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-500 ease-out shadow-md"
              style={{
                left: '4px',
                top: '4px',
                width: navPositions.width - 8,
                transform: `translateX(${navPositions.x}px)`,
                borderRadius: '0.5rem'
              }}
            />
            {skillCategories.map((category, index) => (
              <button
                key={category.title}
                ref={el => buttonRefs.current[index] = el}
                onClick={() => setActiveCategory(index)}
                className={`
                  flex items-center gap-2 px-6 py-2.5 rounded-lg transition-colors duration-300
                  relative z-10 justify-center
                  ${activeCategory === index 
                    ? 'text-white' 
                    : 'text-gray-700 hover:text-blue-600'
                  }
                  font-medium text-sm whitespace-nowrap
                `}
              >
                <span className={`transition-colors duration-300 ${activeCategory === index ? 'text-white' : 'text-blue-600'}`}>
                  {categoryIcons[category.title]}
                </span>
                <span>{category.title}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-3">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-900 text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;