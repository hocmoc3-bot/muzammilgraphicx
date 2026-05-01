import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-32 md:py-40 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-balance">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Reach out and let&apos;s create something amazing together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-center gap-6 sm:gap-16">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-medium mb-1">Email</p>
                <Link 
                  href="mailto:muzammilgraphicx@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base break-all"
                >
                  muzammilgraphicx@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-medium mb-1">WhatsApp</p>
                <Link 
                  href="https://wa.me/923085887135" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                >
                  +92 308 5887135
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
