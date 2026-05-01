import { 
  Palette, 
  Layers, 
  Share2, 
  PenTool,
  Monitor,
  Package
} from "lucide-react"

const services = [
  {
    icon: Share2,
    title: "Social Media Post Design",
    description: "Engaging visual content optimized for all major social platforms to boost your online presence and attract customers.",
  },
  {
    icon: Layers,
    title: "Promotional Banner Design",
    description: "Eye-catching banners designed to showcase deals, offers, and promotions with strong visual impact.",
  },
  {
    icon: Package,
    title: "Product Promotion Design",
    description: "Professional product-focused designs that highlight features, pricing, and promotional messaging.",
  },
  {
    icon: PenTool,
    title: "Poster and Flyer Design",
    description: "Bold and creative posters and flyers that grab attention and communicate your message effectively.",
  },
  {
    icon: Monitor,
    title: "Business Card Design",
    description: "Professional business cards with clean layouts, strong typography, and modern brand presentation.",
  },
  {
    icon: Palette,
    title: "Logo Design",
    description: "Clean and modern logo designs created to build strong and memorable brand identities.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-32 md:py-40 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-balance">
            What I Can Do For You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to completion, I offer a range of design services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="group p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
