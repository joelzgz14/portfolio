// src/content/projects.ts
export const projectsData = [
  {
    id: "fut7stats",
    title: "FUT7STATS.OS",
    subtitle: "PLATAFORMA INTEGRAL + IA",
    description: "Ecosistema digital para la gestión profesional de equipos y ligas de fútbol amateur. Integra Inteligencia Artificial para análisis deportivo sobre una arquitectura de microservicios escalable en AWS.",
    technologies: ["JAVA", "SPRING BOOT", "DOCKER", "AWS EC2", "CADDY", "VUE.JS", "AI"],
    link: "/projects/fut7stats",
    featured: true,
    demoUrl: "https://fut7stats.vercel.app",
    repoUrl: "https://github.com/joelzgz14/Fut7Stats-Platform",
    hasVideo: true,
    status: "EN PRODUCCIÓN [STABLE]",
    systemSpecs: [
      { label: "FRONTEND", value: "Vercel Edge" },
      { label: "BACKEND", value: "AWS EC2" },
      { label: "ORQUESTACIÓN", value: "Docker Compose (4 nodos)", fullWidth: true }
    ],
    securityNote: "CORS & Terminación SSL configuradas. Gateway Activo.",
    longDescription: `## PLATAFORMA DE GESTIÓN DEPORTIVA::FUT7STATS

Fut7Stats es un ecosistema digital avanzado diseñado para revolucionar la organización de ligas y equipos de fútbol amateur. Democratiza el acceso a estadísticas y herramientas que tradicionalmente solo estaban al alcance de clubes profesionales.

### 🧠 INTELIGENCIA ARTIFICIAL Y ANALÍTICA
**Análisis de Rendimiento:** Procesamiento de datos de partidos para extraer métricas clave, evaluar el rendimiento de los jugadores y generar insights automáticos.
**Automatización:** Algoritmos diseñados para la generación dinámica de calendarios, cruces de eliminatorias y alertas del sistema.

### 🧩 ECOSISTEMA DE MICROSERVICIOS (BACKEND)
**Core Deportivo (Spring Boot):** Microservicio principal en Java que maneja la compleja lógica de negocio: gestión de plantillas, clasificaciones, sanciones y actas de partidos.
**Auth Service:** Módulo dedicado exclusivamente a la seguridad, control de roles (Administrador, Jugador, Árbitro) y emisión de tokens JWT.
**API Gateway:** Punto de entrada único que enruta las peticiones del frontend, unificando la respuesta del clúster interno.

### ☁️ INFRAESTRUCTURA Y DESPLIEGUE (DEVOPS)
**AWS EC2 & Docker Compose:** Alojamiento en la nube de Amazon aislando cada microservicio en contenedores independientes. Optimizado con Swap Memory para máxima eficiencia.
**Vue.js SPA:** Aplicación de página única reactiva, desplegada de forma desacoplada en la red perimetral (Edge) de Vercel con HTTPS nativo.
**Caddy Server:** Proxy inverso encargado de interceptar el tráfico web y gestionar la renovación automática de certificados SSL.`
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