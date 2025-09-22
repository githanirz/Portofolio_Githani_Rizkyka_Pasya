"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

interface AboutSectionProps {
  language: "en" | "id"
}

export function AboutSection({ language }: AboutSectionProps) {
  const content = {
    en: {
      title: "About Me",
      subtitle: "A quick insight into my background and interests",
      name: "GITHANI RIZKYKA PASYA",
      bio1: "With a background in Software Engineering, I am passionate about Web Development and eager to grow professionally in this field. Alongside my web skills, I have solid experience as a UI/UX Designer, creating intuitive flows, clear interfaces, and design systems. Combining both skills, I am able to deliver digital products especially websites that are not only functional but also provide engaging and enjoyable user experiences.",
      cvButton: "View CV",
      portoButton : "ViewPortofolio"
    },
    id: {
      title: "Tentang Saya",
       subtitle: "Sekilas tentang latar belakang dan minat saya",
      name: "GITHANI RIZKYKA PASYA",
      bio1: "Dengan latar belakang Software Engineering, saya memiliki minat besar pada Web Development dan ingin terus berkembang secara profesional di bidang ini. Selain kemampuan web, saya juga berpengalaman sebagai UI/UX Designer dalam merancang alur yang intuitif, antarmuka yang jelas, serta sistem desain. Perpaduan keduanya membuat saya mampu menghasilkan produk digital—terutama website—yang tidak hanya berfungsi dengan baik tetapi juga memberikan pengalaman pengguna yang menyenangkan.",
      cvButton: "Lihat CV",
      portoButton : "Lihat Portofolio"
    },
  }

  const currentContent = content[language]

  return (
    <section className="mb-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{currentContent.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">{currentContent.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-5xl gap-x-6 mx-auto">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start py-6">
            <div className="w-80 h-80 overflow-hidden rounded-4xl bg-muted">
              <img
                src="/profile-githa.jpg"
                alt="Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
          </div>

  {/* Content */}
  <div className="space-y-2 max-w-lg">
    <div className="flex items-center gap-3 mb-8">
      <h3 className="text-xl font-bold tracking-wider">{currentContent.name}</h3>
      <span className="text-2xl">🇮🇩</span>
    </div>

    <div className="space-y-6 text-muted-foreground leading-relaxed">
      <p className="text-base">{currentContent.bio1}</p>
    </div>

    <div className="pt-6 flex gap-6">
      <Button
  className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors rounded-full"
  onClick={() => window.open("/cv.pdf", "_blank")}
>
  {currentContent.cvButton}
</Button>
<a
  href="https://bit.ly/portofoliogithani"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors rounded-full">
    {currentContent.portoButton}
  </Button>
</a>

    </div>
  </div>
</div>

      </div>
    </section>
  )
}
