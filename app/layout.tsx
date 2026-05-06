import React from 'react'
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Montserrat, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Muzammil GraphicX – Graphic Designer Portfolio',
  description: 'Professional graphic designer creating clean, promotional, and engaging designs for brands and businesses. Specializing in social media posts, banners, product promotions, and branding visuals.',
  keywords: ['graphic designer', 'portfolio', 'social media design', 'promotional banners', 'product promotion', 'branding'],
  authors: [{ name: 'Muzammil Malik' }],
  openGraph: {
    title: 'Muzammil GraphicX – Graphic Designer Portfolio',
    description: 'Professional graphic designer creating clean, promotional, and engaging designs for brands and businesses.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muzammil GraphicX – Graphic Designer Portfolio',
    description: 'Professional graphic designer creating clean, promotional, and engaging designs for brands and businesses.',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const isProduction = process.env.NODE_ENV === 'production'
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} bg-background`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        {isProduction ? <Analytics /> : null}
      </body>
    </html>
  )
}
