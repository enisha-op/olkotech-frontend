import React from 'react';
import { Target, Eye, Rocket } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-olkotech-primary/20 rounded-full blur-3xl"></div>
            <h2 className="text-olkotech-primary font-bold tracking-widest uppercase text-sm mb-4">
              03. ADN OLKOTECH
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-olkotech-dark mb-6 tracking-tighter">
              Liderando la convergencia entre bits y voltios.
            </h3>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Nacimos con la visión de romper la brecha entre el software de alto nivel y la ingeniería eléctrica tradicional. En OLKOTECH, no solo creamos sistemas; diseñamos el futuro industrial.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Target className="text-olkotech-primary w-10 h-10" />
                <h4 className="font-bold text-xl">Misión</h4>
                <p className="text-gray-400 text-sm">Optimizar la rentabilidad empresarial mediante la automatización y el análisis de datos inteligente.</p>
              </div>
              <div className="space-y-3">
                <Eye className="text-olkotech-secondary w-10 h-10" />
                <h4 className="font-bold text-xl">Visión 2030</h4>
                <p className="text-gray-400 text-sm">Ser el referente regional en integración tecnológica industrial y desarrollo de software de misión crítica.</p>
              </div>
            </div>
          </div>

          <div className="bg-olkotech-accent rounded-[40px] p-10 relative overflow-hidden group">
             <div className="relative z-10">
                <h4 className="text-2xl font-black text-olkotech-dark mb-4">¿Por qué somos diferentes?</h4>
                <ul className="space-y-4">
                   {[
                     "Enfoque híbrido Software + Electricidad",
                     "Análisis predictivo con Power BI",
                     "Cumplimiento estricto de normativas técnicas",
                     "Soporte técnico de alta confiabilidad"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-olkotech-dark font-medium">
                        <div className="w-2 h-2 bg-olkotech-primary rounded-full"></div>
                        {item}
                     </li>
                   ))}
                </ul>
                <div className="mt-10 p-6 bg-white rounded-2xl shadow-xl border border-olkotech-primary/10">
                   <p className="text-olkotech-primary font-bold text-3xl italic">Innovación que se siente en la factura eléctrica y en los reportes de datos.</p>
                </div>
             </div>
             <Rocket className="absolute -bottom-10 -right-10 w-64 h-64 text-olkotech-primary/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
};