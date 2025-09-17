"use client"
import type React from "react"
import { Card, CardConnect } from "@/components/ui/card"
import { CardContent } from "@/components/ui/card"
import {  Github, Linkedin, Mail, Phone } from "lucide-react"

interface ConnectSectionProps {
  language: "en" | "id"
}

const translations = {
  en: {
    title: "Let's Connect",
    subtitle: "Ready to work together? Let's discuss your next project",

    socialLinks: [
      { icon: Github, label: "GitHub",text:"github.com/githanirz", url: "https://github.com/githanirz" },
      { icon: Linkedin, label: "LinkedIn", text:"linkedin.com/in/githanirizkyka13/", url: "https://www.linkedin.com/in/githanirizkyka13/" },
      { icon: Mail, label: "Mail", text:"githanipasya@gmail.com", url: "mailto:githanipasya@gmail.com" },
      { icon: Phone, label: "Phone", text:"+62 831-9345-3420", url: "https://wa.me/6283193453420" },
    ],
  },
  id: {
    title: "Mari Terhubung",
    subtitle: "Siap bekerja sama? Mari diskusikan proyek Anda selanjutnya",
    socialLinks: [
       { icon: Github, label: "GitHub",text:"github.com/githanirz", url: "https://github.com/githanirz" },
      { icon: Linkedin, label: "LinkedIn", text:"linkedin.com/in/githanirizkyka13/", url: "https://www.linkedin.com/in/githanirizkyka13/" },
      { icon: Mail, label: "Mail", text:"githanipasya@gmail.com", url: "mailto:githanipasya@gmail.com" },
      { icon: Phone, label: "Phone", text:"+62 831-9345-3420", url: "https://wa.me/6283193453420" },
    ],
  },
}

export function ConnectSection({ language }: ConnectSectionProps) {
  const t = translations[language]

  return (
    <section id="connect" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {t.socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-3">
                    <Icon className="size-12" />
                    <p className="text-sm text-muted-foreground">
                     {social.text}
                    </p>
                  </CardContent>
                </Card>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
