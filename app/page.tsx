import Hero from "./components/Hero"
import About from "./components/About"
import ServicesPreview from "./components/ServicesPreview"
import PortfolioCarousel from "./components/PortfolioCarousel"
import Testimonials from "./components/Testimonials"
import CTASection from "./components/CTASection"
import Footer from "./components/Footer"

export default function HomePage() {
  return (
    <main className="bg-cream text-charcoal">
      <Hero />
      <About />
      <ServicesPreview />
      <PortfolioCarousel />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}

