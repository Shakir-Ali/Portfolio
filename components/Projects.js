'use client';
import React, { useEffect } from 'react';
import { Github as GitHub } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: "Quicker Manage",
      description: "A comprehensive Bakery Management System designed to streamline operations, inventory management, and order processing for bakery businesses. Built using Java with Netbeans IDE and SQL for database management.",
      technologies: ["Java", "Netbeans IDE", "SQL", "Swing", "JDBC"],
      githubLink: "https://github.com/Shakir-Ali/Bakery-Management-System-Using-JAVA-and-Netbeans-IDE-and-SQL"
    },
    {
      title: "AI Kaatib",
      description: "An innovative AI-powered writing assistant designed to enhance content creation and writing workflows.",
      technologies: ["Next.js", "OpenAI", "TailwindCSS", "TypeScript"],
      githubLink: "https://github.com/osafalisayed/aikaatib",
      status: "Coming Soon"
    }
  ];

  return (
    <section id="projects" className="section bg-background">
      <div className="container">
        <h2 className="section-title reveal">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="reveal bg-background rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl p-6 relative">
              {project.status && (
                <div className="absolute top-4 right-4">
                  <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full transform rotate-0 transition-transform duration-300 hover:rotate-3">
                    {project.status}
                  </span>
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs bg-muted px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={project.githubLink} 
                  className="flex items-center text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub size={16} className="mr-1" />
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;