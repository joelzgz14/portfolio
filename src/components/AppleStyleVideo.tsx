"use client"; // Necesario para manejar clics y referencias en el DOM

import React, { useRef } from 'react';

interface AppleStyleVideoProps {
  src: string;
}

export function AppleStyleVideo({ src }: AppleStyleVideoProps) {
  // Creamos una referencia para acceder directamente al elemento <video>
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleToggleFullScreen = () => {
    if (videoRef.current) {
      // Intentamos activar el modo pantalla completa nativo del navegador
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) {
        // Soporte para Safari antiguo/iOS
        (videoRef.current as any).webkitRequestFullscreen();
      }
    }
  };

  return (
    <div
      onClick={handleToggleFullScreen}
      className="relative aspect-video rounded-2xl overflow-hidden shadow-sm border border-zinc-100 bg-zinc-50 cursor-pointer group"
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline // Mantiene el video integrado hasta que el usuario decida ampliarlo
        className="w-full h-full object-cover"
      >
        Tu navegador no soporta videos.
      </video>

      {/* Capa visual de hover para indicar que es interactivo */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
        <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-bold bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm transition-opacity">
          Click para pantalla completa
        </span>
      </div>
    </div>
  );
}