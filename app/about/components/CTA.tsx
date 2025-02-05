import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-16 md:py-24 px-4 bg-soft-blush">
      <div className="container mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Transform Your Space?</h2>
        <p className="font-sans text-lg mb-8">Let's collaborate to create the interior of your dreams.</p>
        <Link
          href="/consultation"
          className="bg-charcoal text-cream px-8 py-3 rounded-full text-lg font-sans transition-all hover:bg-opacity-90"
        >
          Let's Create Your Dream Space
        </Link>
      </div>
    </section>
  )
}

