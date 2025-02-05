import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-soft-blush" aria-labelledby="cta-heading">
      <div className="container mx-auto text-center">
        <h2 id="cta-heading" className="font-serif text-3xl md:text-4xl mb-6 text-charcoal">
          Get Your Free Design Guide
        </h2>
        <p className="font-sans text-lg mb-8 text-charcoal">
          Sign up to receive our exclusive Interior Design Inspiration PDF and transform your space today!
        </p>
        <Link
          href="/contact"
          className="bg-charcoal text-cream px-8 py-3 rounded-full text-lg font-sans transition-all hover:bg-opacity-90 inline-block"
          aria-label="Sign up for free design guide"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}

