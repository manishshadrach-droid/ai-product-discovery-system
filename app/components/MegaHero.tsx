"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function MegaHero() {

  const [pos, setPos] = useState({ x: 50, y: 50 })

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {

    const rect = e.currentTarget.getBoundingClientRect()

    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setPos({ x, y })

  }

  return (

    <section
      onMouseMove={handleMove}
      className="relative h-[92vh] w-full overflow-hidden flex items-center justify-center"
    >

      {/* Background */}

      <Image
        src="/hero/hero-new.jpg"
        alt="Woods & Grains"
        fill
        priority
        sizes="100vw"
        className="object-cover hero-zoom brightness-110 contrast-125 saturate-110"
      />

      {/* Cinematic Gradient */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40"/>

      {/* Architectural Light Rays */}

      <div className="hero-light"/>

      {/* Floating Dust */}

      <div className="hero-dust">
        <span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span><span></span>
      </div>

      {/* Cursor Light */}

      <div
        className="hero-distortion"
        style={{
          "--x": `${pos.x}%`,
          "--y": `${pos.y}%`
        } as React.CSSProperties}
      />

      {/* Floating Title */}

      <motion.div
        initial={{ opacity:0, y:40 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
        className="absolute top-[26%] text-center"
      >

        <div className="hero-brand smoke-container">

          <span>W</span>
          
          <span>&</span>

          <span>G</span>
          

        </div>

        <p className="hero-subtitle">
          Premium Wood & Plywood Supply
        </p>

      </motion.div>

      {/* Bottom CTA */}

      <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:0.8 }}
        className="absolute bottom-24 w-full text-center"
      >

        <Link
          href="/products"
          className="hero-cta"
        >
          Explore Materials
        </Link>

      </motion.div>

    </section>
  )
  
}
<div className="hero-parallax">

<Image
  src="/hero/hero-new.jpg"
  alt="Woods & Grains"
  fill
  priority
  sizes="100vw"
  className="object-cover hero-zoom brightness-110 contrast-125 saturate-110"
/>

</div>