// src/app/projects/[id]/page.tsx
"use client";

import React, { useRef } from 'react'; // NEED React and useRef
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projectsData } from '@/content/projects';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id as string;
  useScrollReveal();

  // Reference to the video element for fullscreen API
  const videoRef = useRef<HTMLVideoElement>(null);

  // Function to handle click and request fullscreen
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) { /* Safari */
        (videoRef.current as any).webkitRequestFullscreen();
      } else if ((videoRef.current as any).msRequestFullscreen) { /* IE11 */
        (videoRef.current as any).msRequestFullscreen();
      }
    }
  };

  // Buscamos el proyecto específico en tus datos
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-red-600 uppercase">
        Error 404: Módulo de proyecto no encontrado.
      </div>
    );
  }

  return (
    <main className="min-h-screen pb-24">
      {/* Cabecera del Proyecto */}
      <section className="py-24 border-b border-zinc-200 dark:border-zinc-900 reveal">
        <div className="max-w-5xl mx-auto px-6">
          <Link href="/#proyectos" className="inline-flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-red-600 dark:hover:text-red-500 transition-colors mb-12 uppercase">
            <ArrowLeft className="w-4 h-4" /> RETORNAR AL DIRECTORIO
          </Link>
          
          <div className="font-mono text-xs text-red-600 dark:text-red-500 bg-red-50 dark:bg-red-950/30 px-3 py-1 border border-red-200 dark:border-red-900/50 inline-block mb-6">
            {project.subtitle}
          </div>
          
          <h1 className="font-dot text-6xl md:text-8xl text-black dark:text-white uppercase tracking-widest mb-8">
            {project.title}
          </h1>
          
{/* --- DESCRIPCIÓN DEL PROYECTO --- */}
<div className="space-y-12">
  {/* Descripción Principal (La que ya tenías) */}
  <p className="font-mono text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
    {project.description}
  </p>

  {/* Bloque de Especificaciones Técnicas (Solo aparece si hay longDescription) */}
  {project.longDescription && (
    <div className="p-8 border border-zinc-200 dark:border-zinc-900 bg-white/30 dark:bg-zinc-950/30 backdrop-blur-sm reveal delay-1 relative overflow-hidden">
      {/* Detalle estético: Línea roja vertical */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600/50"></div>
      
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
        <h3 className="font-dot text-xl text-black dark:text-white uppercase tracking-[0.2em]">
          ESPECIFICACIONES_TÉCNICAS.LOG
        </h3>
      </div>

      <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed whitespace-pre-line mb-10">
        {project.longDescription}
      </p>

      {/* Grid de metadatos técnicos estilo terminal */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <div>
          <span className="block text-[10px] text-zinc-400 uppercase tracking-tighter mb-1 font-bold">Architecture</span>
          <span className="block text-[11px] text-zinc-700 dark:text-zinc-300 uppercase font-mono tracking-tight">Clean / Modular</span>
        </div>
        <div>
          <span className="block text-[10px] text-zinc-400 uppercase tracking-tighter mb-1 font-bold">Rendering</span>
          <span className="block text-[11px] text-zinc-700 dark:text-zinc-300 uppercase font-mono tracking-tight">Server-Side (SSR)</span>
        </div>
        <div>
          <span className="block text-[10px] text-zinc-400 uppercase tracking-tighter mb-1 font-bold">Styling</span>
          <span className="block text-[11px] text-zinc-700 dark:text-zinc-300 uppercase font-mono tracking-tight">Tailwind v4.0</span>
        </div>
        <div>
          <span className="block text-[10px] text-zinc-400 uppercase tracking-tighter mb-1 font-bold">Type System</span>
          <span className="block text-[11px] text-zinc-700 dark:text-zinc-300 uppercase font-mono tracking-tight">Strict TS 5.0</span>
        </div>
      </div>
    </div>
  )}
</div>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map(tech => (
              <span key={tech} className="font-mono text-sm border border-zinc-300 dark:border-zinc-800 px-4 py-2 text-black dark:text-white bg-white dark:bg-zinc-900">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Zona de contenido inmersivo con Apple Style Video (Clicable) */}
      <section className="py-24 reveal delay-1">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* CONTENEDOR DE VIDEO APPLE STYLE (CLICABLE) */}
            <div className="col-span-2 relative group">
              {/* Resplandor ambiental de hardware */}
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-black rounded-sm overflow-hidden shadow-2xl">
                {/* Barra superior estilo ventana de sistema */}
                <div className="h-7 border-b border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950 flex items-center px-3 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800"></div>
                  <span className="ml-2 font-mono text-[10px] text-zinc-400 uppercase tracking-tighter">
                    terminal.exe // preview_{project.id}.mp4 [PINCHAR PARA EXPANDIR]
                  </span>
                </div>

                {/* Video con autoplay inmersivo y fullscreen al click */}
                <div className="relative aspect-video bg-zinc-100 dark:bg-zinc-950">
                  <video 
                    ref={videoRef} // Attach ref here
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    onClick={handleVideoClick} // Attach click handler here
                    className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000 cursor-pointer"
                  >
                    <source src={`/videos/${project.id}-demo.mp4`} type="video/mp4" />
                    Tu navegador no soporta la ejecución de video.
                  </video>
                  
                  {/* Filtro sutil de rejilla Nothing sobre el video */}
                  <div className="absolute inset-0 pointer-events-none bg-dot-grid opacity-[0.05] dark:opacity-[0.08]"></div>
                </div>
              </div>
            </div>
            
{/* SIDEBAR DE ESTADO Y ACCIONES (Actualizado) */}
<div className="space-y-8 font-mono">
  <div className="border border-zinc-200 dark:border-zinc-900 p-6 bg-white dark:bg-black">
    <h3 className="text-zinc-500 mb-4 text-[10px] uppercase tracking-widest">Estado del Sistema</h3>
    <div className="flex items-center gap-2 text-sm text-black dark:text-white">
      <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
      EN EJECUCIÓN [STABLE]
    </div>
  </div>
  
  <div className="border border-zinc-200 dark:border-zinc-900 p-6 flex flex-col gap-4 bg-white dark:bg-black">
    {/* BOTÓN LIVE DEMO */}
    <a 
      href={project.demoUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-full border border-zinc-300 dark:border-zinc-800 py-3 text-xs hover:border-red-600 hover:text-red-600 transition-colors flex items-center justify-center gap-2 text-black dark:text-white group text-center"
    >
      <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" /> LIVE_DEMO.EXE
    </a>

    {/* BOTÓN REPOSITORIO */}
    <a 
      href={project.repoUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-full border border-zinc-300 dark:border-zinc-800 py-3 text-xs hover:border-red-600 hover:text-red-600 transition-colors flex items-center justify-center gap-2 text-black dark:text-white group text-center"
    >
      <Github className="w-4 h-4 group-hover:scale-110 transition-transform" /> REPOSITORY_ROOT
    </a>
  </div>

  <div className="p-4 bg-zinc-100 dark:bg-zinc-950 border border-dashed border-zinc-300 dark:border-zinc-800">
    <p className="text-[10px] text-zinc-500 leading-tight uppercase">
      NOTAS_TECNICAS: Acceso externo habilitado. Pincha en el video para modo pantalla completa.
    </p>
  </div>
</div>
          </div>
        </div>
      </section>
    </main>
  );
}