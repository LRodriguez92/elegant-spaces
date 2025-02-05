import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-soft-blush">
      <div className="container mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-6">Let&apos;s Bring Your Vision to Life</h2>
        <p className="font-sans text-lg mb-8">Can&apos;t find what you&apos;re looking for? Schedule a free consultation to get started.</p>
        <Link
          href="/consultation"
          className="bg-charcoal text-cream px-8 py-3 rounded-full text-lg font-sans transition-all hover:bg-opacity-90 inline-block"
        >
          Book a Free Consultation
        </Link>
      </div>
    </section>
  )
}

