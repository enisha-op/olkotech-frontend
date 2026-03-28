import React from 'react';
import { Monitor, Smartphone, Database, BarChart, Globe, Cpu } from 'lucide-react';

const digitalServices = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Sistemas & Páginas Web",
    desc: "Plataformas escalables con Next.js y arquitecturas modernas para máxima velocidad."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Apps Móviles",
    desc: "Desarrollo nativo y multiplataforma para iOS y Android con integración total."
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Power BI & Big Data",
    desc: "Transformamos datos crudos en tableros dinámicos para decisiones estratégicas."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Integraciones ERP",
    desc: "Conectamos tu software con SAP, Oracle o sistemas propios sin fricciones."
  }
];

export const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[var(--color-olkotech-primary)] font-bold tracking-widest uppercase text-sm mb-4">
              01. Soluciones Digitales
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-[var(--color-olkotech-dark)] leading-tight">
              Transformamos código en <br /> 
              <span className="text-gray-400">ventajas competitivas.</span>
            </h3>
          </div>
          <p className="text-gray-500 max-w-sm border-l-2 border-[var(--color-olkotech-primary)] pl-6">
            Desarrollamos ecosistemas digitales integrados que optimizan cada proceso de tu empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {digitalServices.map((s, i) => (
            <div key={i} className="group p-8 rounded-[32px] bg-[var(--color-olkotech-accent)] border border-transparent hover:border-[var(--color-olkotech-primary)]/30 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="mb-6 text-[var(--color-olkotech-dark)] group-hover:text-[var(--color-olkotech-primary)] transition-colors">
                {s.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-[var(--color-olkotech-dark)]">{s.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};