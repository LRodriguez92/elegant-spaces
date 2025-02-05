import { FaHome, FaRuler, FaGem } from "react-icons/fa"

const services = [
  {
    icon: FaHome,
    title: "Home Renovation",
    description: "Transform your living spaces with our expert renovation services.",
  },
  {
    icon: FaRuler,
    title: "Space Planning",
    description: "Optimize your home's layout for maximum functionality and flow.",
  },
  {
    icon: FaGem,
    title: "Luxury Interiors",
    description: "Elevate your home with bespoke, high-end interior design.",
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-warm-beige">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-cream p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <service.icon className="text-4xl text-charcoal mb-4" />
              <h3 className="font-serif text-2xl mb-2">{service.title}</h3>
              <p className="font-sans">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

