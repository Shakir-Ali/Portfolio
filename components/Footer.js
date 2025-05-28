'use client';
import React from 'react';
import { Heart, Code, Coffee, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-background to-background/95 overflow-hidden border-t border-primary/10">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-small-white/[0.1] -z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-4 py-12 relative">
        <div className="flex flex-col items-center justify-center text-center relative z-10">
          {/* Animated elements */}
          <div className="absolute inset-0 pointer-events-none">
            <Code 
              className="absolute top-4 left-[10%] text-primary/40 animate-float" 
              size={24}
            />
            <Coffee 
              className="absolute bottom-8 right-[15%] text-primary/40 animate-float-delayed" 
              size={20}
            />
            <Star 
              className="absolute top-1/2 left-[20%] text-primary/40 animate-float" 
              size={16}
            />
          </div>

          {/* Main content */}
          <div className="space-y-6 backdrop-blur-sm p-6 rounded-2xl border border-primary/10">
            <div className="flex items-center justify-center gap-3 text-lg font-medium">
              <span className="text-primary font-mono">&lt;</span>
              <span>Crafted with</span>
              <Heart 
                size={20} 
                className="text-primary fill-primary animate-pulse"
              />
              <span>and</span>
              <Coffee size={20} className="text-primary" />
              <span className="text-primary font-mono">/&gt;</span>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm">
                © {currentYear} <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  Shakir Ali
                </span>
              </p>
              <div className="text-xs font-mono bg-primary/5 px-6 py-2 rounded-full">
                const dedication = &quot;Building digital experiences, one line at a time&quot;;
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-primary/5 to-transparent opacity-30" />
    </footer>
  );
};

export default Footer;