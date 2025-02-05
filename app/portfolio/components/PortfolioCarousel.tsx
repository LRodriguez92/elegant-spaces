"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const portfolioItems = [
  { id: 1, image: "/placeholder.svg?height=720&width=1280", title: "Modern Minimalist Living Room" },
  { id: 2, image: "/placeholder.svg?height=720&width=1280", title: "Luxurious Master Bedroom" },
  { id: 3, image: "/placeholder.svg?height=720&width=1280", title: "Contemporary Kitchen Design" },
  { id: 4, image: "/placeholder.svg?height=720&width=1280", title: "Elegant Home Office" },
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
    <section className="py-20" aria-label="Portfolio carousel">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl text-center mb-12">Our Portfolio</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {portfolioItems.map((item, index) => (
                <div
                  key={item.id}
                  className="w-full flex-shrink-0 flex flex-col items-center"
                  aria-hidden={currentIndex !== index}
                >
                  <div className="w-full max-w-6xl">
                    <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                      <Image
                        src={item.image || "/placeholder.svg"}
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
          <Button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3"
            aria-label="View previous portfolio item"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3"
            aria-label="View next portfolio item"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}

