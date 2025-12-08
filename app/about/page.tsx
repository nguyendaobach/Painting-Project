"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Moon, Sun, Mail, MapPin, Instagram } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 dark:from-slate-950 dark:to-slate-900 text-black dark:text-white transition-colors duration-500">
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md">
        <div className="container mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back</span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-light tracking-tight">
              About
            </h1>
          </div>
          
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-110"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon size={22} className="text-slate-700" />
            ) : (
              <Sun size={22} className="text-slate-300" />
            )}
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {/* Bio Section */}
            <section className="space-y-6">
              <h2 className="text-xl font-light text-slate-800 dark:text-slate-200">
                Minh Doan
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  Minh Doan is a contemporary visual artist whose work explores the intersection of abstraction, 
                  color, and geometric forms. Through vibrant compositions and dynamic use of space, the work 
                  invites viewers into a dialogue between structure and spontaneity.
                </p>
                <p>
                  Working primarily in oil on canvas, Minh creates pieces that balance bold color palettes 
                  with intricate layering, resulting in artworks that are both visually striking and 
                  emotionally resonant.
                </p>
                <p>
                  The artistic practice is rooted in exploring themes of memory, identity, and the passage 
                  of time. Each piece serves as a meditation on the human experience, translated through 
                  abstract visual language.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
