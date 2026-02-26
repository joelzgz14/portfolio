import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Download } from 'lucide-react'; // Añadimos Download

const PORTFOLIO_DATA = {
  personal: {
    name: "Joel",
    role: "Desarrollador Java Senior",
    description: "Especialista en backend adentrándose en el frontend moderno. Construyo software robusto, escalable y con arquitectura limpia.",
    email: "tu-email@ejemplo.com",
    github: "https://github.com/tu-usuario",
    linkedin: "https://linkedin.com/in/tu-perfil",
    // Asegúrate de tener un avatar.jpg y un cv.pdf en tu carpeta /public
    avatarUrl: "/avatar.jpg", 
    cvUrl: "/cv.pdf"
  },
  experience: [
    {
      period: "2020 — Presente",
      role: "Desarrollador Java Senior",
      company: "Tu Empresa Actual",
      description: "Diseño y desarrollo de microservicios, optimización de bases de datos y arquitectura de sistemas críticos de alta disponibilidad.",
      technologies: ["Java", "Spring Boot", "Microservicios", "Docker"]
    },
    {
      period: "2017 — 2020",
      role: "Desarrollador Backend",
      company: "Empresa Anterior",
      description: "Mantenimiento de aplicaciones legacy, refactorización de código e integración de APIs de terceros.",
      technologies: ["Java", "SQL", "REST APIs"]
    }
  ],
  projects: [
    {
      title: "Mi Nuevo Portfolio",
      description: "Portfolio minimalista creado para aprender el ecosistema moderno de JavaScript, aplicando buenas prácticas de UI/UX.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      link: "#"
    },
    {
      title: "API de Gestión",
      description: "Sistema de gestión de inventarios con arquitectura basada en eventos, capaz de procesar miles de transacciones por segundo.",
      technologies: ["Java", "Kafka", "PostgreSQL"],
      link: "#"
    }
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-cyan-500 selection:text-white flex flex-col">
      
      {/* HEADER */}
      <header className="max-w-4xl mx-auto w-full py-8 px-6 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tighter">{PORTFOLIO_DATA.personal.name}<span className="text-cyan-400">.</span></div>
        <nav className="flex gap-6 text-sm font-medium text-zinc-400">
          <a href="#experiencia" className="hover:text-white transition-colors">Experiencia</a>
          <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
        </nav>
      </header>

      {/* MAIN */}
      <main className="max-w-4xl mx-auto w-full px-6 mt-12 md:mt-20 space-y-32 flex-grow">
        
        {/* SECCIÓN: HERO (Ahora con Avatar y CV) */}
        <section className="space-y-8 animate-fade-in flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10">
          <div className="space-y-6 md:w-2/3">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hola, soy <span className="text-cyan-400">{PORTFOLIO_DATA.personal.name}</span>.
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-xl">
              {PORTFOLIO_DATA.personal.description}
            </p>
            
            {/* Botones Sociales y CV */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href={PORTFOLIO_DATA.personal.cvUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-zinc-200 transition-colors">
                <Download size={18} /> Descargar CV
              </a>
              <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="flex items-center gap-2 border border-zinc-700 px-6 py-2 rounded-full text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors">
                <Mail size={18} /> Contacto
              </a>
              <div className="flex gap-4 items-center ml-2">
                <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Avatar Image */}
          <div className="md:w-1/3 flex justify-start md:justify-end">
            <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-zinc-800 ring-4 ring-zinc-950">
              {/* Nota: En desarrollo, si no tienes avatar.jpg, usa un div gris estático o pon la imagen */}
              <img 
                src={PORTFOLIO_DATA.personal.avatarUrl} 
                alt={`Avatar de ${PORTFOLIO_DATA.personal.name}`} 
                className="object-cover w-full h-full bg-zinc-800"
                // Reemplazamos <Image> nativo temporalmente para evitar errores si no has puesto la foto aún
              />
            </div>
          </div>
        </section>

        {/* SECCIÓN: EXPERIENCIA */}
        <section id="experiencia" className="space-y-8">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-6">Experiencia</h2>
          <div className="space-y-12">
            {PORTFOLIO_DATA.experience.map((job, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 group">
                <span className="text-zinc-500 w-32 shrink-0 pt-1 text-sm font-medium">{job.period}</span>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-cyan-400 transition-colors">
                    {job.role} <span className="text-zinc-500 font-normal">en {job.company}</span>
                  </h3>
                  <p className="text-zinc-400 mt-2 leading-relaxed">{job.description}</p>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {job.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs font-medium bg-zinc-900 text-cyan-400 px-3 py-1 rounded-full border border-zinc-800/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN: PROYECTOS */}
        <section id="proyectos" className="space-y-8 pb-20">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-6">Proyectos Destacados</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.projects.map((project, index) => (
              <a href={project.link} key={index} target="_blank" rel="noreferrer" className="block group h-full">
                <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-2xl h-full group-hover:border-zinc-700 group-hover:bg-zinc-900/50 transition-all cursor-pointer flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-zinc-100 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-zinc-400 mb-6 text-sm leading-relaxed flex-grow">{project.description}</p>
                  <div className="flex gap-2 flex-wrap mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-zinc-800/50 text-zinc-300 px-3 py-1 rounded-full border border-zinc-700/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-zinc-900 py-8 mt-auto">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. Construido con Next.js & Tailwind.
          </p>
          <div className="flex gap-4 text-zinc-500">
            <a href={PORTFOLIO_DATA.personal.github} className="hover:text-white transition-colors text-sm">GitHub</a>
            <a href={PORTFOLIO_DATA.personal.linkedin} className="hover:text-white transition-colors text-sm">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}