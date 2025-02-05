import "./globals.css"
import { Playfair_Display, Lato } from "next/font/google"
import type React from "react"
import Navbar from "./components/Navbar"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
})

export const metadata = {
  title: "Elegant Spaces | Luxury Interior Design",
  description:
    "Transform your space with Elegant Spaces - your premier luxury interior design firm specializing in creating timeless, sophisticated interiors.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfairDisplay.variable} ${lato.variable} font-sans bg-cream text-charcoal`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

