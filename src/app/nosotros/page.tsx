import React from 'react';
import { Target, Eye, Rocket, ShieldCheck, Cpu, Globe, CheckCircle2 } from 'lucide-react';

export default function NosotrosPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO DE LA PÁGINA */}
      <section className="pt-20 pb-16 bg-olkotech-accent/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-olkotech-primary/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black text-olkotech-dark tracking-tighter mb-6">
              El ADN de <br />
              <span className="text-olkotech-primary underline decoration-olkotech-primary/20">OLKOTECH</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              No somos solo una empresa de servicios; somos un núcleo de innovación donde la precisión de la ingeniería eléctrica se fusiona con la escalabilidad del software de vanguardia.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MISIÓN Y VISIÓN (DISEÑO MODERNO) */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 rounded-[40px] bg-olkotech-dark text-white space-y-6 relative overflow-hidden group">
              <Target className="w-12 h-12 text-olkotech-primary relative z-10" />
              <h3 className="text-3xl font-bold relative z-10">Nuestra Misión</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">
                Optimizar la competitividad de nuestros clientes mediante la implementación de ecosistemas tecnológicos integrados, garantizando eficiencia energética y soluciones de software de alto impacto.
              </p>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-olkotech-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform"></div>
            </div>

            <div className="p-10 rounded-[40px] border-2 border-olkotech-accent space-y-6 hover:border-olkotech-secondary/20 transition-all">
              <Eye className="w-12 h-12 text-olkotech-secondary" />
              <h3 className="text-3xl font-bold text-olkotech-dark">Nuestra Visión</h3>
              <p className="text-gray-500 leading-relaxed">
                Convertirnos en el referente regional de la industria 4.0, siendo la primera opción para empresas que buscan transformar sus procesos críticos mediante la convergencia de bits y voltios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. METODOLOGÍAS (CONTENIDO DE RELLENO TÉCNICO) */}
      <section className="py-20 bg-olkotech-accent/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-olkotech-primary font-bold uppercase tracking-widest text-sm mb-4">¿Cómo trabajamos?</h2>
            <h3 className="text-4xl font-black text-olkotech-dark tracking-tight">Metodologías de Misión Crítica</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Digital Side */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-50 text-blue-500 rounded-2xl"><Globe /></div>
                <h4 className="text-2xl font-bold">Software: Agile & CI/CD</h4>
              </div>
              <p className="text-gray-500 mb-6">
                Adoptamos el marco de trabajo **SCRUM** para entregas iterativas y transparentes. Utilizamos pipelines de **Integración y Despliegue Continuo (CI/CD)** para asegurar que cada línea de código sea testeada antes de llegar a producción.
              </p>
              <ul className="space-y-3">
                {["Arquitecturas Cloud Native", "Seguridad por diseño", "Escalabilidad Horizontal"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Engineering Side */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-50 text-olkotech-primary rounded-2xl"><Cpu /></div>
                <h4 className="text-2xl font-bold">Ingeniería: Estándares IEEE/IEC</h4>
              </div>
              <p className="text-gray-500 mb-6">
                Nuestros proyectos eléctricos y de automatización se rigen bajo las normativas internacionales **IEC (International Electrotechnical Commission)** y **IEEE**, asegurando la protección operativa y humana en todo momento.
              </p>
              <ul className="space-y-3">
                {["Cumplimiento CNE (Código Nacional)", "Protocolos de Comisionado", "Certificación de Pozos a Tierra"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-olkotech-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. POR QUÉ NOSOTROS (POR QUÉ SON DIFERENTES) */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-olkotech-dark rounded-[60px] p-12 md:p-20 relative overflow-hidden">
            <Rocket className="absolute top-10 right-10 w-64 h-64 text-white opacity-[0.03] -rotate-12" />
            <div className="max-w-2xl relative z-10">
              <h2 className="text-olkotech-primary font-bold mb-4 italic">The Olkotech Difference</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
                Diseñamos soluciones donde <br /> otros solo ven problemas.
              </h3>
              <div className="grid sm:grid-cols-2 gap-8 text-white">
                <div>
                  <h5 className="text-olkotech-primary font-bold mb-2">Hibridación Real</h5>
                  <p className="text-gray-400 text-sm">Somos de los pocos en el mercado capaces de integrar un ERP directamente con el control de un PLC industrial.</p>
                </div>
                <div>
                  <h5 className="text-olkotech-primary font-bold mb-2">Data-Driven</h5>
                  <p className="text-gray-400 text-sm">No adivinamos. Utilizamos Power BI para que veas el rendimiento real de tu planta o sistema en tiempo real.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}