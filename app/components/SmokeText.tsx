"use client"

import { useCallback } from "react"
import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import type { Engine } from "@tsparticles/engine"

export default function SmokeText() {

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (

    <div className="relative flex items-center justify-center h-[200px] w-full overflow-hidden">

      <Particles
        id="wood-dust"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          fullScreen:false,

          particles:{
            number:{ value:90 },

            color:{ value:"#C8A27A" }, // warm wood dust color

            opacity:{ value:0.45 },

            size:{ value:{ min:2, max:6 } },

            move:{
              enable:true,
              speed:0.6,
              random:true,
              outModes:"out"
            }
          },

          interactivity:{
            events:{
              onHover:{
                enable:true,
                mode:"repulse"
              }
            },

            modes:{
              repulse:{
                distance:140
              }
            }
          }
        }}
      />

      <h1 className="font-cursive brand-glow text-white text-[80px] md:text-[140px] tracking-widest relative z-10 text-center leading-none">

        WOODS
        <br/>
        & GRAINS

      </h1>

    </div>
  )
}