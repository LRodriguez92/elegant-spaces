import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="/images/heroes/about-hero-mobile.webp"
        />
        <Image
          src="/images/heroes/about-hero.webp"
          alt="Luxury interior design by Elegant Spaces"
          fill
          className="object-cover"
          priority
        />
      </picture>
      <div className="absolute inset-0 bg-charcoal bg-opacity-50"></div>
      <div className="relative z-10 text-center text-cream px-4">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4 animate-fade-in">
          Designing Timeless Interiors with Passion & Precision
        </h1>
      </div>
    </section>
  )
}

