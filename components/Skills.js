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
    <section id="skills" className="py-20 bg-gradient-to-br from-[#f6f0fa] to-[#ede9fe] min-h-[80vh]">
      <h2 className="text-3xl font-extrabold text-center mb-10 text-[#7c3aed] tracking-tight">Skills</h2>
      {/* Internal Navbar as pill switcher */}
      <nav className="flex justify-center mb-10">
        {/* Desktop Pills */}
        <ul className="hidden sm:flex gap-3 bg-[#ede9fe] rounded-full p-2 shadow border border-[#c3b1e1]">
          {skillCategories.map((category, idx) => (
            <li key={category.title}>
              <button
                onClick={() => setActiveCategory(idx)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-colors duration-200 text-sm
                  ${activeCategory === idx
                    ? 'bg-[#7c3aed] text-white shadow'
                    : 'bg-transparent text-[#7c3aed] hover:bg-[#f6f0fa]'}
                `}
              >
                <span>{categoryIcons[category.title]}</span>
                <span className="hidden md:inline">{category.title}</span>
              </button>
            </li>
          ))}
        </ul>
        {/* Mobile Pills (Icons Only) */}
        <ul className="flex sm:hidden gap-2 bg-[#ede9fe] rounded-full p-2 shadow border border-[#c3b1e1]">
          {skillCategories.map((category, idx) => (
            <li key={category.title}>
              <button
                onClick={() => setActiveCategory(idx)}
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200
                  ${activeCategory === idx
                    ? 'bg-[#7c3aed] text-white shadow'
                    : 'bg-transparent text-[#7c3aed] hover:bg-[#f6f0fa]'}
                `}
                aria-label={category.title}
              >
                {categoryIcons[category.title]}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8 max-w-5xl mx-auto">
        {skillCategories[activeCategory].skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-md transition-shadow duration-200 border border-[#ede9fe]"
          >
            <div className="w-12 h-12 flex items-center justify-center mb-3">
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-sm font-medium text-[#5b4a6e] text-center">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;