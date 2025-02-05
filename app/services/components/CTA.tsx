import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-16 md:py-24 px-4 bg-soft-blush">
      <div className="container mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-6">Let's Create a Space That Feels Like Home</h2>
        <p className="font-sans text-lg mb-8">Schedule a free consultation with our expert designers today.</p>
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

