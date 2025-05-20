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
    <section id="projects" className="section bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 py-16">
        <h2 className="section-title reveal text-3xl font-bold text-center mb-12">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="reveal group"
            >
              <div className="relative bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 overflow-hidden h-full flex flex-col">
                {/* Project Status Badge */}
                {project.status && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      {project.status}
                    </span>
                  </div>
                )}

                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                {/* Project Content */}
                <div className="relative flex flex-col h-full">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3 group-hover:text-foreground/80 transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="text-xs font-medium bg-background/50 text-foreground/70 px-3 py-1 rounded-full border border-border/50 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Project Link */}
                    <div className="flex gap-4">
                      <a 
                        href={project.githubLink} 
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHub className="w-4 h-4" />
                        <span>View Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;