import Hero from "./components/Hero"
import FAQAccordion from "./components/FAQAccordion"
import QuickContact from "./components/QuickContact"
import CTASection from "./components/CTASection"
import Footer from "../components/Footer"

const faqSections = [
  {
    title: "General Questions",
    faqs: [
      {
        question: "What services do you offer?",
        answer:
          "We offer a full range of interior design services, including space planning, color consultation, furniture selection, custom design, project management, and more. Our services cater to both residential and commercial spaces.",
      },
      {
        question: "Do you work on residential and commercial projects?",
        answer:
          "Yes, we have extensive experience in both residential and commercial interior design. Whether it's a cozy home or a large office space, we bring our expertise and creativity to every project.",
      },
      {
        question: "What is your design style?",
        answer:
          "While we're known for our elegant and timeless designs, we don't adhere to a single style. Our approach is to blend our expertise with your personal taste and lifestyle needs to create a space that's uniquely yours.",
      },
    ],
  },
  {
    title: "Process & Timeline",
    faqs: [
      {
        question: "How does your design process work?",
        answer:
          "Our design process typically includes an initial consultation, concept development, design presentation, revisions, procurement, and installation. We keep you involved and informed at every step to ensure your vision is realized.",
      },
      {
        question: "How long does an interior design project take?",
        answer:
          "Project timelines can vary depending on the scope and scale. A small room refresh might take 4-6 weeks, while a full home renovation could take several months. We'll provide a detailed timeline during our initial consultation.",
      },
      {
        question: "Do I need to be involved in every step?",
        answer:
          "While we value your input throughout the process, you don't need to be involved in every detail. We'll keep you updated on major decisions and milestones, but our goal is to make the process as smooth and stress-free as possible for you.",
      },
    ],
  },
  {
    title: "Pricing & Payment",
    faqs: [
      {
        question: "What is your pricing structure?",
        answer:
          "Our pricing structure varies depending on the project scope and services required. We offer both hourly rates and flat fees for projects. During our initial consultation, we'll discuss your needs and provide a detailed proposal and cost estimate.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes, we offer flexible payment plans for larger projects. Typically, we require a deposit to begin work, with subsequent payments made at agreed-upon project milestones. We'll discuss payment terms in detail before starting your project.",
      },
      {
        question: "Are there additional costs I should be aware of?",
        answer:
          "Our proposal will outline all anticipated costs, including our design fees and estimated costs for furnishings, materials, and labor. We're transparent about any potential additional costs and will always discuss these with you before proceeding.",
      },
    ],
  },
  {
    title: "Consultations & Customization",
    faqs: [
      {
        question: "Do you offer free consultations?",
        answer:
          "We offer a complimentary 15-minute phone consultation to discuss your project and determine if we're a good fit. For in-depth, in-person consultations, we charge a fee which can be applied to your project if you choose to move forward with our services.",
      },
      {
        question: "Can I request specific design styles?",
        answer:
          "We pride ourselves on creating designs that reflect our clients' personal styles and preferences. During our initial consultations, we'll discuss your design preferences in detail and tailor our approach accordingly.",
      },
      {
        question: "What happens if I want changes after the design is finalized?",
        answer:
          "We understand that sometimes changes are necessary. Minor tweaks are often included in our service, but significant changes after finalization may incur additional costs. We always strive to be flexible and will discuss any potential changes and their implications with you.",
      },
    ],
  },
]

export const metadata = {
  title: "FAQ - Elegant Spaces | Luxury Interior Design",
  description:
    "Find answers to common questions about our interior design process, services, and pricing. Discover how Elegant Spaces can transform your home or commercial space.",
}

export default function FAQPage() {
  return (
    <main className="bg-cream text-charcoal">
      <Hero />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl text-center mb-12">Frequently Asked Questions</h1>
          <FAQAccordion sections={faqSections} />
        </div>
      </section>
      <QuickContact />
      <CTASection />
      <Footer />
    </main>
  )
}

