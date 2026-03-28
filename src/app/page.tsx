// src/app/page.tsx

import { Hero } from './components/services/Hero';
// Importa las otras secciones cuando las crees:
 import { Solutions } from './components/sections/Solutions';
 import { Engineering } from './components/sections/Engineering';
 import { About } from './components/sections/About';
 import { Contact } from './components/sections/Contact';


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Navbar */}
      

      {/* 1. Home (El Impacto): Con Partículas */}
      <Hero />

      {/* 2. Soluciones Digitales */}
      <Solutions />

      {/* 3. Ingeniería & Automatización */}
      <Engineering />

      {/* 4. ADN Olkotech */}
      <About />

      {/* 5. Contacto */}
      <Contact />

      {/* Footer */}
    

    </main>
  );
}