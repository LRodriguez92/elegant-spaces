import Image from "next/image"

export default function OurStory() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">Our Story</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="md:w-1/2 animate-fade-in">
            <p className="font-sans text-lg leading-relaxed">
              Elegant Spaces was born from a passion for transforming houses into homes. Founded in 2010 by Jane Doe,
              our journey began with a simple yet powerful vision: to create interiors that not only captivate the eye
              but also nurture the soul.
            </p>
            <p className="font-sans text-lg leading-relaxed mt-4">
              Over the years, we've had the privilege of bringing countless dreams to life, crafting spaces that reflect
              the unique personalities and aspirations of our clients. Our commitment to excellence, attention to
              detail, and innovative design approach have established us as a leading name in luxury interior design.
            </p>
          </div>
          <div className="md:w-1/2 animate-fade-in">
            <div className="relative w-full max-w-[600px] mx-auto">
              <Image
                src="/images/headshots/team.webp"
                alt="Jane Doe, Founder of Elegant Spaces"
                width={300}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

