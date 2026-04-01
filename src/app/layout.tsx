// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar"; 

export const metadata: Metadata = {
  title: "Joel Carreras | Backend Engineer",
  description: "Ecosistema digital y portfolio personal. Proyectos de arquitectura backend, microservicios y despliegue en nube.",
  openGraph: {
    title: "Joel Carreras | Backend.SYS",
    description: "Portfolio de ingeniería de software. Clean Architecture, AWS y microservicios.",
    url: "https://TU-DOMINIO.vercel.app", // Pon aquí tu enlace real
    siteName: "Joel Carreras",
    images: [
      {
        url: "/og-image.jpg", // Busca la imagen que acabas de guardar
        width: 1200,
        height: 630,
        alt: "Preview del portfolio de Joel Carreras",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Añadimos suppressHydrationWarning aquí
    <html lang="es" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=VT323&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen font-sans selection:bg-red-600 selection:text-white bg-zinc-50 dark:bg-black bg-dot-grid transition-colors duration-300 flex flex-col">        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}