'use client'

import { motion } from 'framer-motion'
import React from 'react'

export const Features = () => {
  const items = [
    {
      title: 'Discovery',
      desc: 'We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.',
    },
    {
      title: 'Strategy',
      desc: "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews we're here to set the stage for success.",
    },
    {
      title: 'Design',
      desc: "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or asset will be designed, reviewed, and given your stamp of approval.",
    },
    {
      title: 'Build',
      desc: "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
    },
  ]
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="features-section py-16">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex justify-items-center ml-32 max-lg:grid max-lg:grid-cols-2 max-lg:w-full max-lg:ml-0 max-lg:mx-auto max-sm:grid-cols-1"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="feature-item p-4 shadow-md rounded-md border text-center max-w-xs h-[300px]"
            >
              <h2 className="text-xl text-white font-bold mb-2">
                {item.title}
              </h2>
              <p className="text-white/80">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
