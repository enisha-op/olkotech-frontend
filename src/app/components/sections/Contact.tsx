// src/components/sections/Contact.tsx
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-olkotech-primary to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-olkotech-primary font-bold tracking-widest uppercase text-sm mb-4">04. CONEXIÓN DIRECTA</h2>
            <h3 className="text-4xl md:text-5xl font-black text-olkotech-dark tracking-tighter">
              ¿Listo para el siguiente nivel técnico?
            </h3>
            <p className="text-gray-500 mt-4 text-lg">Inicia tu transformación digital e industrial hoy mismo.</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Información de Contacto */}
            <div className="lg:col-span-2 space-y-8">
              <div className="p-8 bg-olkotech-accent rounded-[32px] border border-olkotech-primary/10">
                <h4 className="text-xl font-bold text-olkotech-dark mb-6">Datos de Contacto</h4>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-olkotech-primary shadow-sm">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Llámanos</p>
                      <p className="text-olkotech-dark font-semibold">+51 9XX XXX XXX</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-olkotech-secondary shadow-sm">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Email</p>
                      <p className="text-olkotech-dark font-semibold">proyectos@olkotech.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-olkotech-primary shadow-sm">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Ubicación</p>
                      <p className="text-olkotech-dark font-semibold">Trujillo, La Libertad, Perú</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini Mapa Simulado (Iframe de Google Maps) */}
              <div className="w-full h-64 rounded-[32px] overflow-hidden border border-gray-100 grayscale hover:grayscale-0 transition-all duration-700 shadow-xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126438.2854823908!2d-79.107055!3d-8.115989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d80e4e93f35%3A0x48d2c00ed74016!2sTrujillo!5e0!3m2!1ses!2spe!4v1711610000000!5m2!1ses!2spe" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Formulario */}
            <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-50">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-olkotech-dark ml-2">Nombre Completo</label>
                    <input type="text" placeholder="Ej. Juan Pérez" className="w-full px-6 py-4 bg-olkotech-accent rounded-2xl border border-transparent focus:border-olkotech-primary focus:bg-white outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-olkotech-dark ml-2">Correo Corporativo</label>
                    <input type="email" placeholder="juan@empresa.com" className="w-full px-6 py-4 bg-olkotech-accent rounded-2xl border border-transparent focus:border-olkotech-primary focus:bg-white outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-olkotech-dark ml-2">Servicio de Interés</label>
                  <select className="w-full px-6 py-4 bg-olkotech-accent rounded-2xl border border-transparent focus:border-olkotech-primary focus:bg-white outline-none transition-all appearance-none">
                    <option>Desarrollo de Software / Apps</option>
                    <option>Análisis de Datos / Power BI</option>
                    <option>Automatización Eléctrica / Planos</option>
                    <option>Mantenimiento Industrial</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-olkotech-dark ml-2">Detalles del Proyecto</label>
                  <textarea rows={4} placeholder="Cuéntanos brevemente qué necesitas resolver..." className="w-full px-6 py-4 bg-olkotech-accent rounded-2xl border border-transparent focus:border-olkotech-primary focus:bg-white outline-none transition-all"></textarea>
                </div>
                <button className="w-full py-5 bg-olkotech-dark text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-olkotech-primary transition-all group shadow-xl">
                  ENVIAR PROPUESTA TÉCNICA
                  <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};