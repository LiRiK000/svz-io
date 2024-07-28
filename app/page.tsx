import React from 'react'

import { Features } from '@/components/Features'
import { Gallery } from '@/components/Gallery'
import { Hero } from '@/components/Hero'

export default function page() {
  return (
    <>
      <Hero />
      <Features />
      <Gallery />
    </>
  )
}
