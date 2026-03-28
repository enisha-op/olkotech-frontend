import React from 'react';
import { 
  Code2, Smartphone, BarChart3, Database, 
  Layers, Globe, ShieldCheck, Box, ArrowRight, MessageCircle 
} from 'lucide-react';

export default function SolucionesDigitalesPage() {
  const whatsappLink = "https://wa.me/51912185258?text=%C2%A1Hola%20OLKOTECH!%20%F0%9F%9A%80%20Vengo%20de%20su%20sitio%20web.%20Me%20interesa%20potenciar%20mi%20empresa%20con%20sus%20soluciones%20de%20Innovaci%C3%B3n%2C%20Tecnolog%C3%ADa%20e%20Ingenier%C3%ADa.%20%C2%BFPodr%C3%ADan%20brindarme%20m%C3%A1s%20informaci%C3%B3n%3F";

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO DIGITAL */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-olkotech-accent/50 to-white">
        <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black uppercase tracking-widest">
                High-Performance Software
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-olkotech-dark tracking-tighter leading-[0.85]">
                Código <br />
                <span className="text-olkotech-primary">Inteligente.</span>
              </h1>
              <p className="text-xl text-gray-500 max-w-xl leading-relaxed">
                Desarrollamos ecosistemas digitales escalables. Desde aplicaciones móviles de alto rendimiento hasta arquitecturas en la nube para el análisis masivo de datos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  className="bg-olkotech-dark text-white px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-olkotech-primary transition-all shadow-xl active:scale-95"
                >
                  <MessageCircle size={20} />
                  INICIAR PROYECTO
                </a>
              </div>
            </div>
            
            {/* Visual Abstracto de Datos */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="w-full max-w-[450px] aspect-square bg-olkotech-dark rounded-[60px] p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-olkotech-primary/20 to-transparent opacity-50"></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <Box className="text-olkotech-primary w-12 h-12" />
                    <div className="text-right">
                      <p className="text-[10px] text-gray-400 uppercase font-black">System Architecture</p>
                      <p className="text-white font-mono text-xs">v4.0.2-stable</p>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <p className="text-olkotech-primary font-mono text-sm leading-none">&gt; data_transform_init()</p>
                    <p className="text-white/60 font-mono text-xs mt-2">PowerBI.connect(ERP_Database)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE DIGITAL SERVICES */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Desarrollo Web & Sistemas */}
            <div className="p-8 rounded-[40px] hover:bg-olkotech-accent/30 transition-colors border border-transparent hover:border-gray-100 group">
              <Globe className="text-olkotech-primary w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold text-olkotech-dark mb-4">Sistemas Web & Desktop</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Desarrollamos plataformas web de alta disponibilidad y aplicaciones de escritorio para la gestión operativa interna de tu empresa.
              </p>
              <a href={whatsappLink} target="_blank" className="text-olkotech-primary font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Consultar <ArrowRight size={16} />
              </a>
            </div>

            {/* Apps Móviles */}
            <div className="p-8 rounded-[40px] hover:bg-olkotech-accent/30 transition-colors border border-transparent hover:border-gray-100 group">
              <Smartphone className="text-olkotech-primary w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold text-olkotech-dark mb-4">Aplicaciones Móviles</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Soluciones móviles nativas e híbridas para iOS y Android. Enfocadas en UX/UI intuitivo y rendimiento excepcional.
              </p>
              <a href={whatsappLink} target="_blank" className="text-olkotech-primary font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Consultar <ArrowRight size={16} />
              </a>
            </div>

            {/* Power BI & Data */}
            <div className="p-10 bg-olkotech-dark text-white rounded-[40px] shadow-2xl lg:translate-y-[-20px] relative overflow-hidden group">
              <BarChart3 className="text-olkotech-primary w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Power BI & Analytics</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Extraemos información valiosa de tus datos. Transformamos bases de datos complejas en reportes visuales e interactivos para decisiones críticas.
              </p>
              <a href={whatsappLink} target="_blank" className="flex items-center gap-2 text-olkotech-primary font-bold text-sm">
                Optimizar mi Data <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 3. INTEGRACIÓN E INGENIERÍA DE DATOS */}
      <section className="py-24 bg-gray-50/50 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
                    <Layers className="text-olkotech-primary" />
                    <h5 className="font-bold text-sm">Integraciones ERP</h5>
                  </div>
                  <div className="h-32 bg-olkotech-primary rounded-3xl p-6 flex items-center justify-center text-olkotech-dark font-black text-xl">
                    API-FIRST
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="h-32 bg-olkotech-dark rounded-3xl p-6 flex items-center justify-center text-white font-black text-xl">
                    AWS/AZURE
                  </div>
                  <div className="h-48 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
                    <ShieldCheck className="text-olkotech-secondary" />
                    <h5 className="font-bold text-sm">Ciberseguridad</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-olkotech-primary font-bold uppercase tracking-widest text-sm">Data Transformation</h2>
              <h3 className="text-4xl md:text-5xl font-black text-olkotech-dark tracking-tighter leading-tight">
                Hacemos que tus datos <br /> hablen por ti.
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                No solo recolectamos información. Aplicamos procesos de ETL (Extracción, Transformación y Carga) para asegurar que la reportería sea veraz.
              </p>
              <a 
                href={whatsappLink} 
                target="_blank"
                className="inline-flex items-center gap-3 bg-olkotech-dark text-white px-8 py-4 rounded-2xl font-bold hover:bg-olkotech-primary transition-all active:scale-95"
              >
                HABLAR CON UN ESPECIALISTA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA DIGITAL */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-7xl font-black text-olkotech-dark tracking-tighter leading-none">
              ¿Listo para automatizar <br /> tu flujo de información?
            </h2>
            <a 
              href={whatsappLink}
              target="_blank"
              className="inline-block bg-olkotech-dark text-white px-12 py-5 rounded-[20px] font-black text-xl hover:bg-olkotech-primary transition-all hover:scale-105 shadow-2xl active:scale-95"
            >
              INICIAR DESARROLLO AHORA
            </a>
            <p className="text-gray-400 font-mono text-xs uppercase tracking-widest">
              Available for custom software & BI integrations 2026
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}