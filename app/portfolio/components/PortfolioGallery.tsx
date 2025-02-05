"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PortfolioItem from "./PortfolioItem"
import ProjectModal from "./ProjectModal"

const categories = ["All", "Luxury Residences", "Modern Spaces", "Classic Interiors", "Sustainable Design"]

const projects = [
  {
    id: 1,
    title: "Elegant Living Spaces",
    category: "Luxury Residences",
    image: "/images/heroes/portfolio-hero.webp",
  },
  { 
    id: 2, 
    title: "Modern Design Solutions", 
    category: "Modern Spaces", 
    image: "/images/heroes/portfolio-hero-mobile.webp" 
  },
  {
    id: 3,
    title: "Luxury Interior Design",
    category: "Classic Interiors",
    image: "/images/heroes/services-hero.webp",
  },
  {
    id: 4,
    title: "Contemporary Living",
    category: "Modern Spaces",
    image: "/images/heroes/about-hero-mobile.webp",
  },
  {
    id: 5,
    title: "Sustainable Living Room",
    category: "Sustainable Design",
    image: "/images/heroes/about-hero.webp",
  },
  {
    id: 6,
    title: "Modern Office Design",
    category: "Modern Spaces",
    image: "/images/heroes/services-hero-mobile.webp",
  },
]

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category ? "bg-charcoal text-cream" : "bg-cream text-charcoal hover:bg-warm-beige"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <PortfolioItem project={project} onClick={() => setSelectedProject(project)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}

