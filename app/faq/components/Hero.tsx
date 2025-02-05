import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="/images/heroes/faq-hero-mobile.webp"
        />
        <Image
          src="/images/heroes/faq-hero.webp"
          alt="Inviting, well-designed space by Elegant Spaces"
          fill
          className="object-cover"
          priority
        />
      </picture>
      <div className="absolute inset-0 bg-charcoal bg-opacity-50"></div>
      <div className="relative z-10 text-center text-cream px-4">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4 animate-fade-in">Your Questions, Answered</h1>
        <p className="font-sans text-xl md:text-2xl mb-8 animate-fade-in">
          Everything you need to know about our interior design process, services, and pricing.
        </p>
        <Link
          href="/contact"
          className="bg-cream text-charcoal px-8 py-3 rounded-full text-lg font-sans transition-all hover:bg-opacity-90 inline-block"
        >
          Contact Us for More Info
        </Link>
      </div>
    </section>
  )
}

