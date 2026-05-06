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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Image Side - Aligned Properly */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md aspect-[3/4] rounded-2xl overflow-hidden border-2 border-border bg-card shadow-2xl">
              <Image
                src="/images/profile.jpg.png"
                alt="Muzammil Malik - Graphic Designer"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative Element - Cyan Glow */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-cyan-500/20 rounded-2xl -z-10 hidden lg:block" />
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-foreground">
              Turning Ideas Into Visual Stories
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a Graphic Designer with 3 years of experience creating clean, promotional,
                and engaging designs. I specialize in social media posts, banners, branding
                visuals, and print media that help businesses grow.
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
                    className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3 hover:border-cyan-500/50 hover:shadow-md hover:shadow-cyan-500/10 transition-all"
                  >
                    <skill.icon className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-foreground">{skill.name}</span>
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