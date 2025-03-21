"use client"

import { useState } from "react"
import Image from "next/image"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const portfolioItems = [
  { 
    id: 1, 
    image: "/images/heroes/portfolio-hero.webp", 
    title: "Elegant Living Spaces" 
  },
  { 
    id: 2, 
    image: "/images/heroes/portfolio-hero-mobile.webp", 
    title: "Modern Design Solutions" 
  },
  { 
    id: 3, 
    image: "/images/heroes/services-hero.webp", 
    title: "Luxury Interior Design" 
  },
  { 
    id: 4, 
    image: "/images/heroes/about-hero-mobile.webp", 
    title: "Contemporary Spaces" 
  },
]

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1))
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl text-center mb-12">Our Portfolio</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {portfolioItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 flex flex-col items-center">
                  <div className="w-full max-w-6xl">
                    <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                      <Image
                        src={item.image || "/placeholder.svg?height=720&width=1280"}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1280px) 100vw, 1280px"
                        className="rounded-lg shadow-lg object-cover"
                      />
                    </div>
                  </div>
                  <p className="font-serif text-xl mt-4 text-center">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-charcoal text-cream rounded-full p-2"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-charcoal text-cream rounded-full p-2"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}

