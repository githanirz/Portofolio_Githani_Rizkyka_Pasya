"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { JourneySection } from "@/components/journey-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ConnectSection } from "@/components/connect-section"

export default function Home() {
  const [language, setLanguage] = useState<"en" | "id">("en")

  return (
    <main className="min-h-screen">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <HeroSection language={language} />
      <AboutSection language={language} />
      <JourneySection language={language} />
      <ProjectsSection language={language} />
      <SkillsSection language={language} />
      <ConnectSection language={language} />

      {/* Footer */}
      <footer className="bg-muted/50 py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Githani Rizkkyka Pasya. {language === "en" ? "All rights reserved." : "Semua hak dilindungi."}
          </p>
        </div>
      </footer>
    </main>
  )
}
