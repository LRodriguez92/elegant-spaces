"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import styles from "./Hero.module.css"

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.pageYOffset
        parallaxRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={parallaxRef}
      className={`relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat ${styles.portfolioHeroBg}`}
    >
      <div className="absolute inset-0 bg-charcoal bg-opacity-50"></div>
      <div className="relative z-10 text-center text-cream px-4">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4 animate-fade-in">
          Our Work – A Showcase of Elegance & Functionality
        </h1>
        <p className="font-sans text-xl md:text-2xl mb-8 animate-fade-in">
          Explore our curated selection of beautifully designed spaces
        </p>
        <Link
          href="/contact"
          className="bg-cream text-charcoal px-8 py-3 rounded-full text-lg font-sans transition-all hover:bg-opacity-90 inline-block"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  )
}

