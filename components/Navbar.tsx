'use client'
import { IconMenu2, IconMenu } from '@tabler/icons-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export const Navbar = () => {
  const items = [
    { href: '', name: 'Process' },
    { href: '', name: 'Work' },
    { href: '', name: 'FAQs' },
    { href: '', name: 'Webflow' },
    { href: '', name: 'Blog' },
    { href: '', name: 'Contact' },
  ]
  const [menu, setMenu] = useState<boolean>(false)

  const navVariants = {
    hidden: { y: -500 },
    visible: { y: 0, transition: { duration: 0.5 } },
  }

  const buttonVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  const mobileMenuVariants = {
    hidden: { y: -200, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { y: -200, opacity: 0, transition: { duration: 0.5 } },
  }

  return (
    <header className="w-full h-auto max-h-24 p-6 md:p-12">
      <div className="flex justify-between w-full items-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link href={'/'}>
            <Image src={'/Logo.svg'} alt={'Logo'} width={80} height={80} />
          </Link>
        </motion.div>
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={navVariants}
          className="hidden md:flex"
        >
          <ul className="flex flex-row gap-x-5">
            {items.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.3 },
                }}
                className="text-xl"
              >
                <Link href={item.href}>
                  <span>{item.name}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
        <motion.button
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          whileHover={{ scale: 1.1 }}
          className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded"
        >
          <Link href={'/'}>
            <span className="font-semibold">Get Started</span>
          </Link>
        </motion.button>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex md:hidden items-center"
        >
          <button onClick={() => setMenu((prev) => !prev)} className="text-xl">
            {menu ? <IconMenu /> : <IconMenu2 />}
          </button>
        </motion.div>
      </div>
      <AnimatePresence>
        {menu && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed top-0 left-0 w-full h-screen bg-black backdrop-blur-md bg-opacity-50 z-50 flex flex-col items-center justify-center"
          >
            <span className="absolute top-12 right-12 text-white text-5xl cursor-pointer">
              <button
                onClick={() => {
                  setMenu((prev) => !prev)
                }}
              >
                ✕
              </button>
            </span>
            <motion.nav
              initial={{ x: -1200 }}
              animate={{ x: 0 }}
              className="flex flex-col gap-5 text-center"
            >
              <ul className="flex flex-col gap-y-5">
                {items.map((item, index) => (
                  <motion.li
                    key={index}
                    whileTap={{
                      scale: 0.95,
                      transition: { duration: 0.3 },
                    }}
                    className="text-2xl text-white mb-4"
                  >
                    <Link href={item.href}>
                      <span className="text-5xl">{item.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
