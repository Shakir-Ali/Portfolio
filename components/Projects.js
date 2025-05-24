'use client';
import React, { useEffect } from 'react';
import { Github as GitHub } from 'lucide-react';

const Projects = () => {
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
    <section id="projects" className="min-h-screen relative bg-gradient-to-b from-background/95 to-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-small-white/[0.2] -z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      <div className="container pt-32 pb-40 relative">
        <div className="relative">
          {/* Animated background elements */}
          <div className="absolute -top-16 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-32 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
          
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="reveal group">
                <div className="relative bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 
                  hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col overflow-hidden">
                  {/* Top gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                  
                  {/* Project Status Badge */}
                  {project.status && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-full 
                        group-hover:bg-primary/20 transition-colors duration-300">
                        {project.status}
                      </span>
                    </div>
                  )}

                  {/* Glow effect */}
                  <div className="absolute -inset-px bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative flex flex-col h-full">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 line-clamp-3 group-hover:text-foreground/80 transition-colors duration-300">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="mt-auto space-y-6">
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} 
                            className="text-sm font-medium px-4 py-1.5 rounded-full border border-primary/10 
                            bg-primary/5 text-foreground/70 group-hover:border-primary/30 group-hover:bg-primary/10 
                            transition-all duration-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Project Link */}
                      <div className="flex">
                        <a 
                          href={project.githubLink} 
                          className="group/link inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitHub className="w-5 h-5 group-hover/link:rotate-12 transition-transform duration-300" />
                          View on GitHub
                          <span className="inline-block transition-transform group-hover/link:translate-x-1">→</span>
                        </a>
                      </div>
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

export default Projects;