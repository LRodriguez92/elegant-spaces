"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/faq", label: "FAQ" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = isMenuOpen ? "visible" : "hidden"
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-warm-beige bg-opacity-95 shadow-md" : "bg-charcoal bg-opacity-40 backdrop-blur-md"
      }`}
      role="banner"
    >
      <nav
        className="container mx-auto px-4 py-4 flex justify-between items-center"
        role="navigation"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className={`font-serif text-2xl transition-colors ${
            isScrolled ? "text-charcoal hover:text-soft-blush" : "text-cream hover:text-soft-blush"
          }`}
          aria-label="Elegant Spaces - Home"
        >
          Elegant Spaces
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans transition-colors duration-300 ${
                isScrolled 
                  ? "text-charcoal hover:text-soft-blush" 
                  : "text-cream hover:text-soft-blush"
              } ${
                pathname === link.href ? "border-b-2 border-soft-blush" : ""
              }`}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`px-4 py-2 rounded-full font-sans transition-all ${
              isScrolled 
                ? "bg-charcoal text-cream hover:bg-opacity-90" 
                : "bg-cream text-charcoal hover:bg-soft-blush"
            }`}
            aria-label="Contact Elegant Spaces"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 mr-2 rounded-full transition-colors ${
            isScrolled 
              ? "text-charcoal hover:bg-warm-beige" 
              : "text-cream hover:bg-charcoal hover:bg-opacity-50"
          }`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 w-screen h-screen bg-warm-beige z-[9999] flex flex-col items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <button
            className="absolute top-6 right-6 p-2 text-charcoal hover:bg-soft-blush hover:text-cream rounded-full transition-colors"
            onClick={toggleMenu}
            aria-label="Close main menu"
          >
            <X size={28} />
          </button>
          <nav className="flex flex-col items-center space-y-8 w-full px-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-2xl text-charcoal hover:text-soft-blush transition-colors duration-300 ${
                  pathname === link.href ? "border-b-2 border-soft-blush" : ""
                }`}
                onClick={toggleMenu}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-charcoal text-cream px-8 py-4 rounded-full font-sans text-2xl transition-all hover:bg-opacity-90 mt-4"
              onClick={toggleMenu}
              aria-label="Contact Elegant Spaces"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

