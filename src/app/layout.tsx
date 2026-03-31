// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar"; 

export const metadata: Metadata = {
  title: "JOEL CARRERAS | Backend Engineer (Java)",
  description: "Portfolio de Joel - Desarrollador Java Senior, certificado Cambridge B2 English.",
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
        {/* ... (tus fuentes) */}
      </head>
      <body className="min-h-screen font-mono selection:bg-red-600 selection:text-white bg-zinc-50 dark:bg-black bg-dot-grid transition-colors duration-300 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}