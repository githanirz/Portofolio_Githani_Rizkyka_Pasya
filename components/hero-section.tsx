"use client"
import { Button } from "@/components/ui/button"
import { ArrowDown} from "lucide-react"

interface HeroSectionProps {
  language: "en" | "id"
}

const translations = {
  en: {
    title: "WEB DEVELOPER & UI UX DESIGNER",
    tagline: "Designing intuitive interfaces and developing seamless web experiences.",
    cta: "View My Work",
  },
  id: {
    title: "WEB DEVELOPER & UI UX DESIGNER",
    tagline: "Merancang antarmuka yang intuitif dan mengembangkan pengalaman web yang mulus.",
    cta: "Lihat Karya Saya",
 
  },
}

export function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language]

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className=" min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h3 className="text-2xl md:text-4xl lg:text-6xl font-black mb-8 text-balance tracking-tight leading-none">
            {t.title}
          </h3>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 font-medium tracking-wide uppercase">
            {t.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors rounded-full"
            >
              {t.cta}
              <ArrowDown className="h-4 w-4" />
            </Button>

           
          </div>
        </div>
      </div>
    </section>
  )
}
