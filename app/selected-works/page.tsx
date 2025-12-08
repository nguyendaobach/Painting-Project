"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function SelectedWorksPage() {
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const selectedWorks = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748875/009_vxftes.jpg",
      title: "009",
      year: 2025,
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748875/062_jd4xye.jpg",
      title: "062",
      year: 2025,
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748895/Oral_History_and_Written_History_vdxb2v.jpg",
      title: "Oral History and Written History",
      year: 2024,
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748888/Linebacker_aozveh.jpg",
      title: "Linebacker",
      year: 2023,
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748877/My_Hometown_vy79w4.jpg",
      title: "My Hometown",
      year: 2022,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 dark:from-slate-950 dark:to-slate-900 text-black dark:text-white transition-colors duration-500">
      {/* Header */}
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
              Selected Works
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

      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Grid of Selected Works */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {selectedWorks.map((work, index) => (
              <Link
                key={work.id}
                href={`/paintings?year=${work.year}`}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: mounted ? "fadeInUp 0.6s ease-out forwards" : "none",
                  opacity: mounted ? 1 : 0,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm opacity-80 mb-1">{work.year}</p>
                  <h3 className="text-xl font-light">{work.title}</h3>
                </div>
                
                {/* Hover overlay effect */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-xl transition-all duration-500 z-20" />
              </Link>
            ))}
          </div>

          {/* Bottom spacing */}
          <div className="mt-16 text-center">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Click on any work to explore more from that year
            </p>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
