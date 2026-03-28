// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        olkotech: {
          primary: "#00e5ff",    // Cian Eléctrico puro
          secondary: "#0072ff",  // Azul Profundo para degradados
          accent: "#f0f9ff",     // Fondo celeste gélido muy suave
          dark: "#0a0f1a",       // Negro azulado para textos de contraste
          silver: "#94a3b8",     // Gris industrial
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};