// src/components/Navbar.tsx
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { siteConfig } from '@/content/site';
import { Sun, Moon, Github, Linkedin } from 'lucide-react'; // Iconos de redes sociales

export function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Evitamos errores de hidratación asegurando que esto solo corra en el cliente
  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(prev => !prev);
  };

  // No renderizamos el botón hasta que React sepa en qué modo estamos
  if (!mounted) return <nav className="h-16 border-b border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-black sticky top-0 z-50 transition-colors duration-300"></nav>;

  return (
    <nav className="border-b border-zinc-200 dark:border-zinc-900 bg-zinc-50/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between w-full">
        
        {/* LOGO */}
        <Link href="/" className="font-dot text-2xl tracking-widest text-black dark:text-white uppercase transition-colors hover:text-red-600 dark:hover:text-red-500">
          {siteConfig.name.split(' ')[0]}.OS
        </Link>
        
        {/* ENLACES SOCIALES Y BOTÓN THEME */}
        <div className="flex items-center gap-6">
          {/* Social Icons (Sustituimos el texto // ROOT por iconos) */}
          <div className="flex gap-4 items-center">
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors p-1.5 border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950">
              <Github className="w-3.5 h-3.5" />
            </a >
            <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors p-1.5 border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950">
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
          
          {/* Botón Dark/Light Mode con iconos */}
          <button 
            onClick={toggleTheme} 
            className="p-2 border border-zinc-300 dark:border-zinc-800 hover:border-red-600 dark:hover:border-red-500 text-zinc-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-500 transition-all bg-white dark:bg-zinc-950 flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </nav>
  );
}