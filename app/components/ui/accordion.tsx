"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import type React from "react" // Added import for React

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
}

export function AccordionItem({ title, children, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-warm-beige last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-xl">{title}</span>
        {isOpen ? (
          <ChevronUp className="flex-shrink-0 ml-4" aria-hidden="true" />
        ) : (
          <ChevronDown className="flex-shrink-0 ml-4" aria-hidden="true" />
        )}
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[1000px] pb-4" : "max-h-0"}`}>
        {children}
      </div>
    </div>
  )
}

interface AccordionProps {
  items: {
    title: string
    content: React.ReactNode
  }[]
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
}

