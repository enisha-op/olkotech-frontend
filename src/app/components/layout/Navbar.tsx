"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Zap, MessageCircle } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Software', href: '/soluciones-digitales' },
    { name: 'Ingeniería', href: '/ingenieria' },
    { name: 'ADN Olkotech', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const whatsappLink = "https://wa.me/51912185258?text=%C2%A1Hola%20OLKOTECH!%20%F0%9F%9A%80%20Vengo%20de%20su%20sitio%20web.%20Me%20interesa%20potenciar%20mi%20empresa%20con%20sus%20soluciones%20de%20Innovaci%C3%B3n%2C%20Tecnolog%C3%ADa%20e%20Ingenier%C3%ADa.%20%C2%BFPodr%C3%ADan%20brindarme%20m%C3%A1s%20informaci%C3%B3n%3F";

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
          <Zap className="w-6 h-6 text-olkotech-primary fill-olkotech-primary" />
          OLKO<span className="text-olkotech-primary">TECH</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-bold transition-all hover:scale-105 ${
                pathname === link.href 
                ? 'text-olkotech-primary underline decoration-2 underline-offset-4' 
                : 'text-olkotech-dark hover:text-olkotech-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* BOTÓN WHATSAPP ESCRITORIO */}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-olkotech-dark text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-olkotech-primary hover:shadow-lg hover:shadow-olkotech-primary/20 transition-all flex items-center gap-2 active:scale-95"
          >
            <MessageCircle size={18} />
            Cotizar Proyecto
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="text-olkotech-dark p-2 hover:bg-olkotech-accent rounded-lg transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV DROPDOWN */}
      <div className={`
        md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}
      `}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-bold p-3 rounded-xl transition-colors ${
                pathname === link.href 
                ? 'bg-olkotech-primary/10 text-olkotech-primary' 
                : 'text-olkotech-dark hover:bg-olkotech-accent'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* BOTÓN WHATSAPP MÓVIL */}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-olkotech-dark text-white w-full py-4 rounded-2xl text-center font-black text-lg shadow-lg hover:bg-olkotech-primary transition-all flex items-center justify-center gap-3 active:scale-95"
          >
            <MessageCircle size={24} />
            Cotizar Proyecto
          </a>
        </div>
      </div>
    </nav>
  );
};