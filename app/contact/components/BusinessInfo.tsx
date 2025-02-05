import { Phone, Mail, MapPin } from "lucide-react"

export default function BusinessInfo() {
  return (
    <section className="py-16 md:py-24 px-4 bg-warm-beige">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="mr-4 text-charcoal" />
                <p className="font-sans">(555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-4 text-charcoal" />
                <p className="font-sans">hello@elegantspaces.com</p>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-4 text-charcoal" />
                <p className="font-sans">123 Luxury Lane, Design City, CA</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 h-64 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0636346732506!2d-122.41941708468212!3d37.77492997975951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1620164138178!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Elegant Spaces Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

