import React from 'react';
import { 
  Zap, 
  ArrowUpRight, Code2, Cpu 
} from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-olkotech-dark text-white pt-20 pb-10 overflow-hidden relative">
      {/* Efecto de luz cian en la esquina inferior */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-olkotech-primary/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Brand & Bio */}
          <div className="space-y-6">
            <h3 className="text-3xl font-black tracking-tighter">
              OLKO<span className="text-olkotech-primary">TECH</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Líderes en la integración de ecosistemas digitales y automatización industrial. Transformamos la complejidad técnica en rentabilidad empresarial.
            </p>
            <div className="flex gap-4">
              {/* <Link href="#" className="p-3 bg-white/5 rounded-xl hover:bg-olkotech-primary/20 hover:text-olkotech-primary transition-all">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="p-3 bg-white/5 rounded-xl hover:bg-olkotech-primary/20 hover:text-olkotech-primary transition-all">
                <Github size={20} />
              </Link>
              <Link href="#" className="p-3 bg-white/5 rounded-xl hover:bg-olkotech-primary/20 hover:text-olkotech-primary transition-all">
                <Twitter size={20} />
              </Link> */}
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold border-b border-white/10 pb-2">Navegación</h4>
            <ul className="space-y-3">
              {['Home', 'Soluciones Digitales', 'Ingeniería', 'ADN Olkotech', 'Contacto'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-olkotech-primary text-sm transition-colors flex items-center group">
                    <ArrowUpRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Especialidades */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold border-b border-white/10 pb-2">Especialidades</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 text-olkotech-primary"><Code2 size={16} /></div>
                <div>
                  <p className="text-sm font-semibold">Software & Apps</p>
                  <p className="text-xs text-gray-500 italic">Next.js, Supabase, Móvil</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-olkotech-primary"><Cpu size={16} /></div>
                <div>
                  <p className="text-sm font-semibold">Automatización</p>
                  <p className="text-xs text-gray-500 italic">PLC, Planos, Tableros</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-olkotech-primary"><Zap size={16} /></div>
                <div>
                  <p className="text-sm font-semibold">Power BI</p>
                  <p className="text-xs text-gray-500 italic">Análisis & Reportería</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna 4: Newsletter / Call to Action */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold border-b border-white/10 pb-2">Newsletter Técnica</h4>
            <p className="text-gray-400 text-sm italic">Recibe actualizaciones sobre innovación industrial.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-sm focus:outline-none focus:border-olkotech-primary transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-olkotech-primary text-olkotech-dark px-4 rounded-xl font-bold hover:bg-white transition-colors">
                Unirse
              </button>
            </div>
          </div>
        </div>

        {/* Barra Inferior Final */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-xs">
          <div className="flex items-center gap-2">
            <Zap size={14} className="text-olkotech-primary" fill="currentColor" />
            <span>© {currentYear} OLKOTECH. Ingeniería de Software e Industrial.</span>
          </div>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Términos de Servicio</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};