// src/components/ui/ParticlesCanvas.tsx
"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; // loads tsparticles
import type { Container, Engine } from "@tsparticles/engine";

export const ParticlesCanvas = () => {
    const [ init, setInit ] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        // console.log(container);
    };

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            className="absolute inset-0 z-0 opacity-30" // Sutil y detrás del texto
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: { enable: true, mode: "push" },
                        onHover: { enable: true, mode: "grab" }, // Efecto de "agarrar" redes
                        resize: { enable: true },
                    },
                    modes: {
                        grab: { distance: 140, links: { opacity: 0.5 } },
                        push: { quantity: 4 },
                    },
                },
                particles: {
                    color: { value: "#00e5ff" }, // Color Cian de OLKOTECH
                    links: {
                        color: "#00e5ff",
                        distance: 150,
                        enable: true,
                        opacity: 0.3,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: { default: "bounce" },
                        random: false,
                        speed: 1, // Movimiento lento y elegante
                        straight: false,
                    },
                    number: {
                        density: { enable: true },
                        value: 80, // Cantidad de puntos
                    },
                    opacity: { value: 0.5 },
                    shape: { type: "circle" },
                    size: { value: { min: 1, max: 3 } },
                },
                detectRetina: true,
            }}
        />
    );
};