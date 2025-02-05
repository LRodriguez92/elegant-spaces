import Hero from "./components/Hero"
import ServicesOverview from "./components/ServicesOverview"
import HowWeWork from "./components/HowWeWork"
import WhyChooseUs from "./components/WhyChooseUs"
import CTA from "./components/CTA"
import Footer from "../components/Footer"

export const metadata = {
  title: "Our Services - Elegant Spaces | Luxury Interior Design",
  description:
    "Discover our bespoke interior design services tailored to your lifestyle. From concept to completion, we transform spaces into timeless works of art.",
}

export default function ServicesPage() {
  return (
    <main className="bg-cream text-charcoal">
      <Hero />
      <ServicesOverview />
      <HowWeWork />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </main>
  )
}

