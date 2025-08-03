'use client'

import React, { useState, useEffect } from 'react';
import { Home, Layers, Briefcase, GraduationCap, FolderOpen, Mail } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#skills', label: 'Skills', icon: Layers },
  { href: '#experience', label: 'Experience', icon: Briefcase },
  { href: '#education', label: 'Education', icon: GraduationCap },
  { href: '#projects', label: 'Projects', icon: FolderOpen },
  { href: '#contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = navItems.map(item => item.href.slice(1));
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = id;
            break;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50 bg-[#232336] rounded-full shadow-lg px-2 py-1 flex gap-2 items-center border border-[#a78bfa]/30 w-[95vw] max-w-md md:max-w-2xl mx-auto">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.href.slice(1);
        return (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setActive(item.href.slice(1))}
            className={`flex flex-col items-center justify-center px-1.5 py-1 transition-all duration-200 ${isActive ? 'text-[#a78bfa]' : 'text-[#e0e0e0] hover:text-[#a78bfa]'}`}
            style={{ minWidth: 0, flex: 1 }}
          >
            <Icon className={`transition-transform duration-200 ${isActive ? 'scale-125' : 'scale-100'} w-6 h-6`} />
            <span className="text-[10px] mt-0.5 font-medium truncate w-full text-center">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
