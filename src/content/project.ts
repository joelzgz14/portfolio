// src/content/project.ts
import { Project } from '@/types';

export const featuredProjects: Project[] = [
  {
    title: "Mi Portfolio Minimalista",
    description: "Portfolio web desarrollado desde cero aplicando Clean Architecture. Separación de datos, componentes de UI reutilizables y enrutamiento dinámico.",
    technologies: ["Next.js 16", "React", "Tailwind CSS", "TypeScript"],
    link: "https://github.com/tu-usuario/mi-portfolio",
  },
  {
    title: "Fut7Stats Platform",
    description: "Plataforma full-stack para gestión de estadísticas deportivas. Arquitectura de microservicios escalable securizada con JWT, integrando IA y desplegada en la nube.",
    technologies: ["Java", "Spring Boot", "Vue.js", "AWS", "Docker"],
    link: "/projects/fut7stats",
    videoUrl: "/videos/fut7stats-demo.mp4"
  }
];