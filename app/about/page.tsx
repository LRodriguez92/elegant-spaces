import Hero from "./components/Hero"
import OurStory from "./components/OurStory"
import MeetTheTeam from "./components/MeetTheTeam"
import CompanyMission from "./components/CompanyMission"
import CTA from "./components/CTA"
import Footer from "../components/Footer"

export const metadata = {
  title: "About Elegant Spaces - Luxury Interior Design",
  description:
    "Discover the passion and precision behind Elegant Spaces, your premier luxury interior design firm. Learn about our story, meet our talented team, and explore our unique approach to creating timeless interiors.",
}

export default function AboutPage() {
  return (
    <main className="bg-cream text-charcoal">
      <Hero />
      <OurStory />
      <MeetTheTeam />
      <CompanyMission />
      <CTA />
      <Footer />
    </main>
  )
}

