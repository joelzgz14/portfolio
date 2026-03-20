// src/components/FeaturedProjects.tsx
import React from 'react';
import { featuredProjects } from '@/content/project'; // Importamos de la base de datos
import { AppleStyleVideo } from './AppleStyleVideo';
import Link from 'next/link';

export function FeaturedProjects() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {featuredProjects.map((project, index) => (
        <div key={index} className="flex flex-col bg-white border border-zinc-100 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all">
          {project.videoUrl && (
            <div className="mb-6">
              <AppleStyleVideo src={project.videoUrl} />
            </div>
          )}
          <h3 className="text-xl font-bold mb-2 text-zinc-900">{project.title}</h3>
          <p className="text-zinc-500 mb-8 text-sm leading-relaxed flex-grow">
            {project.description}
          </p>
          <div className="flex gap-2 flex-wrap mb-6">
            {project.technologies.map((tech, i) => (
              <span key={i} className="text-xs font-medium text-zinc-500 border border-zinc-200 px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          {/* Link dinámico: Si es /projects/fut7stats irá a la página que creamos */}
          <Link href={project.link} className="text-sm font-bold text-red-500 hover:underline">
            Ver detalles técnicos →
          </Link>
        </div>
      ))}
    </div>
  );
}