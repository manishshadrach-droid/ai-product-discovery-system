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

    <div className="absolute inset-0 pointer-events-none">

      <Particles
        id="wood-dust"
        particlesInit={particlesInit}
        className="absolute inset-0"
        options={{
          fullScreen:false,

          particles:{
            number:{ value:80 },

            color:{ value:"#C8A27A" },

            opacity:{ value:0.45 },

            size:{
              value:{ min:2, max:5 }
            },

            move:{
              enable:true,
              speed:0.6,
              random:true,
              outModes:{
                default:"out"
              }
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
                distance:120
              }
            }
          }

        }}
      />

    </div>

  )

}