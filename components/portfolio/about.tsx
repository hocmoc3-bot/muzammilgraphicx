import Image from "next/image"
import { 
  Palette, 
  PenTool, 
  Layout, 
} from "lucide-react"

const skills = [
  { name: "Adobe Photoshop", icon: Palette },
  { name: "Adobe Illustrator", icon: PenTool },
  { name: "Canva", icon: Layout },
]

export function About() {
  return (
    <section id="about" className="py-32 md:py-40 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Image Side - Massive Professional Portrait */}
          <div className="relative w-full lg:w-1/2 shrink-0 flex items-center justify-center">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border-2 border-border bg-secondary">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/m4-U7RZqkj6mhe8sxXL9v6I3AeIIpbix5.png"
                alt="Muzammil Malik - Graphic Designer"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  objectPosition: 'center center' 
                }}
              />
            </div>
            {/* Subtle Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div className="flex-1 lg:w-1/2">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-balance">
              Turning Ideas Into Visual Stories
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                I am a graphic designer focused on creating clean, promotional, and engaging 
                designs for brands and businesses. I specialize in social media posts, banners, 
                product promotions, and branding visuals that help businesses attract customers 
                and grow their presence.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                Tools & Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-background border border-border rounded-lg px-4 py-3 hover:border-primary/50 transition-colors"
                  >
                    <skill.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
