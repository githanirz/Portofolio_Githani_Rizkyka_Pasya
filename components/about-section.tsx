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
      bio1: "Live in Padang with a background in Software Engineering Studies, I have gained solid experience as a UI/UX Designer by working on projects that focus on creating intuitive user flows, clear interfaces, and impactful design systems. These experiences have strengthened my ability to understand user needs and translate them into meaningful digital solutions.",
      bio2: "Alongside my journey in design, I also have a strong interest in web development. With the skills I developed during my studies and through several web projects, I aspire to gain more professional experience in this field. I am eager to expand my skills as a Web Developer while continuing to grow as a UI/UX Designer, so I can contribute to building digital products that not only work well but also deliver enjoyable user experiences.",
      resumeButton: "View Resume",
    },
    id: {
      title: "Tentang Saya",
       subtitle: "Sekilas tentang latar belakang dan minat saya",
      name: "DEXSA LUKI SAPUTRA",
      bio1: "Berdomisili di Padang dengan latar belakang Pendidikan Teknik Rekayasa Perangkat Lunak, saya telah membangun pengalaman yang solid sebagai UI/UX Designer melalui berbagai proyek yang berfokus pada pembuatan alur pengguna yang intuitif, antarmuka yang jelas, serta sistem desain yang berdampak. Pengalaman tersebut menguatkan kemampuan saya dalam memahami kebutuhan pengguna dan menerjemahkannya menjadi solusi digital yang bermakna.",
      bio2: "Selain perjalanan saya di bidang desain, saya juga memiliki minat yang kuat dalam web development. Dengan kemampuan yang saya kembangkan selama masa kuliah dan melalui beberapa proyek web, saya berkeinginan untuk mendapatkan lebih banyak pengalaman profesional di bidang ini. Saya bersemangat untuk terus mengembangkan keterampilan sebagai Web Developer sekaligus tumbuh sebagai UI/UX Designer, sehingga dapat berkontribusi dalam membangun produk digital yang tidak hanya berfungsi dengan baik tetapi juga menghadirkan pengalaman yang menyenangkan bagi pengguna.",
      resumeButton: "Lihat Resume",
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
      <p className="text-base">{currentContent.bio2}</p>
    </div>

    <div className="pt-6 flex gap-6">
      <Button
  className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors rounded-full"
  onClick={() => window.open("/cv.pdf", "_blank")}
>
  {currentContent.resumeButton}
</Button>
    </div>
  </div>
</div>

      </div>
    </section>
  )
}
