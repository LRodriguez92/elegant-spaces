"use client"

import type React from "react"
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

const FAQAccordion: React.FC<FAQAccordionProps> = ({ sections }) => {
  const [openSection, setOpenSection] = useState<number | null>(null)
  const [openQuestions, setOpenQuestions] = useState<{ [key: number]: number | null }>({})

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index)
    setOpenQuestions({})
  }

  const toggleQuestion = (sectionIndex: number, questionIndex: number) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [sectionIndex]: prev[sectionIndex] === questionIndex ? null : questionIndex,
    }))
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6 border-b border-warm-beige pb-4">
          <button
            onClick={() => toggleSection(sectionIndex)}
            className="w-full flex justify-between items-center py-4 text-left font-serif text-2xl text-charcoal"
            aria-expanded={openSection === sectionIndex}
            aria-controls={`section-${sectionIndex}-content`}
          >
            <span>{section.title}</span>
            {openSection === sectionIndex ? (
              <ChevronUp className="flex-shrink-0" aria-hidden="true" />
            ) : (
              <ChevronDown className="flex-shrink-0" aria-hidden="true" />
            )}
          </button>
          <div id={`section-${sectionIndex}-content`} className={openSection === sectionIndex ? "mt-4" : "hidden"}>
            {section.faqs.map((faq, questionIndex) => (
              <div key={questionIndex} className="mb-4">
                <button
                  onClick={() => toggleQuestion(sectionIndex, questionIndex)}
                  className="w-full flex justify-between items-center py-2 text-left font-sans text-lg text-charcoal"
                  aria-expanded={openQuestions[sectionIndex] === questionIndex}
                  aria-controls={`question-${sectionIndex}-${questionIndex}-answer`}
                >
                  <span>{faq.question}</span>
                  {openQuestions[sectionIndex] === questionIndex ? (
                    <ChevronUp className="flex-shrink-0" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="flex-shrink-0" aria-hidden="true" />
                  )}
                </button>
                <div
                  id={`question-${sectionIndex}-${questionIndex}-answer`}
                  className={openQuestions[sectionIndex] === questionIndex ? "mt-2 pl-4" : "hidden"}
                >
                  <p className="font-sans text-charcoal/80">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FAQAccordion

