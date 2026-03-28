// src/components/sections/Hero.tsx
import React from 'react';
import { ChevronRight, Zap } from 'lucide-react';
import { ParticlesCanvas } from '../ui/ParticlesCanvas';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
      
      {/* Canvas de Partículas (Redes/Circuitos) */}
      <ParticlesCanvas />

      {/* Orbes de luz decorativos (Ahora con colores CSS fijos) */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[var(--color-olkotech-primary)] opacity-10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[var(--color-olkotech-secondary)] opacity-10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* BLOQUE IZQUIERDO: TEXTO COMERCIAL */}
          <div className="lg:w-3/5 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--color-olkotech-primary)]/10 to-transparent border border-[var(--color-olkotech-primary)]/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-olkotech-primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-olkotech-primary)]"></span>
              </span>
              <span className="text-sm font-bold tracking-widest text-[var(--color-olkotech-dark)]/70 uppercase">Innovation Hub 2026</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-[var(--color-olkotech-dark)] tracking-tighter leading-[0.9]">
              OLKO<span className="text-transparent bg-clip-text bg-gradient-to-br from-[var(--color-olkotech-primary)] to-[var(--color-olkotech-secondary)]">TECH</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-light text-[var(--color-olkotech-silver)] max-w-2xl leading-relaxed italic">
              Donde la <span className="text-[var(--color-olkotech-dark)] font-semibold">inteligencia digital</span> se encuentra con la <span className="text-[var(--color-olkotech-dark)] font-semibold">potencia industrial</span>.
            </h2>

            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              Expertos en arquitectura de software, analítica avanzada con Power BI y soluciones de ingeniería eléctrica de alta confiabilidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <button className="group relative px-8 py-4 bg-[var(--color-olkotech-dark)] text-white font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 shadow-2xl">
                <div className="absolute inset-0 w-0 bg-[var(--color-olkotech-primary)] transition-all duration-300 group-hover:w-full"></div>
                <span className="relative z-10 flex items-center gap-2 group-hover:text-[var(--color-olkotech-dark)]">
                  PROYECTAR AHORA <ChevronRight size={20} />
                </span>
              </button>
              
              <button className="px-8 py-4 bg-white text-[var(--color-olkotech-dark)] border-2 border-gray-100 font-bold rounded-2xl hover:bg-gray-50 transition-all flex items-center gap-2 justify-center">
                <Zap size={18} className="text-[var(--color-olkotech-primary)]" /> Ver Automatización
              </button>
            </div>
          </div>

          {/* BLOQUE DERECHO: ARTE VISUAL (Mantenemos tu composición original pero con colores) */}
          <div className="lg:w-2/5 relative">
            <div className="relative w-full aspect-square flex items-center justify-center animate-float">
              
              {/* Círculo Central Dinámico */}
              <div className="absolute inset-0 border-[1px] border-[var(--color-olkotech-primary)]/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
              
              {/* El Corazón de OLKOTECH (Ahora con sombra de color) */}
              <div className="relative z-20 w-48 h-48 bg-white/40 backdrop-blur-xl rounded-[40px] shadow-[0_20px_50px_rgba(0,229,255,0.3)] border border-white/50 flex items-center justify-center group overflow-hidden">
                <Cpu size={80} strokeWidth={1} className="text-[var(--color-olkotech-dark)] group-hover:scale-110 transition-transform duration-500" />
              </div>

              {/* Iconos Satélites (Ahora con colores fijos) */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 p-4 bg-white shadow-xl rounded-2xl border border-gray-50 hover:scale-110 transition-transform">
                <Code2 className="text-[var(--color-olkotech-primary)]" size={32} />
              </div>
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 p-4 bg-white shadow-xl rounded-2xl border border-gray-50 hover:scale-110 transition-transform">
                <Database className="text-[var(--color-olkotech-secondary)]" size={32} />
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 p-4 bg-white shadow-xl rounded-2xl border border-gray-50 hover:scale-110 transition-transform">
                <Zap className="text-yellow-400" size={32} fill="currentColor" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Necesitas importar estos iconos extras
import { Cpu, Code2, Database } from 'lucide-react';