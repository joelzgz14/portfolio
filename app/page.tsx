// src/app/page.tsx
import React from 'react';
import { Container } from '@/components/Container';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { siteConfig } from '@/content/site';

export default function Home() {
  return (
    <main className="pb-20">
      <Container>
        {/* HERO SECTION */}
        <section className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-12 mt-16 md:mt-24 mb-32">
          <div className="md:w-2/3">
            <p className="text-zinc-500 text-sm font-medium mb-4">
              {siteConfig.name} · {siteConfig.location}
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-4 text-zinc-900">
              <span className="text-red-500">Work.</span> {siteConfig.roleHeadline}
            </h1>
            <p className="text-lg text-zinc-500 mb-8 font-medium">
              {siteConfig.skills}
            </p>
            <div className="flex gap-3">
              <a href="#proyectos" className="bg-zinc-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors">
                Ver proyectos
              </a>
              <a href={siteConfig.cvUrl} target="_blank" className="bg-white border border-zinc-200 text-zinc-900 px-6 py-2.5 rounded-full text-sm font-medium shadow-sm">
                Ver CV
              </a>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-end">
            <div className="p-2 rounded-full border border-zinc-200">
              <img src={siteConfig.avatarUrl} alt="Avatar" className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover bg-zinc-100" />
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="proyectos" className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
            <span className="text-red-500">Featured.</span> Selección rápida
          </h2>
          {/* AQUÍ ES DONDE LLAMAMOS A LOS NUEVOS PROYECTOS */}
          <FeaturedProjects />
        </section>
      </Container>
    </main>
  );
}