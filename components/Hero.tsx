'use client'

import { motion } from 'framer-motion'
import React from 'react'

export const Hero = () => {
  return (
    <section className="w-screen h-dvh bg-[url('/svg.png')] bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white/5 backdrop-blur-lg bg-opacity-50 p-10 rounded-2xl text-white text-center max-w-4xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-7xl font-bold mb-6"
        >
          We’ll create an award winning website for you through our carefully
          crafted process.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl mb-8 delay-2"
        >
          Making meaningful experiences
        </motion.p>
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
            backgroundColor: 'transparent',
            boxShadow: '0 0 2px 2px rgba(255, 255, 255, .1)',
            textShadow: '0 0 1px rgba(255, 255, 255, 2)',
          }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-transparent via-black to-transparent"
        >
          <span className="text-white font-semibold p-2">Get Started</span>
        </motion.button>
      </motion.div>
    </section>
  )
}
