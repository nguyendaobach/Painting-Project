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
              <h2 className="text-3xl md:text-4xl font-light text-slate-800 dark:text-slate-200">
                Minh Doan
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p className="text-lg">
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

            {/* Education & Exhibitions */}
            <section className="grid md:grid-cols-2 gap-8 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200">Education</h3>
                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <div>
                    <p className="font-medium text-slate-700 dark:text-slate-300">MFA in Fine Arts</p>
                    <p>School of Visual Arts, 2020</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-700 dark:text-slate-300">BFA in Painting</p>
                    <p>Hanoi University of Fine Arts, 2018</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200">Recent Exhibitions</h3>
                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <div>
                    <p className="font-medium text-slate-700 dark:text-slate-300">Recent Works, 2025</p>
                    <p>Gallery Name, New York</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-700 dark:text-slate-300">New Works, 2024</p>
                    <p>Gallery Name, New York</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-700 dark:text-slate-300">Reflections, 2023</p>
                    <p>Contemporary Art Space, Brooklyn</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Info */}
            <section className="pt-8 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <MapPin size={20} className="text-slate-400 dark:text-slate-500" />
                  <span>Based in Hanoi, Vietnam</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <Mail size={20} className="text-slate-400 dark:text-slate-500" />
                  <a 
                    href="mailto:contact@minhdoan.art"
                    className="hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    contact@minhdoan.art
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <Instagram size={20} className="text-slate-400 dark:text-slate-500" />
                  <a 
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    @minhdoan.art
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
