import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { Container } from './Container';

export function Navbar() {
  return (
    <header className="w-full py-8 mb-10">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-lg tracking-tight text-zinc-900">
            {siteConfig.name}
          </Link>
          <nav className="flex gap-6 text-sm font-medium text-zinc-500">
            <Link href="#proyectos" className="hover:text-zinc-900 transition-colors">Proyectos</Link>
            <Link href="#about" className="hover:text-zinc-900 transition-colors">Sobre Mí</Link>
            <a href={siteConfig.cvUrl} target="_blank" rel="noreferrer" className="hover:text-zinc-900 transition-colors">CV</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}