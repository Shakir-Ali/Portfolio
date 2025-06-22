'use client';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-3 bg-[#ede9fe] border-t border-[#c3b1e1] text-center text-[#7c3aed] text-sm">
      &copy; {currentYear} Shakir Ali
    </footer>
  );
};

export default Footer;