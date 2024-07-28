import './globals.css'

import { Inter } from 'next/font/google'

import { Navbar } from '@/components/Navbar'

import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SVZ.IO',
  description: 'SVZ.IO',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="overflow-x-hidden">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
