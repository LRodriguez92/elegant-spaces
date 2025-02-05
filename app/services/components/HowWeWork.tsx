import { CheckCircle } from "lucide-react"

const steps = [
  { title: "Consultation", description: "We listen to your vision and needs" },
  { title: "Concept", description: "We create a tailored design plan" },
  { title: "Execution", description: "We bring your dream space to life" },
  { title: "Final Reveal", description: "We unveil your transformed interior" },
]

export default function HowWeWork() {
  return (
    <section className="py-16 md:py-24 px-4 bg-warm-beige">
      <div className="container mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">How We Work</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cream"></div>
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-center mb-8 animate-fade-in">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <CheckCircle className="w-8 h-8 text-charcoal" />
              </div>
              <div className={`w-1/2 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8 ml-auto"}`}>
                <h3 className="font-serif text-xl mb-2">{step.title}</h3>
                <p className="font-sans">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

