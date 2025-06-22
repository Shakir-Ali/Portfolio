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
      <div className="max-w-2xl mx-auto bg-white/90 p-8 rounded-2xl shadow-lg text-center border border-[#c3b1e1]">
        <p className="mb-6 text-[#5b4a6e] text-lg font-medium">
          Let's connect and explore opportunities together. Feel free to reach out through any of these channels.
        </p>
        <div className="flex flex-col gap-3 items-center w-full">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden w-full max-w-2xl mx-auto"
            >
              <div className="relative bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-primary/10 
                transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 flex items-center justify-center gap-3">
                <span className="flex items-center justify-center p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(info.icon, { className: 'w-4 h-4' })}
                </span>
                <span className="text-[#5b4a6e] text-base font-medium break-all group-hover:underline transition-colors duration-200">
                  {info.value}
                </span>
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