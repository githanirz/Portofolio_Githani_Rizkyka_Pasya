"use client"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

interface LanguageToggleProps {
  onLanguageChange: (lang: "en" | "id") => void
  currentLanguage: "en" | "id"
}

export function LanguageToggle({ onLanguageChange, currentLanguage }: LanguageToggleProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => onLanguageChange(currentLanguage === "en" ? "id" : "en")}
      className="gap-2"
    >
      <Globe className="h-4 w-4" />
      {currentLanguage === "en" ? "ID" : "EN"}
    </Button>
  )
}
