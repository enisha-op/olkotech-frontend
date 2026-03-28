import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/layout/Navbar"; // Asegúrate que la ruta sea correcta
import { Footer } from "./components/layout/Footer"; // Asegúrate que la ruta sea correcta
import { LoadingScreen } from "./components/ui/Loadingscreen";

// 1. Definimos las fuentes (Esto es lo que faltaba)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OLKOTECH | Innovación, Tecnología e Ingeniería",
  description: "Soluciones de software avanzado, análisis de datos y automatización industrial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-olkotech-dark">
        {/* El Navbar va dentro del body */}
        <LoadingScreen/>
        
        <Navbar />
        
        {/* El contenido principal ocupa el espacio disponible */}
        <main className="flex-1 mt-16"> 
          {/* El mt-16 es para que el contenido no quede debajo del navbar fixed */}
          {children}
        </main>

        {/* El Footer al final */}
        <Footer />
      </body>
    </html>
  );
}