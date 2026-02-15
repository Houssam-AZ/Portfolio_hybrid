"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const Particle = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        let isMounted = true;

        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            if (isMounted) {
                setInit(true);
            }
        });

        return () => {
            isMounted = false;
        };
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffcc00",
                },
                links: {
                    color: "#ffffff",
                    distance: 100,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                move: {
                    direction: MoveDirection.none,
                    enable: true,
                    outModes: {
                        default: OutMode.bounce,
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        width: 800,
                        height: 800,
                    },
                    value: 40,
                },
                opacity: {
                    value: 0.3,
                },
                shape: {
                    type: "star",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
                className="w-full h-full"
            />
        );
    }

    return null;
};

export default Particle;