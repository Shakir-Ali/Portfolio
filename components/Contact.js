'use client';
import React, { useEffect } from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "sayedshakirali0@gmail.com",
      href: "mailto:sayedshakirali0@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91-7690078185",
      href: "tel:+917690078185"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/shakir-ali-sayed",
      href: "https://linkedin.com/in/shakir-ali-sayed"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/Shakir-Ali",
      href: "https://github.com/Shakir-Ali"
    }
  ];

  return (
    <section id="contact" className="section bg-background">
      <div className="container mx-auto px-4 py-16">
        <h2 className="section-title reveal text-3xl font-bold text-center mb-12">Get in Touch</h2>
        
        <div className="reveal max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-muted rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <span className="p-2 bg-background rounded-lg text-primary group-hover:text-primary/80">
                    {info.icon}
                  </span>
                  <div>
                    <h3 className="font-semibold mb-1">{info.label}</h3>
                    <p className="text-sm text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;