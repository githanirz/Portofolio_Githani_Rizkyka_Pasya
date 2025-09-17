"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  language: "en" | "id"
  onLanguageChange: (lang: "en" | "id") => void
}

const translations = {
  en: {
    journey: "Journey",
    projects: "Projects",
    skills: "Tech",
    connect: "Connect",
  },
  id: {
    journey: "Perjalanan",
    projects: "Proyek",
    skills: "Keahlian",
    connect: "Kontak",
  },
}

export function Navigation({ language, onLanguageChange }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">Portfolio</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("journey")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t.journey}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t.projects}
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t.skills}
            </button>
            <button
              onClick={() => scrollToSection("connect")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t.connect}
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <LanguageToggle currentLanguage={language} onLanguageChange={onLanguageChange} />
            <ModeToggle />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("journey")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                {t.journey}
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                {t.projects}
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                {t.skills}
              </button>
              <button
                onClick={() => scrollToSection("connect")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                {t.connect}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
