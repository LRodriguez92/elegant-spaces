import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "/images/headshots/sarah-johnson.webp",
    text: "Elegant Spaces transformed our house into a home. Their attention to detail and understanding of our style was impressive.",
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "/images/headshots/john-doe.webp",
    text: "Working with Elegant Spaces was a joy. They brought our vision to life and exceeded our expectations.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    image: "/images/headshots/emily-rodriguez.webp",
    text: "The team at Elegant Spaces is incredibly talented. Our home has never looked better!",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-warm-beige">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-cream p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-serif text-xl">{testimonial.name}</h3>
              </div>
              <p className="font-sans italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

