"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function SculpturesPage() {
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-black dark:text-white transition-colors duration-500">
      <header className="border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back</span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-light tracking-tight">
              Sculptures
            </h1>
          </div>
          
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon size={20} className="text-neutral-700" />
            ) : (
              <Sun size={20} className="text-neutral-300" />
            )}
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="text-6xl mb-8 opacity-20">🗿</div>
          <h2 className="text-3xl font-light text-slate-700 dark:text-slate-300">
            Coming Soon
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Sculpture collection is currently being curated
          </p>
        </div>
      </main>
    </div>
  )
}
