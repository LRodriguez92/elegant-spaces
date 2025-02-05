"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQ {
  question: string
  answer: string
}

interface FAQSection {
  title: string
  faqs: FAQ[]
}

interface FAQAccordionProps {
  sections: FAQSection[]
}

export default function FAQAccordion({ sections }: FAQAccordionProps) {
  const [openSection, setOpenSection] = useState<number | null>(null)
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="border-b border-warm-beige last:border-0">
          <button
            onClick={() => {
              setOpenSection(openSection === sectionIndex ? null : sectionIndex)
              setOpenQuestion(null)
            }}
            className="w-full flex justify-between items-center py-4 text-left"
            aria-expanded={openSection === sectionIndex}
            aria-controls={`section-${sectionIndex}-content`}
          >
            <span className="font-serif text-xl">{section.title}</span>
            {openSection === sectionIndex ? (
              <ChevronUp className="flex-shrink-0 ml-4" aria-hidden="true" />
            ) : (
              <ChevronDown className="flex-shrink-0 ml-4" aria-hidden="true" />
            )}
          </button>

          <div
            id={`section-${sectionIndex}-content`}
            className={`space-y-4 overflow-hidden transition-all duration-300 ${
              openSection === sectionIndex ? "max-h-[1000px] pb-4" : "max-h-0"
            }`}
            aria-hidden={openSection !== sectionIndex}
          >
            {section.faqs.map((faq, faqIndex) => (
              <div key={faqIndex} className="pl-4">
                <button
                  onClick={() => setOpenQuestion(openQuestion === faqIndex ? null : faqIndex)}
                  className="w-full flex justify-between items-center py-2 text-left"
                  aria-expanded={openQuestion === faqIndex}
                  aria-controls={`faq-${sectionIndex}-${faqIndex}-answer`}
                >
                  <span className="font-sans text-lg pr-4">{faq.question}</span>
                  {openQuestion === faqIndex ? (
                    <ChevronUp className="flex-shrink-0 ml-4" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="flex-shrink-0 ml-4" aria-hidden="true" />
                  )}
                </button>

                <div
                  id={`faq-${sectionIndex}-${faqIndex}-answer`}
                  className={`pl-4 transition-all duration-300 ${
                    openQuestion === faqIndex ? "max-h-[1000px] py-2" : "max-h-0 overflow-hidden"
                  }`}
                  aria-hidden={openQuestion !== faqIndex}
                >
                  <p className="font-sans text-base text-charcoal/80">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

