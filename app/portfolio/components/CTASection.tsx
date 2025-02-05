import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-soft-blush">
      <div className="container mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-6">Your Dream Space is One Step Away</h2>
        <p className="font-sans text-lg mb-8">Let&apos;s create something amazing – schedule a consultation today.</p>
        <Link
          href="/contact"
          className="bg-charcoal text-cream px-8 py-3 rounded-full text-lg font-sans transition-all hover:bg-opacity-90 inline-block"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}

