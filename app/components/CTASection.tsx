'use client'
import { useState } from "react"
import Link from "next/link"

export default function CTASection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: Implement actual email submission logic here
    // Simulating API call with timeout
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    setEmail('')
  }

  return (
    <section className="py-16 md:py-24 px-4 bg-soft-blush" aria-labelledby="cta-heading">
      <div className="container mx-auto text-center">
        <h2 id="cta-heading" className="font-serif text-3xl md:text-4xl mb-6 text-charcoal">
          Get Your Free Design Guide
        </h2>
        <p className="font-sans text-lg mb-8 text-charcoal">
          Sign up to receive our exclusive Interior Design Inspiration PDF and transform your space today!
        </p>
        
        {isSubmitted ? (
          <div className="max-w-md mx-auto p-4 bg-sage/10 rounded-lg">
            <p className="text-sage font-sans">
              Thank you! Check your email for your free design guide.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-full border border-charcoal/20 focus:outline-none focus:border-charcoal"
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-charcoal text-cream px-8 py-3 rounded-full text-lg font-sans transition-all hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Get Started"}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

