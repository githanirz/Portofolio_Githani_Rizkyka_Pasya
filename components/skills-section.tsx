"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Smartphone, Cloud, Palette } from "lucide-react"

interface SkillsSectionProps {
  language: "en" | "id"
}

const translations = {
  en: {
    title: "Technologies",
    subtitle: "Technologies I work with to bring ideas to life",
    categories: [
      {
        skills: [
          { name: "React", logo: "/react.png" },

        ],
      },
      {
         skills: [
          { name: "Next.js", logo: "/next.webp" },
        ],
      },
      {
        skills: [
          { name: "TypeScript", logo: "/typescript.svg" },
        ],
      },
       {
         skills: [
          { name: "JavaScript", logo: "/javascript.png" },
        ],
      },
       {
         skills: [
          { name: "Laravel", logo: "/laravel.png" },
        ],
      },
      {
        skills: [
          { name: "PHP", logo: "/php.png" },
        ],
      },
      {
        skills: [
          { name: "HTML", logo: "/html.svg" },
        ],
      },
      {
         skills: [
          { name: "CSS", logo: "/react.png" },
        ],
      },
       {
         skills: [
          { name: "Tailwind CSS", logo: "/css.svg" },
        ],
      },
       {
         skills: [
          { name: "MySQL", logo: "/mysql.png" },
        ],
      },
       {
         skills: [
          { name: "Figma", logo: "/figma.png" },
        ],
      },
       {
         skills: [
          { name: "Frammer", logo: "/frammer.avif" },
        ],
      },
    ],
  },
  id: {
    title: "Keahlian & Teknologi",
    subtitle: "Teknologi yang saya gunakan untuk mewujudkan ide",
    categories: [
      {
        skills: [
          { name: "React", logo: "/react.png" },

        ],
      },
      {
         skills: [
          { name: "Next.js", logo: "/next.webp" },
        ],
      },
      {
        skills: [
          { name: "TypeScript", logo: "/typescript.svg" },
        ],
      },
       {
         skills: [
          { name: "JavaScript", logo: "/javascript.png" },
        ],
      },
       {
         skills: [
          { name: "Laravel", logo: "/laravel.png" },
        ],
      },
      {
        skills: [
          { name: "PHP", logo: "/php.png" },
        ],
      },
      {
        skills: [
          { name: "HTML", logo: "/html.svg" },
        ],
      },
      {
         skills: [
          { name: "CSS", logo: "/react.png" },
        ],
      },
       {
         skills: [
          { name: "Tailwind CSS", logo: "/css.svg" },
        ],
      },
       {
         skills: [
          { name: "MySQL", logo: "/mysql.png" },
        ],
      },
       {
         skills: [
          { name: "Figma", logo: "/figma.png" },
        ],
      },
       {
         skills: [
          { name: "Frammer", logo: "/frammer.avif" },
        ],
      },
    ],
  },
}

export function SkillsSection({ language }: SkillsSectionProps) {
  const t = translations[language]

  return (
    <section id="skills" className="py-20 bg-muted/30 px-4 sm:px-8 md:px-16 lg:px-24">
  <div className="container mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t.title}</h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">{t.subtitle}</p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {t.categories.map((category, categoryIndex) =>
        category.skills.map((skill, skillIndex) => (
          <Card
            key={`${categoryIndex}-${skillIndex}`}
            className="group flex flex-col items-center justify-center p-4 hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="h-12 w-12 object-contain transition-transform group-hover:scale-110"
            />
            <p className="text-sm text-muted-foreground group-hover:text-primary">
              {skill.name}
            </p>
          </Card>
        ))
      )}
    </div>
  </div>
</section>

  )
}
