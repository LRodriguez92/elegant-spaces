"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, Heart } from "lucide-react"

const reasons = [
  { icon: Sparkles, title: "Tailored Luxury", description: "Custom solutions for each client" },
  { icon: Zap, title: "Attention to Detail", description: "Every element curated with precision" },
  { icon: Heart, title: "Seamless Experience", description: "End-to-end project management" },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div className="inline-block mb-4" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <reason.icon className="w-16 h-16 text-charcoal" />
              </motion.div>
              <h3 className="font-serif text-2xl mb-2">{reason.title}</h3>
              <p className="font-sans">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

