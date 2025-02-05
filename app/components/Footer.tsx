import Link from "next/link"
import { FaFacebookF, FaInstagram, FaPinterest, FaLinkedinIn } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-2xl mb-4">Elegant Spaces</h3>
            <p className="font-sans">Transforming homes with timeless design</p>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-4">Business Hours</h4>
            <p className="font-sans">Monday - Friday: 9am - 6pm</p>
            <p className="font-sans">Saturday: 10am - 4pm</p>
            <p className="font-sans">Sunday: Closed</p>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-4">Quick Links</h4>
            <ul className="font-sans grid grid-cols-2 gap-x-4 gap-y-2">
              <li>
                <Link href="/" className="hover:text-warm-beige transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-warm-beige transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-warm-beige transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-warm-beige transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-warm-beige transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-warm-beige transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="text-cream hover:text-warm-beige transition-colors"
                aria-label="Visit our Facebook page"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                className="text-cream hover:text-warm-beige transition-colors"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-cream hover:text-warm-beige transition-colors"
                aria-label="Follow us on Pinterest"
              >
                <FaPinterest size={24} />
              </a>
              <a
                href="#"
                className="text-cream hover:text-warm-beige transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center font-sans text-sm">
          <p>&copy; {new Date().getFullYear()} Elegant Spaces. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

