// src/app/contacto/page.tsx
import React from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe,  MessageSquare } from 'lucide-react';

export default function ContactoPage() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6">
        
        {/* ENCABEZADO DE PÁGINA */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-olkotech-primary font-bold tracking-widest uppercase text-sm mb-4">
            05. CONEXIÓN DIRECTA
          </h2>
          <h1 className="text-5xl md:text-7xl font-black text-olkotech-dark tracking-tighter leading-none mb-8">
            Hablemos de su <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-olkotech-primary to-olkotech-secondary">
              Próximo Proyecto.
            </span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl">
            Ya sea una integración de software compleja o un sistema de automatización industrial, nuestro equipo técnico está listo para asesorarlo.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* COLUMNA IZQUIERDA: INFO TÉCNICA (40%) */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Tarjeta de Disponibilidad */}
            <div className="p-8 bg-olkotech-dark text-white rounded-[40px] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:rotate-12 transition-transform">
                <Clock size={80} />
              </div>
              <h4 className="text-xl font-bold mb-6 relative z-10">Horario de Atención</h4>
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Lunes - Viernes</span>
                  <span className="font-mono text-olkotech-primary text-sm">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Sábados</span>
                  <span className="font-mono text-olkotech-primary text-sm">09:00 - 13:00</span>
                </div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest pt-2 font-black">Emergencias Técnicas 24/7 para clientes con contrato.</p>
              </div>
            </div>

            {/* Canales de Comunicación */}
            <div className="space-y-6">
              {[
                { icon: <Phone size={24} />, label: "Central Telefónica", val: "+51 9XX XXX XXX", color: "text-olkotech-primary" },
                { icon: <Mail size={24} />, label: "Consultas Técnicas", val: "proyectos@olkotech.com", color: "text-olkotech-secondary" },
                { icon: <MapPin size={24} />, label: "Sede Central", val: "Trujillo, La Libertad, Perú", color: "text-olkotech-primary" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-4 hover:bg-olkotech-accent/50 rounded-3xl transition-colors border border-transparent hover:border-gray-100 group">
                  <div className={`w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">{item.label}</p>
                    <p className="text-olkotech-dark font-bold text-lg">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Redes Corporativas */}
            <div className="flex gap-4 pt-4">
              <button className="flex-1 py-4 border-2 border-gray-100 rounded-2xl flex items-center justify-center gap-2 font-bold text-olkotech-dark hover:border-olkotech-primary transition-all">
                {/* <Linkedin size={20} className="text-blue-600" /> LinkedIn */}
              </button>
              <button className="flex-1 py-4 border-2 border-gray-100 rounded-2xl flex items-center justify-center gap-2 font-bold text-olkotech-dark hover:border-olkotech-primary transition-all">
                <Globe size={20} className="text-olkotech-primary" /> Web Portal
              </button>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO (60%) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-14 rounded-[50px] shadow-[0_30px_100px_rgba(0,0,0,0.06)] border border-gray-50 relative">
              <div className="absolute top-10 right-10 opacity-5">
                <MessageSquare size={100} />
              </div>
              
              <form className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-olkotech-dark/50 uppercase tracking-widest ml-1">Nombre Completo</label>
                    <input type="text" placeholder="Ej. Carlos Mendoza" className="w-full px-6 py-5 bg-olkotech-accent/50 rounded-2xl border-2 border-transparent focus:border-olkotech-primary focus:bg-white outline-none transition-all font-medium" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-olkotech-dark/50 uppercase tracking-widest ml-1">Email Corporativo</label>
                    <input type="email" placeholder="c.mendoza@empresa.com" className="w-full px-6 py-5 bg-olkotech-accent/50 rounded-2xl border-2 border-transparent focus:border-olkotech-primary focus:bg-white outline-none transition-all font-medium" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-olkotech-dark/50 uppercase tracking-widest ml-1">Área de Interés</label>
                  <select className="w-full px-6 py-5 bg-olkotech-accent/50 rounded-2xl border-2 border-transparent focus:border-olkotech-primary focus:bg-white outline-none transition-all font-bold appearance-none">
                    <option>Software & Sistemas Web</option>
                    <option>Power BI & Data Analytics</option>
                    <option>Automatización & PLC</option>
                    <option>Ingeniería Eléctrica / Planos</option>
                    <option>Mantenimiento Industrial</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-olkotech-dark/50 uppercase tracking-widest ml-1">Descripción del Desafío</label>
                  <textarea rows={5} placeholder="Describa brevemente los requerimientos técnicos de su proyecto..." className="w-full px-6 py-5 bg-olkotech-accent/50 rounded-2xl border-2 border-transparent focus:border-olkotech-primary focus:bg-white outline-none transition-all font-medium resize-none"></textarea>
                </div>

                <button className="w-full py-6 bg-olkotech-dark text-white font-black text-xl rounded-2xl flex items-center justify-center gap-4 hover:bg-olkotech-primary transition-all group shadow-2xl">
                  ENVIAR REQUERIMIENTO TÉCNICO
                  <Send size={22} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                </button>

                <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  Garantizamos confidencialidad mediante acuerdo de NDA si es requerido.
                </p>
              </form>
            </div>
          </div>

        </div>

        {/* SECCIÓN DEL MAPA (FULL WIDTH ABAJO) */}
        <div className="mt-24 w-full h-[450px] rounded-[60px] overflow-hidden shadow-2xl border-8 border-white relative group">
          <div className="absolute inset-0 bg-olkotech-dark/20 z-10 pointer-events-none group-hover:opacity-0 transition-opacity"></div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126438.28548123282!2d-79.10697925588379!3d-8.11598956627063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d80e4e95f35%3A0x6bd26957400490b3!2sTrujillo!5e0!3m2!1ses-419!2spe!4v1711600000000!5m2!1ses-419!2spe" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            className="grayscale contrast-125"
          ></iframe>
        </div>
      </div>
    </div>
  );
}