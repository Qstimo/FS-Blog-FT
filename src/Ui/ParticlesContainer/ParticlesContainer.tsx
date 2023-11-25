import React from "react";
import { Particles } from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import type { Engine } from "tsparticles-engine";
import Register from "../../Pages/Register";
import s from './ParticlesContainer.module.scss'

export class ParticlesContainer extends React.Component {
    async customInit(engine: Engine) {
        await loadLinksPreset(engine);
    }

    render() {
        const options = {
            preset: "links",
            fullScreen: {
                enable: true,
                zIndex: -1
            },
        };

        return (
            <div>
                <Particles
                    id={s.particles}
                    options={options}
                    init={this.customInit.bind(this)}
                />
                {/* Остальной контент вашего приложения */}
            </div>
        );
    }
}