"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function ArchivesPage() {
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
              Archives
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
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="text-6xl mb-8 opacity-20">📚</div>
          <h2 className="text-3xl font-light text-slate-700 dark:text-slate-300">
            Coming Soon
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Archives and historical works are being organized
          </p>
        </div>
      </main>
    </div>
  )
}
