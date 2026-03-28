// src/components/sections/ServicesGrid.tsx
import React from 'react';
import { Database, Zap, FileText, CodeXml, Layers3, Cable, Settings, BarChart3, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: CodeXml,
    title: "Desarrollo de Software a Medida",
    description: "Sistemas web, aplicaciones móviles (iOS/Android), apps de escritorio e integraciones completas para centralizar tu operación.",
    tags: ["Sistemas Integrados", "Apps Móviles", "Web Systems"],
    link: "/servicios/desarrollo-software"
  },
  {
    icon: Database,
    title: "Inteligencia de Datos & Power BI",
    description: "Análisis profundo, reportería avanzada y transformación de data cruda en visualizaciones interactivas con Power BI para decisiones estratégicas.",
    tags: ["Data Analytics", "Power BI", "Reportería"],
    link: "/servicios/data-analytics"
  },
  {
    icon: Layers3,
    title: "Integraciones ERP",
    description: "Conectamos tu software existente con los principales ERPs del mercado para un flujo de información bidireccional y automatizado.",
    tags: ["SAP", "Oracle", "Microsoft Dynamics"],
    link: "/servicios/desarrollo-software"
  },
  {
    icon: Zap,
    title: "Automatización Industrial & PLC",
    description: "Desarrollo e implementación de proyectos de automatización orientados a optimizar procesos industriales y maximizar la rentabilidad.",
    tags: ["Procesos Industriales", "Optimización", "Rentabilidad"],
    link: "/servicios/automatizacion-industrial"
  },
  {
    icon: FileText,
    title: "Ingeniería Eléctrica y Planos",
    description: "Levantamiento, elaboración de planos eléctricos/mecánicos y dosieres técnicos completos cumpliendo normativas vigentes.",
    tags: ["Planos Eléctricos", "Dosieres Técnicos", "Normativas"],
    link: "/servicios/automatizacion-industrial"
  },
  {
    icon: Settings,
    title: "Análisis de Fallas & Soporte",
    description: "Diagnóstico técnico de sistemas eléctricos, mecánicos y de control. Proponemos soluciones de alta confiabilidad.",
    tags: ["Análisis de Fallas", "Soluciones Técnicas", "Confiabilidad"],
    link: "/servicios/automatizacion-industrial"
  },
  {
    icon: Cable,
    title: "Sistemas de Puesta a Tierra",
    description: "Diseño e instalación profesional de sistemas de puesta a tierra, garantizando protección operativa y seguridad.",
    tags: ["Protección Operativa", "Seguridad", "Instalación"],
    link: "/servicios/automatizacion-industrial"
  },
    {
    icon: BarChart3,
    title: "Comisionado & Mantenimiento",
    description: "Pruebas de operatividad en nuevos sistemas y ejecución de mantenimientos preventivos/correctivos en equipos e instalaciones.",
    tags: ["Pruebas de Comisionado", "Mantenimiento Preventivo", "Correctivo"],
    link: "/servicios/automatizacion-industrial"
  },
];

export const ServicesGrid = () => {
  return (
    <section className="bg-olkotech-light py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
            <div className="text-olkotech-brand font-semibold uppercase tracking-widest text-sm">Nuestro Portafolio</div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-olkotech-dark">
                Soluciones Integrales para la <br /> Transformación Digital e Industrial
            </h2>
            <p className="text-lg text-olkotech-gray leading-relaxed">
                Combinamos nuestra experiencia en Bits (Software) y Átomos (Electricidad) para entregar resultados medibles que impulsan tu negocio.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-olkotech-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-olkotech-brand/20 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="p-4 bg-olkotech-brand/10 rounded-2xl inline-block text-olkotech-brand mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-olkotech-dark mb-3">
                    {service.title}
                </h3>
                <p className="text-olkotech-gray text-base leading-relaxed mb-6">
                    {service.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map(tag => (
                        <span key={tag} className="bg-olkotech-light text-olkotech-dark text-xs font-medium px-3 py-1 rounded-full border border-gray-200">
                            {tag}
                        </span>
                    ))}
                </div>
              </div>

              <Link href={service.link} className="inline-flex items-center gap-2 text-olkotech-brand font-semibold group/link">
                Conocer más detalles
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
            <Link href="/contacto" className="inline-flex items-center justify-center gap-2 bg-olkotech-dark text-white font-bold px-10 py-4 rounded-xl hover:bg-olkotech-brand transition-all duration-300 shadow-lg text-lg">
                Hablemos de tu Proyecto Industrial o Digital
                <Zap className="w-5 h-5 text-olkotech-brand" />
            </Link>
        </div>

      </div>
    </section>
  );
};