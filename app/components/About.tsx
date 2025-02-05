import Image from "next/image"

export default function About() {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="font-serif text-4xl mb-4">About Elegant Spaces</h2>
          <p className="font-sans text-lg leading-relaxed">
            At Elegant Spaces, we believe that your home should be a reflection of your unique style and personality.
            With years of experience and a passion for design, our team transforms ordinary spaces into extraordinary
            havens. We blend timeless elegance with modern functionality to create interiors that inspire and delight.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-12 flex justify-center items-center">
          <div className="w-full max-w-md">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Lead Designer"
              width={500}
              height={500}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

