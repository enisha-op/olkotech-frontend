import React from 'react';
import { 
  Zap, FileText, Settings, ShieldCheck, 
  Activity, Construction, PenTool, CheckCircle, MessageCircle 
} from 'lucide-react';

export default function IngenieriaPage() {
  const whatsappLink = "https://wa.me/51912185258?text=%C2%A1Hola%20OLKOTECH!%20%F0%9F%9A%80%20Vengo%20de%20su%20sitio%20web.%20Me%20interesa%20potenciar%20mi%20empresa%20con%20sus%20soluciones%20de%20Innovaci%C3%B3n%2C%20Tecnolog%C3%ADa%20e%20Ingenier%C3%ADa.%20%C2%BFPodr%C3%ADan%20brindarme%20m%C3%A1s%20informaci%C3%B3n%3F";

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO TÉCNICO */}
      <section className="relative pt-28 pb-20 bg-olkotech-dark text-white overflow-hidden">
        {/* Cuadrícula técnica de fondo */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: `radial-gradient(var(--color-olkotech-primary) 0.5px, transparent 0.5px)`, strokeWidth: '0.5', backgroundSize: '30px 30px' }}>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-olkotech-primary/10 border border-olkotech-primary/20 text-olkotech-primary px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6">
              INDUSTRIAL & ELECTRICAL ENGINEERING
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
              Infraestructura <br />
              <span className="text-olkotech-primary">Resiliente y Automatizada.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Diseñamos, ejecutamos y certificamos sistemas eléctricos y de control bajo normativas **IEC, IEEE y el Código Nacional de Electricidad**.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SERVICIOS DE INGENIERÍA DETALLADOS */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Tarjeta 1: Planos y Dosieres */}
            <div className="group p-10 bg-olkotech-accent/30 rounded-[40px] border border-transparent hover:border-olkotech-primary/30 transition-all">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-olkotech-primary shadow-sm mb-8 group-hover:scale-110 transition-transform">
                <FileText size={28} />
              </div>
              <h3 className="text-2xl font-bold text-olkotech-dark mb-4">Planos & Dosieres</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Elaboración técnica de planos eléctricos, mecánicos y diagramas unifilares. Entregamos dosieres técnicos completos para procesos de auditoría y municipalidades.
              </p>
              <ul className="space-y-2">
                {["Cálculos de Máxima Demanda", "Diagramas de Control", "Memoria Descriptiva"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-bold text-olkotech-dark/70">
                    <CheckCircle size={14} className="text-olkotech-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tarjeta 2: Automatización PLC */}
            <div className="group p-10 bg-olkotech-dark text-white rounded-[40px] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Settings size={120} className="animate-[spin_10s_linear_infinite]" />
              </div>
              <div className="w-14 h-14 bg-olkotech-primary rounded-2xl flex items-center justify-center text-olkotech-dark shadow-sm mb-8 relative z-10">
                <Zap size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Automatización Industrial</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 relative z-10">
                Programación de PLCs (Siemens, Allen Bradley, Delta) y sistemas HMI/SCADA para el control total de procesos industriales y líneas de producción.
              </p>
              <ul className="space-y-2 relative z-10">
                {["Lógica de Programación", "Instrumentación Industrial", "Integración de Variadores"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-bold text-olkotech-primary">
                    <CheckCircle size={14} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tarjeta 3: Puesta a Tierra */}
            <div className="group p-10 bg-olkotech-accent/30 rounded-[40px] border border-transparent hover:border-olkotech-primary/30 transition-all">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-olkotech-primary shadow-sm mb-8 group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-olkotech-dark mb-4">Protección & Tierra</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Diseño, mantenimiento e instalación de sistemas de puesta a tierra (SPAT). Mediciones de resistividad y certificación con protocolo firmado.
              </p>
              <ul className="space-y-2">
                {["Pozos a Tierra Verticales", "Protocolos de Medición", "Sistemas de Pararrayos"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-bold text-olkotech-dark/70">
                    <CheckCircle size={14} className="text-olkotech-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECCIÓN DE MANTENIMIENTO (LLENADO DE INFORMACIÓN) */}
      <section className="py-20 border-y border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-olkotech-dark tracking-tighter">
                Mantenimiento de <br /> <span className="text-olkotech-primary">Alta Confiabilidad.</span>
              </h2>
              <p className="text-gray-500">
                Evitamos paradas de planta no programadas mediante protocolos de mantenimiento preventivo y correctivo basados en la condición de los equipos.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <Activity className="text-olkotech-primary mb-2" />
                  <h4 className="font-bold text-sm">Termografía</h4>
                  <p className="text-[10px] text-gray-400 uppercase font-black">Detección Térmica</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <PenTool className="text-olkotech-primary mb-2" />
                  <h4 className="font-bold text-sm">Tableros</h4>
                  <p className="text-[10px] text-gray-400 uppercase font-black">Limpieza & Ajuste</p>
                </div>
              </div>
            </div>
            
            <div className="bg-olkotech-dark p-1 rounded-[40px]">
                <div className="bg-white p-10 rounded-[38px] border-4 border-olkotech-dark">
                    <h4 className="text-2xl font-black text-olkotech-dark mb-6 tracking-tighter uppercase">Comisionado de Sistemas</h4>
                    <p className="text-gray-500 text-sm mb-8">
                      Realizamos pruebas exhaustivas antes de la puesta en marcha para asegurar que cada componente responda según el diseño original.
                    </p>
                    <div className="space-y-3">
                        {[
                            "Pruebas de aislamiento y continuidad",
                            "Simulación de fallas en lazo de control",
                            "Calibración de protecciones eléctricas",
                            "Capacitación de personal operario"
                        ].map((text, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-sm font-medium text-olkotech-dark">
                                <div className="w-1.5 h-1.5 bg-olkotech-primary rounded-full"></div>
                                {text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION INDUSTRIAL ACTUALIZADO */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-olkotech-primary p-12 md:p-20 rounded-[60px] text-olkotech-dark text-center relative overflow-hidden group">
            <Construction className="absolute -top-10 -left-10 w-64 h-64 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
            
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 relative z-10">
              ¿Necesitas una auditoría <br /> eléctrica o industrial?
            </h2>
            
            {/* BOTÓN CON ENLACE A WHATSAPP */}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-olkotech-dark text-white px-10 py-4 rounded-2xl font-black hover:bg-white hover:text-olkotech-dark transition-all relative z-10 shadow-2xl active:scale-95"
            >
              <MessageCircle size={24} />
              SOLICITAR INSPECCIÓN TÉCNICA
            </a>
            
          </div>
        </div>
      </section>

    </div>
  );
}