'use client';
import React, { useEffect } from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
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
    <section id="contact" className="py-20 bg-gradient-to-br from-[#f6f0fa] to-[#ede9fe]">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-[#7c3aed] tracking-tight">Contact</h2>
      <div className="max-w-md mx-auto bg-white/90 p-8 rounded-2xl shadow-lg text-center border border-[#c3b1e1]">
        <p className="mb-6 text-[#5b4a6e] text-lg font-medium">
          Let's connect and explore opportunities together. Feel free to reach out through any of these channels.
        </p>
        
        <div className="grid grid-cols-1 gap-6">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden"
            >
              <div className="relative bg-background/50 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 
                transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start gap-4 relative z-10">
                  <span className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </span>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg text-foreground/90">{info.label}</h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 
                  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </a>
          ))}
        </div>
        
        <a
          href="mailto:sayedshakirali0@gmail.com"
          className="mt-6 inline-block px-6 py-3 bg-[#7c3aed] text-white rounded-full font-semibold shadow hover:bg-[#a78bfa] transition"
        >
          Email Me
        </a>
      </div>
    </section>
  );
};

export default Contact;