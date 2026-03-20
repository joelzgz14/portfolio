"use client"; // Mantenemos esto para que los Links y componentes hijos funcionen bien

import React from 'react';
import { featuredProjects } from '@/content/project';
import { AppleStyleVideo } from './AppleStyleVideo';
import Link from 'next/link';

export function FeaturedProjects() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {featuredProjects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col bg-white border border-zinc-100 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all group"
        >
          {/* VIDEO PREVIEW */}
          {project.videoUrl && (
            <div className="mb-6">
              <AppleStyleVideo src={project.videoUrl} />
            </div>
          )}

          {/* CONTENIDO TEXTUAL */}
          <h3 className="text-xl font-bold mb-2 text-zinc-900">{project.title}</h3>
          <p className="text-zinc-500 mb-8 text-sm leading-relaxed flex-grow">
            {project.description}
          </p>

          {/* EL MAP CORREGIDO CON TIPOS EXPLICITOS */}
          <div className="flex gap-2 flex-wrap mb-6">
            {project.technologies.map((tech: string, i: number) => (
              <span
                key={i}
                className="text-xs font-medium text-zinc-500 border border-zinc-200 px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* BOTÓN DE DETALLES */}
          <Link
            href={project.link}
            className="text-sm font-bold text-red-500 hover:text-red-600 transition-colors flex items-center gap-1"
          >
            Ver detalles técnicos <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      ))}
    </div>
  );
}