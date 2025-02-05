"use client"

import Image from "next/image"
import { useState } from "react"

const teamMembers = [
  {
    name: "Jane Doe",
    title: "Founder & Lead Designer",
    image: "/images/headshots/jane-doe.webp",
    bio: "With over 20 years of experience, Jane leads our team with passion and innovation.",
  },
  {
    name: "John Smith",
    title: "Senior Interior Designer",
    image: "/images/headshots/john-doe.webp",
    bio: "John specializes in modern minimalist designs that maximize both form and function.",
  },
  {
    name: "Emily Chen",
    title: "Sustainability Expert",
    image: "/images/headshots/emily-chen.webp",
    bio: "Emily ensures our designs are not only beautiful but also environmentally responsible.",
  },
  {
    name: "Michael Brown",
    title: "Project Manager",
    image: "/images/headshots/michael-brown.webp",
    bio: "Michael keeps our projects on track, on time, and exceeding client expectations.",
  },
]

export default function MeetTheTeam() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 px-4 bg-warm-beige">
      <div className="container mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={300}
                height={400}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-charcoal bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                <div className="text-cream text-center p-4">
                  <h3 className="font-serif text-xl mb-2">{member.name}</h3>
                  <p className="font-sans text-sm mb-2">{member.title}</p>
                  {hoveredMember === index && <p className="font-sans text-sm animate-fade-in">{member.bio}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

