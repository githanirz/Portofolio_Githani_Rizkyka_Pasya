"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronUp, ChevronDown } from "lucide-react"

interface JourneySectionProps {
  language: "en" | "id"
}

const translations = {
  en: {
    title: "Work Experience",
    subtitle: "An overview of my professional roles and contributions",
    experiences: [
      {
        title: "UI/UX Designer Intern",
      company: "Kobi Education",
        location: "Bandung",
        period: "September 2024 - Desember 2024",
          description: [
          "Redesigned the website landing pages using Figma, covering user research, wireframing, and high-fidelity prototyping to improve user acquisition.",
          "Designed a mobile-based LMS application, including a complete design system (typography, UI components, interaction patterns) to ensure a consistent and scalable user experience.",
          "Collaborated with cross-functional teams (mentors, developers, and product managers) to accelerate design iterations and reduce design-to-development handoff time."
        ]
      },
      {
        title: "UI/UX Designer Intern",
        company: "PT. Kabau Sirah Semen Padang",
        location: "Padang",
        period: "Sept 2023 - Jun 2024",
          description: [
          "Designed the interface for an online event ticketing website, focusing on clean, seamless, and efficient user experience, which improved the ticket purchase process by 25%.",
          "Conducted user interviews and usability testing to gather insights and validate design decisions, ensuring the final product effectively addressed user needs and increased satisfaction."
        ]
      },
    ],
  },
  id: {
    title: "Pengalaman Kerja",
      subtitle: "Gambaran umum peran dan kontribusi profesional saya",
    experiences: [
      {
        title: "UI/UX Designer Intern",
        company: "Kobi Education",
        location: "Bandung",
        period: "September 2024 - Desember 2024",
           description: [
          "  Melakukan redesain landing page website menggunakan Figma, mulai dari user research, wireframe, hingga prototipe high-fidelity untuk meningkatkan akuisisi pengguna.",
          "  Mendesain aplikasi LMS berbasis mobile lengkap dengan design system (typography, UI components, interaction patterns) untuk menciptakan pengalaman pengguna yang konsisten dan mudah diskalakan.",
          "  Bekerja sama dengan tim lintas fungsi (mentor, developer, product manager) untuk mempercepat iterasi desain serta mengurangi waktu handoff ke developer.",
        ]
        
      },
      {
        title: "UI/UX Designer Intern",
        company: "PT. Kabau Sirah Semen Padang",
        location: "Padang",
        period: "September 2023 - Juni 2024",
            description: [
          "  Mendesain antarmuka website pembelian tiket event online dengan fokus pada desain yang bersih, efisien, dan mudah digunakan, sehingga mempercepat proses pembelian tiket hingga 25%.",
          "Conducted user interviews and usability testing to gather insights and validate design decisions, ensuring the final product effectively addressed user needs and increased satisfaction.",
          " Melakukan user interview dan usability testing untuk menggali kebutuhanpengguna dan memvalidasi keputusan desain, sehingga menghasilkan produk akhir yang sesuai kebutuhan dan meningkatkan kepuasan pengguna.",

        ]
      
      },
    ],
  },
}

export function JourneySection({ language }: JourneySectionProps) {
  const t = translations[language]
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className=" md:py-20 bg-background">
      <div className="container mx-auto px-4 ">
         <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">{t.subtitle}</p>
        </div>
        <div className="max-w-4xl mx-auto">
          

          <div className="space-y-6 md:space-y-8 mb-2">
            {t.experiences.map((experience, index) => {
              const isExpanded = expandedItems.includes(index)

              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 md:gap-6">
                     

                      <div className="flex-1 min-w-0">
                        <div
                          className="flex items-start justify-between mb-2 cursor-pointer group"
                          onClick={() => toggleExpanded(index)}
                        >
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg md:text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                              {experience.title}
                            </h3>
                            <p className="text-muted-foreground text-sm md:text-base">
                              {experience.company} • {experience.location}
                            </p>
                          
                           
                          </div>
                          <div className="flex items-center gap-12 ">
                              <Button
                            variant="outline" 
                            size="sm"
                            className="text-muted-foreground text-sm"
                          >
                            {experience.period}
                          </Button>
                            {isExpanded ? (
                              <ChevronUp className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground group-hover:text-primary transition-all duration-200" />
                            ) : (
                              <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground group-hover:text-primary transition-all duration-200" />
                            )}
                          </div>
                        </div>

                         <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isExpanded
                              ? "max-h-96 opacity-100 mt-4"
                              : "max-h-0 opacity-0 mt-0"
                          }`}
                        >
                          {/* render description as list */}
                          {Array.isArray(experience.description) ? (
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed text-sm md:text-base">
                              {experience.description.map((point, i) => (
                                <li key={i}>{point}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                              {experience.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>  
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
