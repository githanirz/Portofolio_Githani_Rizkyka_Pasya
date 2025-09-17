"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye } from "lucide-react"

interface ProjectsSectionProps {
  language: "en" | "id"
}

const translations = {
  en: {
    title: "Featured Projects",
    subtitle: "A showcase of my recent work and personal projects",
    viewDetails: "View Details",
    projects: [
      {
        title: "Milk Quality Control",
        description:
          "Web-based milk quality prediction app using the Random Forest algorithm, featuring history tracking, partner data management, and Excel/manual input, designed to help Milkta Gemilang factory improve efficiency and accuracy in quality control.",
        image: "/milk.png",
        technologies: ["React","Node.js", "JavaScript", "Flask", "Python", "MySQL", "Tailwind CSS"],
        category: "Web App",
        featured: true,
           links: [
            { type: " github", url: "https://github.com/githanirz/projectmilkquality" }
          ]
      },
      {
        title: "Foody App",
        description:
          "A web-based application for online restaurant table reservations, making it easy for users to get a table according to their needs. This system is equipped with features for table booking, food menu selection, and chef choice.",
        image: "/foody.png",
        technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
        category: "Web App",
        featured: true,
         links: [
            { type: "github", url: "https://github.com/githanirz/Book-Restaurant" }
          ]
      },
      {
        title: "Learning Management System",
        description:
          "Designed a mobile-based Learning Management System (LMS) to make it easier for students to access learning materials directly from their smartphones. The project included the creation of a complete design system, wireframes, mockups, and interactive prototypes.",
        image: "/lms.png",
        technologies: ["Figma", "Miro"],
        category: "UI/UX Designer",
        featured: true,
          links: [
            { type: "figma", url: "https://www.figma.com/design/LDO17Op7xDlqXsBNi1VxlW/LMS-Kobi-Education?node-id=1-18470&t=QhIczJwGK2zEDzJ6-1" }
          ]
      },
      {
        title: "Redesign Website Kobi Education",
        description:
          "Redesigned the Kobi Education website with a focus on simplifying user flows and enhancing interactivity. The new design helps users find scholarship-related information more quickly and efficiently, while delivering a clearer, more concise, and engaging user experience.",
        image: "/webkobi.png",
       technologies: ["Figma", "Miro"],
        category: "UI/UX Designer",
          links: [
            { type: "figma", url: "https://www.figma.com/design/qYH6dgCqZG4IarFwuQO2Yg/Redesign-Website?node-id=0-1&t=N9DVzVId3rbwMDcI-1" }
          ]
      },
      {
        title: "Eztix.id",
        description:
          "Designed the Eztix.id website, an online platform for purchasing event tickets. The design process covered wireframing to high-fidelity design. The final design enables users to easily find and purchase tickets according to their preferences in a faster and more convenient way.",
        image: "/eztix.png",
       technologies: ["Figma", "Balsamiq"],
        category: "UI/UX Designer",
        featured: true,
           links: [
            { type: "figma", url: "https://www.figma.com/design/2fAKhML1fIMu04ZkTogNOh/Eztix-App?node-id=0-1&t=s44NlBOqd6ecJ3Z6-1" }
          ]
      },
        {
        title: "Copalone",
        description:
          "Designed a forum-based application with the concept of support group therapy, allowing users to share stories and provide support anonymously. The app creates a safe space for users to interact and receive emotional support without the need for face-to-face meetings.",
        image: "/copalone.png",
        technologies: ["Figma", "Balsamiq"],
        category: "UI/UX Designer",
        featured: false,
        links: [
            { type: "figma", url: "https://www.figma.com/design/sjuQiUHDGRrtoEe4IM50Je/Copalone?node-id=0-1&t=3E8bRlXxdFNNZ8hz-1" }
          ]
      },
         {
        title: "Growit",
        description:
          "Designed a simple yet elegant interface for Growit, a web-based dashboard that provides features for user financial recording and reporting. The design emphasizes ease of use and clarity of information.",
        image: "/growit.png",
        technologies: ["Figma", "Balsamiq"],
        category: "UI/UX Designer",
        featured: false,
       links: [
            { type: "figma", url: "https://www.figma.com/design/ahyVVvQPI4h04jeot3FqBD/Growit?node-id=0-1&t=1vnfLfHFBLy4JA3A-1" }
          ]
      },
        {
        title: "FoodKu",
        description:
          "Designed Foodku, a mobile application for online restaurant food ordering. The app simplifies the process, allowing users to order and enjoy meals without visiting the restaurant in person.",
        image: "/foodku.png",
          technologies: ["Figma", "Balsamiq"],
        category: "UI/UX Designer",
        featured: false,
        links: [
            { type: "figma", url: "https://www.figma.com/design/KW74qmSlYXM3UGTC5RKrjF/FoodKu?node-id=0-1&t=PkkEZCLhTGv2Gpmw-1" }
          ]
      },
       {
        title: "Sushi Pan",
        description:
          "Created a modern, interactive, and responsive landing page design for SushiPan restaurant. The design focuses on user-friendly navigation, easy menu browsing, and a clear call-to-action to boost online order conversions.",
        image: "/sushi.png",
        technologies: ["Figma"],
        category: "UI/UX Designer",
        featured: false,
          links: []
      },
       {
        title: "HouseFi",
        description:
          "Designed a landing page for HouseFi, a real estate platform focused on home sales. The design highlights easy property search, modern visuals, and clear information to help users find homes that match their needs.",
        image: "/house.png",
         technologies: ["Figma"],
        category: "UI/UX Designer",
        featured: false,
          links: []
      },
    ],
  },
  id: {
    title: "Proyek Unggulan",
    subtitle: "Showcase karya terbaru dan proyek personal saya",
    viewDetails: "Lihat Detail",
    projects: [
      {
        title: "Menentukan Kualitas Susu",
        description:
          "Aplikasi prediksi kualitas susu berbasis web menggunakan algoritma Random Forest, dilengkapi dengan pelacakan riwayat, manajemen data mitra, dan input Excel/manual, dirancang untuk membantu pabrik Milkta Gemilang meningkatkan efisiensi dan akurasi dalam pengendalian kualitas.",
        image: "/milk.png",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
        category: "Full Stack",
        featured: true,
         links: [
            { type: "github", url: "https://github.com/githanirz/projectmilkquality" }
          ]
      },
      {
        title: "Aplikasi Makan",
        description:
          "Aplikasi berbasis web untuk pemesanan meja restoran secara online, yang memudahkan pengguna dalam mendapatkan meja sesuai kebutuhan. Sistem ini dilengkapi dengan fitur pemesanan meja, pemilihan menu makanan, serta pilihan chef, sehingga memberikan pengalaman reservasi yang praktis, personal, dan efisien.",
        image: "/foody.png",
        technologies: ["Vue.js", "Express.js", "Socket.io", "MongoDB"],
        category: "Aplikasi Web",
        featured: true,
         links: [
            { type: "github", url: "https://github.com/githanirz/Book-Restaurant" }
          ]
      },
      {
        title: "Sistem Manajemen Pembelajaran",
        description:
          "Merancang aplikasi Learning Management System (LMS) berbasis mobile untuk memudahkan siswa dalam mengakses materi pembelajaran langsung melalui smartphone. Proyek ini mencakup pembuatan design system yang lengkap, wireframe, mockup, dan prototipe interaktif.",
        image: "/lms.png",
      technologies: ["Figma", "Miro"],
        category: "UI/UX Designer",
        featured: false,
          links: [
            { type: "figma", url: "https://www.figma.com/design/LDO17Op7xDlqXsBNi1VxlW/LMS-Kobi-Education?node-id=1-18470&t=QhIczJwGK2zEDzJ6-1" }
          ]
      },
      {
        title: "Mendesain Ulang Website Kobi Education",
        description:
          "Melakukan redesain website Kobi Education dengan fokus pada penyederhanaan alur navigasi dan peningkatan interaktivitas. Desain baru ini memudahkan pengguna dalam menemukan informasi terkait beasiswa dengan lebih cepat dan efisien, sekaligus menghadirkan pengalaman yang lebih jelas, ringkas, dan menarik.",
        image: "/webkobi.png",
       technologies: ["Figma", "Miro"],
        category: "UI/UX Designer",
        featured: false,
          links: [
            { type: "figma", url: "https://www.figma.com/design/qYH6dgCqZG4IarFwuQO2Yg/Redesign-Website?node-id=0-1&t=N9DVzVId3rbwMDcI-1" }
          ]
      },
      {
        title: "Eztix.id",
        description:
          "Merancang website Eztix.id, sebuah platform pembelian tiket event secara online. Proses desain dimulai dari pembuatan wireframe hingga high-fidelity design, dengan fokus pada kemudahan navigasi dan pengalaman pengguna. Desain ini membantu pengguna menemukan dan membeli tiket sesuai kebutuhan mereka dengan lebih cepat dan praktis.",
        image: "/eztix.png",
       technologies: ["Figma", "Balsamiq"],
        category: "Backend",
        featured: false,
         links: [
            { type: "figma", url: "https://www.figma.com/design/2fAKhML1fIMu04ZkTogNOh/Eztix-App?node-id=0-1&t=s44NlBOqd6ecJ3Z6-1" }
          ]
      },
         {
        title: "Copalone",
        description:
          "Merancang aplikasi forum berbasis konsep support group therapy yang memungkinkan pengguna berbagi cerita dan memberikan dukungan secara anonim. Aplikasi ini menghadirkan ruang aman bagi pengguna untuk saling berinteraksi dan mendapatkan dukungan emosional tanpa harus bertemu langsung.",
        image: "/copalone.png",
       technologies: ["Figma", "Balsamiq"],
        category: "UI/UX Designer",
        featured: false,
        links: [
            { type: "figma", url: "https://www.figma.com/design/sjuQiUHDGRrtoEe4IM50Je/Copalone?node-id=0-1&t=3E8bRlXxdFNNZ8hz-1" }
          ]
      },
      {
        title: "Growit",
        description:
          "Merancang antarmuka sederhana namun elegan untuk Growit, sebuah dashboard berbasis web yang menyediakan fitur pencatatan dan pelaporan keuangan pengguna. Desain difokuskan pada kemudahan penggunaan dan kejelasan informasi.",
        image: "/mobile-banking-app.png",
     technologies: ["Figma", "Balsamiq"],
        category: "UI/UX Designer",
        featured: false,
         links: [
            { type: "figma", url: "https://www.figma.com/design/ahyVVvQPI4h04jeot3FqBD/Growit?node-id=0-1&t=1vnfLfHFBLy4JA3A-1" }
          ]
      },
       {
        title: "FoodKu",
        description:
          "Merancang antarmuka sederhana namun elegan untuk Growit, sebuah dashboard berbasis web yang menyediakan fitur pencatatan dan pelaporan keuangan pengguna. Desain difokuskan pada kemudahan penggunaan dan kejelasan informasi.",
        image: "/mobile-banking-app.png",
     technologies: ["Figma", "Balsamiq"],
        category: "UI/UX Designer",
        featured: false,
          links: [
            { type: "figma", url: "https://www.figma.com/design/KW74qmSlYXM3UGTC5RKrjF/FoodKu?node-id=0-1&t=PkkEZCLhTGv2Gpmw-1" }
          ]
      },
       {
        title: "Sushi Pan",
        description:
          "Membuat desain landing page untuk restoran SushiPan dengan tampilan modern, interaktif, dan responsif. Desain difokuskan pada kemudahan pengguna dalam melihat menu, melakukan pemesanan, serta mendorong peningkatan konversi pesanan online.",
        image: "/sushi.png",
        technologies: ["Figma"],
        category: "UI/UX Designer",
        featured: false,
          links: []
      },
       {
        title: "HouseFi",
        description:
          "Mendesain landing page untuk platform HouseFi yang berfokus pada penjualan rumah. Desain menonjolkan pencarian properti yang mudah, tampilan modern, serta informasi yang jelas untuk membantu pengguna menemukan rumah sesuai kebutuhan mereka.",
        image: "/house.png",
         technologies: ["Figma"],
        category: "UI/UX Designer",
        featured: false,
          links: []
      },
      
    ],
  },
}

export function ProjectsSection({ language }: ProjectsSectionProps) {
  const [filter, setFilter] = useState("all")
  const t = translations[language]

  const categories = ["all", "Featured", "Web App", "UI/UX Designer"]
  const filteredProjects =
  filter === "all"
    ? t.projects
    : filter === "Featured"
    ? t.projects.filter((project) => project.featured)
    : t.projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">{t.subtitle}</p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className="capitalize"
            >
              {category === "all" ? (language === "en" ? "All" : "Semua") : category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary">
                    {language === "en" ? "Featured" : "Unggulan"}
                  </Badge>
                )}
              </div>

              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="group-hover:text-primary transition-colors leading-snug pr-4">{project.title}</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

            <div className="">
              {project.links.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button
                variant="outline"
                size="sm"
                className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
              >
                {link.type === "figma"
                  ? "View on Figma"
                  : link.type === "github"
                  ? "View on GitHub"
                  : "View Demo"}
              </Button>
              </a>
                ))}
              </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
