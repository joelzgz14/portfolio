import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Joel | Backend Engineer",
  description: "Portfolio de Joel - Desarrollador Java Senior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-red-500 selection:text-white min-h-screen flex flex-col">
        {/* El Navbar saldrá en todas las rutas automáticamente */}
        <Navbar />
        {/* Aquí se inyecta el contenido de page.tsx o de fut7stats/page.tsx */}
        <div className="flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}