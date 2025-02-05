import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="/images/heroes/contact-hero-mobile.webp"
        />
        <Image
          src="/images/heroes/contact-hero.webp"
          alt="Welcoming, cozy interior by Elegant Spaces"
          fill
          className="object-cover"
          priority
        />
      </picture>
      <div className="absolute inset-0 bg-charcoal bg-opacity-50"></div>
      <div className="relative z-10 text-center text-cream px-4">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4 animate-fade-in">
          Let's Create Your Dream Space
        </h1>
        <p className="font-sans text-xl md:text-2xl mb-8 animate-fade-in">
          Reach out today to schedule a consultation or ask any questions.
        </p>
        <Link
          href="#contact-form"
          className="bg-cream text-charcoal px-8 py-3 rounded-full text-lg font-sans transition-all hover:bg-opacity-90 inline-block"
        >
          Schedule a Consultation
        </Link>
      </div>
    </section>
  )
}

