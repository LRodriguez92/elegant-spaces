import Hero from "./components/Hero"
import PortfolioGallery from "./components/PortfolioGallery"
import CTASection from "./components/CTASection"
import Footer from "../components/Footer"

export const metadata = {
  title: "Portfolio | Elegant Spaces - Luxury Interior Design",
  description:
    "Explore our curated selection of beautifully designed spaces. From luxury residences to sustainable design, discover how Elegant Spaces transforms interiors.",
}

export default function PortfolioPage() {
  return (
    <main className="bg-cream text-charcoal">
      <Hero />
      <PortfolioGallery />
      <CTASection />
      <Footer />
    </main>
  )
}

