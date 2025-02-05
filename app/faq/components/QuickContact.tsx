"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"

type FormData = {
  name: string
  email: string
  question: string
}

export default function QuickContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(data)
    setIsSubmitting(false)
    setSubmitSuccess(true)
    reset()
  }

  return (
    <section className="py-16 md:py-24 px-4 bg-warm-beige">
      <div className="container mx-auto max-w-2xl">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-8">Still Have Questions?</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-cream p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block font-serif text-lg mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border border-warm-beige rounded-md focus:outline-none focus:ring-2 focus:ring-charcoal bg-white font-sans"
            />
            {errors.name && <p className="text-red-500 mt-1 font-sans">{errors.name.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-serif text-lg mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-2 border border-warm-beige rounded-md focus:outline-none focus:ring-2 focus:ring-charcoal bg-white font-sans"
            />
            {errors.email && <p className="text-red-500 mt-1 font-sans">{errors.email.message}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="question" className="block font-serif text-lg mb-2">
              Question *
            </label>
            <textarea
              id="question"
              {...register("question", { required: "Question is required" })}
              rows={4}
              className="w-full px-4 py-2 border border-warm-beige rounded-md focus:outline-none focus:ring-2 focus:ring-charcoal bg-white font-sans"
            ></textarea>
            {errors.question && <p className="text-red-500 mt-1 font-sans">{errors.question.message}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-charcoal text-cream py-3 rounded-md font-sans transition-all hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-charcoal"
            aria-label={isSubmitting ? "Sending your question" : "Ask your question"}
          >
            {isSubmitting ? "Sending..." : "Ask Us"}
          </button>
        </form>
        {submitSuccess && (
          <div className="mt-6 p-4 bg-soft-blush text-charcoal rounded-md font-serif text-center">
            Thanks! We&apos;ll get back to you within 24 hours.
          </div>
        )}
      </div>
    </section>
  )
}

