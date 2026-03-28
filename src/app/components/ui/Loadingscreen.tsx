"use client";
import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Forzamos el inicio del contador
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 5;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  // Efecto separado para ocultar la pantalla cuando llegue a 100
  useEffect(() => {
    if (progress === 100) {
      // 1. Iniciamos desvanecimiento
      const fadeTimeout = setTimeout(() => setIsFinished(true), 500);
      // 2. Eliminamos del DOM completamente
      const removeTimeout = setTimeout(() => setIsVisible(false), 1200);
      
      return () => {
        clearTimeout(fadeTimeout);
        clearTimeout(removeTimeout);
      };
    }
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-[#0a0f1a] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        isFinished ? "opacity-0 pointer-events-none scale-110" : "opacity-100"
      }`}
    >
      {/* LOGO */}
      <div className="relative mb-8">
        <Zap 
          size={70} 
          className={`text-[#00e5ff] fill-[#00e5ff] transition-transform ${progress < 100 ? 'animate-pulse' : 'scale-125'}`}
        />
        <div className="absolute inset-0 border-2 border-[#00e5ff]/20 rounded-full scale-[2] animate-ping"></div>
      </div>

      {/* TEXTO Y BARRA */}
      <div className="text-center space-y-5">
        <h2 className="text-white font-black tracking-[0.3em] uppercase text-[10px] opacity-80">
          Sincronizando Innovación
        </h2>
        
        <div className="flex flex-col items-center gap-3">
          {/* Barra de progreso */}
          <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 bg-[#00e5ff] transition-all duration-200 shadow-[0_0_10px_#00e5ff]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          {/* Porcentaje */}
          <span className="text-[#00e5ff] font-mono font-bold text-xs">
            {progress}%
          </span>
        </div>
      </div>

      {/* DECORACIÓN INFERIOR */}
      <div className="absolute bottom-10 w-full px-10 flex justify-between opacity-20 font-mono text-[8px] text-white uppercase tracking-widest">
        <span>Olkotech_Core_v4</span>
        <span>Trujillo_Data_Center</span>
      </div>
    </div>
  );
};