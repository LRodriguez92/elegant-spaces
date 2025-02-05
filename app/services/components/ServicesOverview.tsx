"use client"

import { useState } from "react"
import Image from "next/image"

const services = [
  {
    title: "Full-Service Interior Design",
    description: "Comprehensive design from planning to execution.",
    image: "/images/heroes/services-hero.webp",
    details:
      "Our full-service interior design offering covers every aspect of your project, from initial concept to final installation. We handle space planning, custom furniture design, material selection, and project management to deliver a cohesive and stunning result.",
  },
  {
    title: "Space Planning & Layout Optimization",
    description: "Maximizing functionality and flow.",
    image: "/images/heroes/services-hero-mobile.webp",
    details:
      "We analyze your space and lifestyle to create optimal layouts that enhance functionality and flow. Our expertise ensures that every square foot is utilized effectively, creating harmonious and practical living areas.",
  },
  {
    title: "Luxury Home Staging",
    description: "Creating an irresistible aesthetic for home sales.",
    image: "/images/heroes/portfolio-hero.webp",
    details:
      "Our luxury home staging service is designed to showcase your property's full potential. We use carefully curated furnishings and decor to create an aspirational lifestyle that appeals to discerning buyers, helping you achieve top market value.",
  },
  {
    title: "Custom Furniture & Décor Selection",
    description: "Hand-picked pieces for a cohesive look.",
    image: "/images/heroes/portfolio-hero-mobile.webp",
    details:
      "We source and select unique, high-quality furniture and decor items that perfectly complement your space and style. Our extensive network of artisans and suppliers allows us to find or create one-of-a-kind pieces that make your interior truly special.",
  },
  {
    title: "Color & Material Consultation",
    description: "Finding the perfect palette and textures.",
    image: "/images/heroes/contact-hero.webp",
    details:
      "Our color and material consultations help you navigate the vast world of design options. We create custom palettes and material schemes that reflect your personality and enhance the architectural features of your space.",
  },
  {
    title: "Sustainable & Eco-Friendly Design",
    description: "Stylish, environmentally responsible spaces.",
    image: "/images/heroes/contact-hero-mobile.webp",
    details:
      "We specialize in creating beautiful interiors that are also environmentally responsible. From sourcing sustainable materials to incorporating energy-efficient solutions, we help you reduce your carbon footprint without compromising on style or luxury.",
  },
]

export default function ServicesOverview() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-warm-beige rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-all duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal bg-opacity-30 transition-opacity duration-300 hover:bg-opacity-50"></div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl mb-2">{service.title}</h3>
                <p className="font-sans mb-4">{service.description}</p>
                <button
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                  className="font-sans text-charcoal hover:text-cream hover:bg-charcoal px-4 py-2 rounded transition-colors duration-300"
                >
                  {expandedService === index ? "Close" : "Learn More"}
                </button>
                {expandedService === index && (
                  <div className="mt-4 animate-fade-in">
                    <p className="font-sans">{service.details}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

