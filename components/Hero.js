'use client'
import React from 'react';
import { Roboto_Slab } from 'next/font/google';

const robotoSlab = Roboto_Slab({ subsets: ['latin'], weight: ['700'] });

const Hero = () => (
  <section id="home" className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 bg-[#f6f0fa]">
    <h1
      className={`text-5xl md:text-6xl font-bold mb-4 text-[#7c3aed] drop-shadow-lg ${robotoSlab.className}`}
    >
      Shakir Ali
    </h1>
    <p className="text-lg md:text-xl text-[#5b4a6e] mb-2 font-medium">
      Full Stack Developer | Cloud Enthusiast 
    </p>
    <p className="text-base md:text-lg text-[#7c3aed] mb-6">
      Building elegant, scalable solutions with Java, React, Next.js, and AWS.
    </p>
    <p className="text-base text-[#5b4a6e] max-w-xl">
      Currently @ Infosys | 4+ years experience | Passionate about modern web, cloud, and automation.
    </p>
    <a
      href="#projects"
      className="inline-block px-8 py-3 bg-[#7c3aed] text-white rounded-full font-semibold shadow hover:bg-[#a78bfa] transition"
    >
      View My Work
    </a>
  </section>
);

export default Hero;