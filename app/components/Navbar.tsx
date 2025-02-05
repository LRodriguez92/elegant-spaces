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
        isScrolled ? "bg-warm-beige bg-opacity-95 shadow-md" : ""
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
          className="font-serif text-2xl text-charcoal hover:text-soft-blush transition-colors"
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
              className={`font-sans text-charcoal hover:text-soft-blush transition-colors duration-300 ${
                pathname === link.href ? "border-b-2 border-soft-blush" : ""
              }`}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-charcoal text-cream px-4 py-2 rounded-full font-sans transition-all hover:bg-opacity-90"
            aria-label="Contact Elegant Spaces"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-charcoal p-2 hover:bg-warm-beige rounded-full transition-colors"
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
          className="fixed inset-0 bg-warm-beige bg-opacity-98 z-50 flex flex-col items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <button
            className="absolute top-4 right-4 p-2 text-charcoal hover:bg-soft-blush hover:text-cream rounded-full transition-colors"
            onClick={toggleMenu}
            aria-label="Close main menu"
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col items-center space-y-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-xl text-charcoal hover:text-soft-blush transition-colors duration-300 ${
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
              className="bg-charcoal text-cream px-6 py-3 rounded-full font-sans text-xl transition-all hover:bg-opacity-90"
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

