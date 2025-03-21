"use client"

import { useEffect } from "react"
import Image from "next/image"
import Modal from "react-modal"
import { X } from "lucide-react"

interface Project {
  id: number
  title: string
  category: string
  image: string
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    Modal.setAppElement("body")
  }, [])

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel={`${project.title} Details`}
      className="max-w-4xl w-full mx-auto mt-20 bg-cream rounded-lg shadow-xl outline-none max-h-[90vh] overflow-y-auto"
      portalClassName="fixed inset-0 z-50 flex items-center justify-center px-4"
      overlayClassName="fixed inset-0 bg-charcoal bg-opacity-75"
    >
      <div className="relative p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-charcoal hover:text-warm-beige transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        <h2 className="font-serif text-3xl mb-4">{project.title}</h2>
        <div className="mb-6">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mb-6">
          <h3 className="font-serif text-xl mb-2">Project Description</h3>
          <p className="font-sans">
            This project showcases our commitment to blending elegance with functionality. We worked closely with the
            client to understand their vision and lifestyle needs, resulting in a space that is both beautiful and
            practical.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-xl mb-2">Key Design Elements</h3>
          <ul className="font-sans list-disc list-inside">
            <li>Custom-designed furniture pieces</li>
            <li>Neutral color palette with pops of muted teal</li>
            <li>Natural materials: oak flooring, marble accents</li>
            <li>Smart home integration for lighting and climate control</li>
          </ul>
        </div>
      </div>
    </Modal>
  )
}

