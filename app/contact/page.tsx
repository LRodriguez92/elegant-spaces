import Hero from "./components/Hero"
import ContactForm from "./components/ContactForm"
import BusinessInfo from "./components/BusinessInfo"
import Footer from "../components/Footer"

export const metadata = {
  title: "Contact Elegant Spaces - Luxury Interior Design",
  description:
    "Get in touch with Elegant Spaces for bespoke interior design services. Schedule a consultation or ask questions about our luxury design solutions.",
}

export default function ContactPage() {
  return (
    <main className="bg-cream text-charcoal">
      <Hero />
      <ContactForm />
      <BusinessInfo />
      <Footer />
    </main>
  )
}

