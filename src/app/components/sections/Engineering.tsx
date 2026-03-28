import React from 'react';
import { Zap, FileText, Activity, ShieldCheck } from 'lucide-react';

export const Engineering = () => {
  return (
    <section id="engineering" className="py-24 bg-[var(--color-olkotech-dark)] text-white rounded-[60px] mx-4 my-8 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-olkotech-primary)]/10 to-transparent"></div>
      
      <div className="container mx-auto px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[var(--color-olkotech-primary)] font-bold tracking-widest uppercase text-sm mb-4">
              02. Ingeniería & Automatización
            </h2>
            <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Potencia Industrial <br /> con Precisión Técnica.
            </h3>
            
            <div className="space-y-6">
              {[
                { icon: <FileText />, t: "Planos & Dosieres", d: "Elaboración técnica bajo normativas vigentes." },
                { icon: <Zap />, t: "Automatización de Procesos", d: "Implementación de PLCs y control industrial." },
                { icon: <Activity />, t: "Análisis de Fallas", d: "Diagnóstico y soluciones de alta confiabilidad." },
                { icon: <ShieldCheck />, t: "Puesta a Tierra", d: "Diseño e instalación para protección operativa." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
                  <div className="text-[var(--color-olkotech-primary)]">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg">{item.t}</h4>
                    <p className="text-gray-400 text-sm">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-white/5 border border-white/10 rounded-[40px] flex items-center justify-center relative group">
              <Zap size={150} strokeWidth={0.5} className="text-[var(--color-olkotech-primary)] animate-pulse" />
              {/* Elementos decorativos de ingeniería */}
              <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-[var(--color-olkotech-primary)] opacity-30"></div>
              <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-[var(--color-olkotech-primary)] opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};