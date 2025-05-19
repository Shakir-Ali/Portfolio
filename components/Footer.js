'use client';
import React from 'react';
import { Heart, Code, Coffee, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
      
      <div className="container mx-auto px-4 py-12 relative">
        <div className="flex flex-col items-center justify-center text-center relative z-10">
          {/* Animated code elements */}
          <div className="absolute inset-0 pointer-events-none">
            <Code 
              className="absolute top-4 left-[10%] opacity-20 animate-float text-primary" 
              size={24}
            />
            <Coffee 
              className="absolute bottom-8 right-[15%] opacity-20 animate-float-delayed text-primary" 
              size={20}
            />
            <Star 
              className="absolute top-1/2 left-[20%] opacity-20 animate-float text-primary" 
              size={16}
            />
          </div>

          {/* Main content */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 text-lg font-medium">
              <span className="text-primary">&lt;</span>
              <span className="text-background">Crafted with</span>
              <Heart 
                size={20} 
                className="text-primary fill-primary animate-pulse"
              />
              <span className="text-background">and</span>
              <Coffee size={20} className="text-primary" />
              <span className="text-primary">/&gt;</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm text-background/90">
                © {currentYear} <span className="font-semibold">Shakir Ali</span>
              </p>
              <div className="text-xs text-background/70 font-mono bg-foreground/40 px-4 py-2 rounded-full backdrop-blur-sm">
                const dedication = &quot;Building digital experiences, one line at a time&quot;;
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 opacity-30"></div>
    </footer>
  );
};

export default Footer;