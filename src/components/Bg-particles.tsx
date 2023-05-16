import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { useCallback } from "react";
import { loadFull } from "tsparticles";


const BgParticles = () => {
    const particlesInit = useCallback(async (engine: Engine) => {


        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);


    return (
        <Particles
            className="fixed -z-10"
            id="tsparticles"
            init={particlesInit}

            options={{
                background: {
                    color: {
                        value: "#141210",
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
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 89,
                            duration: 0.4,
                        },
                    },
                },
                smooth: true,
                particles: {
                    color: {
                        value: ["#00ff00", "#ffffff"],
                    },
                    links: {
                        color: "#ffffff",
                        distance: 100,
                        enable: true,
                        opacity: 0.1,
                        width: 1,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 700,
                        },
                        value: 50,
                        limit: 200
                    },
                    opacity: {
                        random: true
                    },
                    shape: {
                        type: "circle",

                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
}


export default BgParticles;