// src/app/projects/[id]/page.tsx
"use client";

import React, { useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Database, ShieldCheck, Server, VideoOff } from 'lucide-react'; 
import { projectsData } from '@/content/projects';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const MarkdownRenderer = ({ content }: { content: string }) => {
  const parseContent = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.startsWith('## ')) {
        return <h2 key={index} className="font-dot text-2xl text-red-600 dark:text-red-500 mt-12 mb-6 uppercase tracking-widest border-b border-zinc-200 dark:border-zinc-900 pb-2">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="font-mono text-lg text-black dark:text-white mt-8 mb-4 uppercase font-bold flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
          {line.replace('### ', '')}
        </h3>;
      }
      const boldMatch = line.match(/^\*\*(.*?)\*\*(.*)/);
      if (boldMatch) {
        return <p key={index} className="font-mono text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
          <strong className="text-black dark:text-white uppercase tracking-tight">{boldMatch[1]}</strong>{boldMatch[2]}
        </p>;
      }
      if (line.trim() === '') {
        return <div key={index} className="h-2"></div>;
      }
      return <p key={index} className="font-mono text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">{line}</p>;
    });
  };

  return <div className="prose prose-sm dark:prose-invert max-w-none">{parseContent(content)}</div>;
};

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id as string;
  useScrollReveal();

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) { 
        (videoRef.current as any).webkitRequestFullscreen();
      } else if ((videoRef.current as any).msRequestFullscreen) { 
        (videoRef.current as any).msRequestFullscreen();
      }
    }
  };

  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-red-600 uppercase bg-zinc-50 dark:bg-black">
        Error 404: Módulo de proyecto no encontrado.
      </div>
    );
  }

  return (
    <main className="min-h-screen pb-24 bg-zinc-50 dark:bg-black bg-dot-grid transition-colors duration-300">
      
      {/* CABECERA */}
      <section className="py-24 border-b border-zinc-200 dark:border-zinc-900 reveal relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 z-10 relative">
          <Link href="/#proyectos" className="inline-flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-red-600 dark:hover:text-red-500 transition-colors mb-12 uppercase">
            <ArrowLeft className="w-4 h-4" /> RETORNAR AL DIRECTORIO
          </Link>
          
          <div className="font-mono text-xs text-red-600 dark:text-red-500 bg-red-50 dark:bg-red-950/30 px-3 py-1 border border-red-200 dark:border-red-900/50 inline-block mb-6">
            {project.subtitle}
          </div>
          
          <h1 className="font-dot text-6xl md:text-8xl text-black dark:text-white uppercase tracking-widest mb-8 leading-none">
            {project.title}
          </h1>
          
          <p className="font-mono text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-12">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map(tech => (
              <span key={tech} className="font-mono text-sm border border-zinc-300 dark:border-zinc-800 px-4 py-2 text-black dark:text-white bg-white dark:bg-zinc-900 shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-950 opacity-50 z-0"></div>
      </section>

      {/* ZONA INMERSIVA */}
      <section className="py-24 reveal delay-1">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* COLUMNA PRINCIPAL: VIDEO Y ARQUITECTURA */}
            <div className="col-span-2 space-y-16">
              
              {/* COMPONENTE MULTIMEDIA (DINÁMICO) */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                
                <div className="relative border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-black rounded-sm overflow-hidden shadow-2xl">
                  <div className="h-7 border-b border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950 flex items-center px-3 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800"></div>
                    <span className="ml-2 font-mono text-[10px] text-zinc-400 uppercase tracking-tighter">
                      terminal.exe // preview_{project.id}.mp4 {project.hasVideo && "[PINCHAR PARA EXPANDIR]"}
                    </span>
                  </div>

                  <div className="relative aspect-video bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center">
                    
                    {/* RENDERIZADO CONDICIONAL: ¿Hay vídeo? */}
                    {project.hasVideo ? (
                      <video 
                        ref={videoRef}
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        onClick={handleVideoClick}
                        className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000 cursor-pointer"
                      >
                        <source src={`/videos/${project.id}-demo.mp4`} type="video/mp4" />
                      </video>
                    ) : (
                      /* PLACEHOLDER SIN SEÑAL */
                      <div className="w-full h-full flex flex-col items-center justify-center m-8 border border-dashed border-zinc-300 dark:border-zinc-800 bg-white/50 dark:bg-black/50 z-10">
                        <VideoOff className="w-8 h-8 text-zinc-300 dark:text-zinc-700 mb-4" />
                        <span className="font-mono text-zinc-400 dark:text-zinc-500 text-sm tracking-widest uppercase mb-1">
                          [ SEÑAL DE VÍDEO NO DETECTADA ]
                        </span>
                        <span className="font-mono text-zinc-300 dark:text-zinc-700 text-[10px] tracking-tighter uppercase">
                          RENDERIZADO_MULTIMEDIA_OFFLINE
                        </span>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 pointer-events-none bg-dot-grid opacity-[0.05] dark:opacity-[0.08]"></div>
                  </div>
                </div>
              </div>

              {/* LOG DE ARQUITECTURA */}
              {project.longDescription && (
                <div className="p-8 border-l-2 border-red-600 border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-black/50 backdrop-blur-sm relative overflow-hidden reveal delay-2 shadow-xl">
                  <div className="absolute inset-0 bg-dot-grid opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>
                  <MarkdownRenderer content={project.longDescription} />
                </div>
              )}
            </div>
            
            {/* SIDEBAR TÉCNICO (DINÁMICO) */}
            <div className="space-y-8 font-mono sticky top-24 self-start">
              
              <div className="border border-zinc-200 dark:border-zinc-900 p-6 bg-white dark:bg-black shadow-lg">
                <h3 className="text-zinc-500 mb-4 text-[10px] uppercase tracking-widest flex items-center gap-2">
                  <Database className="w-3.5 h-3.5 shrink-0" /> Estado del Sistema
                </h3>
                <div className="flex items-center gap-2 text-sm text-black dark:text-white">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse shrink-0"></span>
                  {project.status}
                </div>
              </div>

              <div className="border border-zinc-200 dark:border-zinc-900 p-6 bg-white dark:bg-black shadow-lg space-y-6">
                <h3 className="text-zinc-500 text-[10px] uppercase tracking-widest flex items-center gap-2">
                  <Server className="w-3.5 h-3.5 shrink-0" /> Especificaciones
                </h3>
                <div className="grid grid-cols-2 gap-4 text-xs text-zinc-700 dark:text-zinc-300">
                  {/* Bucle para mostrar los specs del proyecto */}
                  {project.systemSpecs?.map((spec, idx) => (
                    <div key={idx} className={`border border-dashed border-zinc-200 dark:border-zinc-800 p-3 ${spec.fullWidth ? 'col-span-2' : ''}`}>
                      <span className="text-zinc-400 block mb-1 uppercase text-[10px] tracking-wider">{spec.label}</span>
                      {spec.value}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border border-zinc-200 dark:border-zinc-900 p-6 flex flex-col gap-4 bg-white dark:bg-black shadow-lg">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="w-full border border-zinc-300 dark:border-zinc-800 py-3 text-xs hover:border-red-600 hover:text-red-600 transition-colors flex items-center justify-center gap-2 text-black dark:text-white group text-center bg-zinc-50 dark:bg-zinc-950">
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" /> LIVE_DEMO.EXE
                </a>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="w-full border border-zinc-300 dark:border-zinc-800 py-3 text-xs hover:border-red-600 hover:text-red-600 transition-colors flex items-center justify-center gap-2 text-black dark:text-white group text-center bg-zinc-50 dark:bg-zinc-950">
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" /> REPOSITORY_ROOT
                </a>
              </div>

              <div className="p-4 bg-zinc-100 dark:bg-zinc-950 border border-dashed border-zinc-300 dark:border-zinc-800 shadow-inner">
                <p className="text-[10px] text-zinc-500 leading-tight uppercase flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{project.securityNote}</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}