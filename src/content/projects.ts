// src/content/projects.ts

export const projectsData = [
  {
    id: "fut7stats", // Este ID se inyecta en la URL dinámica
    title: "FUT7STATS.OS",
    subtitle: "PLATAFORMA INTEGRAL + IA",
    description: "Arquitectura microservicios AWS. Integración IA para análisis de datos deportivos. API RESTful securizada JWT.",
    technologies: ["JAVA", "SPRING", "VUE", "AWS", "AI"],
    link: "/projects/fut7stats", // <-- Usamos la ruta dinámica real de Next.js
    demoUrl: "https://fut7stats.vercel.app",
    repoUrl: "https://github.com/joelzgz14/Fut7Stats-Platform",
    featured: true
  },
  {
    id: "portfolio", // Este ID debe coincidir con el final del link
    title: "PORTFOLIO.SYS",
    subtitle: "CLEAN ARCHITECTURE WEB",
    description: "Desarrollo de ecosistema personal siguiendo principios de ingeniería de software. Interfaz de usuario de alta fidelidad inspirada en sistemas industriales y diseño 'Nothing'.",
    technologies: ["NEXT.JS 15", "REACT 19", "TAILWIND v4", "TYPESCRIPT", "LUCIDE"],
    link: "/projects/portfolio", // <--- CAMBIADO: Ahora Next.js lo encontrará
    featured: true,
    demoUrl: "/", // Como es este mismo sitio, apunta a la home
    repoUrl: "https://github.com/joelzgz14/portfolio",
    // Podemos añadir un campo extra para la explicación larga si quieres
    longDescription: "Este proyecto ha sido diseñado bajo una arquitectura limpia (Clean Architecture), separando la capa de datos (Content), la lógica de negocio (Hooks) y la interfaz (Components). Utiliza las últimas tecnologías del ecosistema React, como el App Router de Next.js y Tailwind CSS v4 para un rendimiento óptimo."
  }
];