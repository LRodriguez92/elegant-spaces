"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const scrollToContent = () => {
    const heroSection = document.querySelector('section')
    if (heroSection) {
      const nextSection = heroSection.nextElementSibling as HTMLElement
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="/images/heroes/hero-mobile.webp"
        />
        <Image
          src="/images/heroes/hero.webp"
          alt="Elegant interior design showcase"
          fill
          className="object-cover"
          priority
        />
      </picture>
      <div className="absolute inset-0 bg-charcoal bg-opacity-50"></div>
      <div className="relative z-10 text-center text-cream px-4">
        <h1 className="font-serif text-5xl md:text-7xl mb-8">Crafting Stunning Interiors for Modern Living</h1>
        <Link
          href="/contact"
          className="bg-charcoal text-cream px-8 py-3 rounded-full text-lg font-sans transition-all hover:bg-opacity-90 inline-block mb-12"
          aria-label="Book a design consultation"
        >
          Book a Consultation
        </Link>
        <div className="absolute bottom-[-5rem] w-full flex justify-center">
          <button
            onClick={scrollToContent}
            className="bg-charcoal text-cream p-4 rounded-full animate-bounce mr-10"
            aria-label="Scroll to main content"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

