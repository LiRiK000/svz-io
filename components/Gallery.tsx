'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export const Gallery = () => {
  const data = [
    {
      src: '/image1.png',
      alt: 'Image 1',
      title: 'Image 1',
      desc: 'Description 1',
    },
    {
      src: '/image2.png',
      alt: 'Image 2',
      title: 'Image 2',
      desc: 'Description 2',
    },
    {
      src: '/image3.png',
      alt: 'Image 3',
      title: 'Image 3',
      desc: 'Description 3',
    },
    {
      src: '/image4.png',
      alt: 'Image 4',
      title: 'Image 4',
      desc: 'Description 4',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        once: true,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      className="w-full h-full grid justify-items-center ml-24 mt-12 grid-cols-2 gap-4 overflow-hidden"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        variants={containerVariants}
        className="flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="mb-16">
          <Image src={data[0].src} alt={data[0].alt} width={500} height={300} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Image src={data[2].src} alt={data[2].alt} width={500} height={300} />
        </motion.div>
      </motion.div>
      <motion.div
        variants={containerVariants}
        className="flex flex-col items-center mt-16"
      >
        <motion.div variants={itemVariants} className="mb-16">
          <Image src={data[1].src} alt={data[1].alt} width={500} height={300} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Image src={data[3].src} alt={data[3].alt} width={500} height={300} />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
