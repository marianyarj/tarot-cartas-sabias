import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar";
import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Layout() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
    }, []);

    const options = useMemo(() => ({
        particles: {
            number: {
                value: 300,
                density: { enable: true, value_area: 1200 }
            },
            shape: { type: ["circle", "star"] },
            color: { value: ["#FFE5B5", "#B3773F"] },
            size: { value: { min: 1, max: 4 } },
            opacity: { value: { min: 0.2, max: 0.9 } },
            move: {
                enable: true,
                speed: 0.5,
                random: true,
                straight: false,
                out_mode: "out",
            }
        },
        interactivity: {
            events: {
                onHover: { enable: true, mode: "attract" },
                onClick: { enable: false }
            },
            modes: {
                distance: 3, duration: 0.1
            }

        },
        retina_detect: true
    }), []);

    if (!init) return null;

    return (
        <>
            <Particles className="fixed top-0 left-0 h-screen -z-10" options={options} />
            <div className="relative z-10 grid grid-rows-[auto_1fr_auto] min-h-screen w-full justify-items-stretch">
                <NavBar />
                <Outlet />
                <FooterBar />
            </div>
        </>
    )
}

export default Layout