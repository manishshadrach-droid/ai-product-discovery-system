"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function MegaHero() {

  return (

    <section
      className="relative h-[92vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero/hero-new.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >

      {/* Dark cinematic overlay */}

      <div className="absolute inset-0 bg-black/45"></div>


      {/* Hero Content */}

      <div className="relative text-center max-w-3xl px-6 text-white">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl leading-tight font-serif tracking-tight mb-8"
        >
          Timeless Interior Luxury
        </motion.h1>


        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-gray-200 mb-10"
        >
          Handcrafted décor pieces designed to elevate modern interiors.
        </motion.p>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >

          <Link
            href="/shop"
            className="inline-block px-10 py-4 bg-[#C6A969] text-black tracking-wider text-sm uppercase hover:bg-[#b79a55] transition rounded-sm"
          >
            Explore Collection
          </Link>

        </motion.div>

      </div>


      {/* Subtle gradient for luxury effect */}

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent"></div>

    </section>

  )

}