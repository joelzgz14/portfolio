// src/app/page.tsx
"use client";

import Link from 'next/link';
import { Download, ExternalLink } from 'lucide-react'; // Quité 'Database' que no se usaba
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { siteConfig } from '@/content/site';
import { experienceData } from '@/content/experience';
import { projectsData } from '@/content/projects';

// Componente Contenedor para mantener los márgenes alineados
const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-5xl mx-auto px-6 w-full">{children}</div>
);

export default function HomePage() {
  // Inicializamos las animaciones de scroll
  useScrollReveal();

  return (
    <main className="pb-24">
     {/* SECCIÓN 1: HERO */}
{/* SECCIÓN 1: HERO CON EFECTO AVATAR AUTOPLAY */}
<section className="py-24 md:py-32 border-b border-zinc-200 dark:border-zinc-900 relative reveal">
  <Container>
    <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
      
      {/* --- BLOQUE DE AVATAR: EL ESCÁNER DE REVELADO (AUTOPLAY) --- */}
      <div className="relative w-32 h-32 md:w-48 md:h-48 shrink-0">
        
        {/* Anillos de hardware externos (Sutiles y fijos) */}
        <div className="absolute inset-[-10%] border border-zinc-200 dark:border-zinc-800 rounded-full"></div>
        <div className="absolute inset-[-20%] border border-zinc-100 dark:border-zinc-900 rounded-full"></div>
        
        {/* Contenedor Principal (Máscara circular) */}
        <div className="w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-black bg-zinc-100 dark:bg-zinc-950 shadow-2xl relative z-10 flex items-center justify-center">
          
          {/* La Imagen (Aplica la animación de B/N a Color) */}
          <img 
            src={siteConfig.avatarUrl} 
            alt={siteConfig.name}
            className="w-full h-full object-cover animate-photo-reveal" 
          />
          
          {/* Capa de Rejilla Dot Matrix (Desaparece progresivamente) */}
          <div className="absolute inset-0 pointer-events-none bg-dot-grid animate-dots-fade"></div>

          {/* LA LÍNEA DE ESCÁNER (Aplica la animación de barrido) */}
          <div className="absolute top-[-100%] left-0 w-full h-[2px] bg-red-600 shadow-[0_0_15px_4px_rgba(220,38,38,0.7)] animate-scanner"></div>
        </div>

        {/* Etiqueta técnica inferior confirmando identidad (Aparece al final de la animación) */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9px] text-zinc-400 whitespace-nowrap opacity-0 animate-fade-in animation-delay-3500">
          SCAN_STATUS: OK // IDENTITY_CONFIRMED
        </div>
      </div>

      {/* --- BLOQUE DE TEXTO Y ACCIONES --- */}
      <div className="md:flex-1 text-center md:text-left pt-4">
        <div className="inline-block border border-zinc-300 dark:border-zinc-800 px-3 py-1 text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-8 uppercase tracking-widest bg-zinc-100 dark:bg-zinc-950">
          SYS.STATUS: ONLINE
        </div>
        
        <h1 className="font-dot text-6xl md:text-8xl text-black dark:text-white uppercase leading-none tracking-widest mb-6">
          {siteConfig.roleHeadline.split(' ')[0]} <br/>
          <span className="text-zinc-400 dark:text-zinc-600">
            {siteConfig.roleHeadline.split(' ').slice(1).join(' ')}
          </span>
        </h1>
        
        <p className="font-mono text-red-600 dark:text-red-500 text-sm md:text-base mb-12 uppercase tracking-tighter font-bold">
          {siteConfig.skills}
        </p>

        <div className="flex flex-wrap gap-4 font-mono text-sm uppercase justify-center md:justify-start">
          <Link href="#proyectos" className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white transition-colors border border-transparent">
            EXECUTE ./PROJECTS
          </Link>
          
          <a 
            href={siteConfig.cvUrl} 
            download="CV_Joel_Carreras.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-300 px-6 py-3 hover:border-red-600 hover:text-red-600 dark:hover:border-red-500 dark:hover:text-red-500 transition-colors flex items-center gap-2 bg-white dark:bg-transparent"
          >
            <Download className="w-4 h-4" /> DOWNLOAD_CV.PDF
          </a>
        </div>
      </div>
    </div>
  </Container>
</section>

      {/* SECCIÓN 2: PROYECTOS DESTACADOS */}
      <section id="proyectos" className="py-24 border-b border-zinc-200 dark:border-zinc-900 reveal delay-1">
        <Container>
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-dot text-4xl text-black dark:text-white uppercase tracking-widest mb-2">DIR / PROJECTS</h2>
              <p className="font-mono text-zinc-500 dark:text-zinc-400 text-sm">Mostrando ejecutables destacados.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project) => (
              <Link href={project.link} key={project.id} className="group block h-full">
                <article className="border border-zinc-300 dark:border-zinc-800 p-8 h-full bg-white dark:bg-black hover:border-red-500 dark:hover:border-red-600 transition-colors relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 left-0 w-full h-1 bg-zinc-200 dark:bg-zinc-900 group-hover:bg-red-600 transition-colors"></div>
                  
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="font-mono text-xs text-red-600 dark:text-red-500 bg-red-50 dark:bg-red-950/30 px-2 py-1 border border-red-200 dark:border-red-900/50">
                        {project.subtitle}
                      </div>
                      <ExternalLink className="text-zinc-400 dark:text-zinc-600 group-hover:text-red-500 transition-colors w-5 h-5" />
                    </div>
                    <h3 className="font-dot text-3xl text-black dark:text-white uppercase tracking-widest mb-4 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="font-mono text-xs border border-zinc-200 dark:border-zinc-800 px-2 py-1 text-zinc-500 dark:text-zinc-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* SECCIÓN 3: EXPERIENCIA (TIMELINE) */}
      <section className="py-24 reveal delay-2">
        <Container>
          <h2 className="font-dot text-4xl text-black dark:text-white uppercase tracking-widest mb-2">SYS.EXP // V.1.0</h2>
          <p className="font-mono text-zinc-500 dark:text-zinc-400 text-sm mb-16">Historial de procesos y dependencias.</p>

          <div className="space-y-12 border-l border-zinc-200 dark:border-zinc-800 ml-3">
            {experienceData.map((job) => (
              <div key={job.id} className="relative pl-8 md:pl-12 group">
                {/* El punto de la línea de tiempo */}
                <span className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-zinc-300 dark:bg-zinc-700 group-hover:bg-red-600 transition-colors"></span>
                
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                  <h3 className="font-mono font-bold text-black dark:text-white uppercase text-lg">
                    {job.role} <span className="text-red-600 dark:text-red-500 font-normal">@ {job.company}</span>
                  </h3>
                  <span className="font-mono text-zinc-500 dark:text-zinc-500 text-sm whitespace-nowrap">
                    [{job.period}]
                  </span>
                </div>
                
                <p className="font-mono text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed max-w-2xl">
                  {job.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map(tech => (
                    <span key={tech} className="font-mono text-xs text-zinc-500 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-800 px-2 py-1 bg-white dark:bg-zinc-950">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}