// src/content/projects.ts
export const projectsData = [
  {
    id: "fut7stats",
    title: "FUT7STATS.OS",
    subtitle: "PLATAFORMA INTEGRAL + IA",
    description: "Arquitectura de microservicios distribuida. Backend en AWS EC2 orquestado con Docker Compose. Frontend SPA alojado en Vercel. Seguridad perimetral y enrutamiento mediante API Gateway y Caddy Server.",
    technologies: ["JAVA", "SPRING BOOT", "DOCKER", "AWS EC2", "CADDY", "VUE.JS"],
    link: "/projects/fut7stats",
    featured: true,
    demoUrl: "https://fut7stats.vercel.app",
    repoUrl: "https://github.com/joelzgz14/Fut7Stats-Platform",
    // --- NUEVOS CAMPOS DINÁMICOS ---
    hasVideo: true,
    status: "EN PRODUCCIÓN [STABLE]",
    systemSpecs: [
      { label: "FRONTEND", value: "Vercel Edge" },
      { label: "BACKEND", value: "AWS EC2" },
      { label: "ORQUESTACIÓN", value: "Docker Compose (4 nodos)", fullWidth: true }
    ],
    securityNote: "CORS & Terminación SSL configuradas. Gateway Activo.",
    // -------------------------------
    longDescription: `## ARQUITECTURA DEL SISTEMA::FUT7STATS

Fut7Stats es una plataforma deportiva diseñada bajo una arquitectura de microservicios, priorizando la escalabilidad, la seguridad perimetral y la independencia de despliegue de cada módulo.

### 🧩 ECOSISTEMA DE MICROSERVICIOS (BACKEND)
**API Gateway:** Actúa como punto de entrada único (Single Point of Entry). Enruta las peticiones del cliente hacia los servicios internos, gestiona las políticas de CORS y oculta la topología del clúster.
**Auth Service:** Microservicio dedicado exclusivamente a la gestión de identidad, autenticación y emisión de tokens JWT seguros.
**Core Backend:** Desarrollado en Java con Spring Boot. Contiene la lógica principal de negocio, procesamiento de estadísticas y persistencia de datos.

### 🖥️ INTERFAZ DE USUARIO (FRONTEND)
**Vue.js SPA:** Aplicación de página única (Single Page Application) reactiva. Desplegada de forma totalmente desacoplada en la infraestructura Edge de Vercel con HTTPS nativo.

### ☁️ INFRAESTRUCTURA Y ORQUESTACIÓN (DEVOPS)
**Docker Compose:** Orquestación del clúster aislando en contenedores independientes el Gateway, Auth Service, Core y el Proxy Inverso.
**AWS EC2 (Ubuntu 24.04):** Alojamiento de todo el ecosistema backend en la nube de Amazon, optimizado con Swap Memory para maximizar el rendimiento en instancias t2.micro.
**Caddy Server (Reverse Proxy):** Intercepta el tráfico web entrante, gestionando automáticamente la terminación SSL (HTTPS mediante Let's Encrypt) y redirigiendo las peticiones seguras al API Gateway.`
  },
  {
    id: "portfolio",
    title: "PORTFOLIO.SYS",
    subtitle: "CLEAN ARCHITECTURE WEB",
    description: "Desarrollo de ecosistema personal siguiendo principios de ingeniería de software. Interfaz de usuario de alta fidelidad inspirada en sistemas industriales y diseño 'Nothing'.",
    technologies: ["NEXT.JS 15", "REACT 19", "TAILWIND v4", "TYPESCRIPT", "LUCIDE"],
    link: "/projects/portfolio",
    featured: true,
    demoUrl: "/", 
    repoUrl: "https://github.com/joelzgz14/mi-portfolio", 
    // --- NUEVOS CAMPOS DINÁMICOS ---
    hasVideo: false, // Este proyecto NO tiene vídeo
    status: "EN PRODUCCIÓN [V1.0]",
    systemSpecs: [
      { label: "FRAMEWORK", value: "Next.js App Router" },
      { label: "STYLING", value: "Tailwind CSS v4" },
      { label: "ANIMATIONS", value: "CSS Nativos / Custom Hooks", fullWidth: true }
    ],
    securityNote: "Arquitectura Front-End limpia. SEO y rendimiento optimizados.",
    // -------------------------------
    longDescription: `## INGENIERÍA FRONT-END::PORTFOLIO.SYS

Este proyecto ha sido concebido desde cero aplicando principios de ingeniería de software orientada a la mantenibilidad (Clean Architecture) y el rendimiento extremo. 

### ⚙️ ARQUITECTURA LIMPIA
**Separación de Responsabilidades:** En lugar de código espagueti, los datos (Capa Content), la lógica (Hooks) y la interfaz (Components) están estrictamente separados. Esto permite escalar la información sin alterar la lógica de negocio.
**SSG / SSR:** Utilización nativa de la renderización del lado del servidor proporcionada por Next.js para un tiempo de carga instantáneo (LCP óptimo).

### 🎨 DISEÑO DE ALTA FIDELIDAD (NOTHING OS)
**Tailwind CSS v4:** Implementación de la última generación de Tailwind (CSS-first) prescindiendo de archivos de configuración pesados.
**Animaciones de Hardware:** Uso exhaustivo de aceleración por GPU mediante animaciones CSS puras (Keyframes) para efectos de 'Escáner', evitando bibliotecas externas pesadas que penalicen el rendimiento.`
  }
];