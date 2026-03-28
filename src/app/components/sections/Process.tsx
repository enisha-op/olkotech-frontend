import { Search, Code2, Zap, BarChart3 } from 'lucide-react';

export const Process = () => {
  const steps = [
    { icon: <Search />, title: "Diagnóstico", desc: "Análisis profundo de la infraestructura actual y levantamiento de requerimientos técnicos." },
    { icon: <Code2 />, title: "Arquitectura", desc: "Diseño de soluciones híbridas (Software + Hardware) bajo estándares internacionales." },
    { icon: <Zap />, title: "Ejecución", desc: "Implementación ágil con despliegue continuo y montajes eléctricos certificados." },
    { icon: <BarChart3 />, title: "Optimización", desc: "Monitoreo de datos en tiempo real para maximizar el ROI de la inversión técnica." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-black text-olkotech-dark mb-12 text-center">Nuestro Ciclo de Innovación</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group text-center">
              <div className="w-20 h-20 bg-olkotech-accent rounded-3xl flex items-center justify-center mx-auto mb-6 text-olkotech-primary group-hover:bg-olkotech-primary group-hover:text-white transition-all duration-500 shadow-lg">
                {step.icon}
              </div>
              <h4 className="font-bold text-xl mb-3">{step.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              {i < 3 && <div className="hidden lg:block absolute top-10 -right-4 w-8 h-[2px] bg-gray-100"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};