"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import Footer from "@/components/footer"

export default function TermsPage() {
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-black dark:text-white transition-colors duration-500">
      {/* Header */}
      <header className="border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Works</span>
            </Link>
            <h1 className="text-xl md:text-2xl font-light tracking-tight">
              Terms & Copyright
            </h1>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300"
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

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 lg:px-12 py-12 md:py-20 max-w-4xl">
        <article className="space-y-12">
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">Terms of Use & Copyright Statement</h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Last updated: June 2026</p>
          </div>

          <div className="w-12 h-px bg-neutral-300 dark:bg-neutral-800"></div>

          <div className="space-y-8 text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm md:text-base">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-normal text-black dark:text-white">1. Intellectual Property Ownership</h3>
              <p>
                All content displayed on this website, including but not limited to images of paintings, sculptures, 
                drawings, lithographs, digital portfolios, texts, designs, code, graphics, layout, and structural arrangement, 
                is the exclusive intellectual property of the artist, <strong>Minh Doan</strong>, unless otherwise noted. 
                All rights are reserved globally.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-normal text-black dark:text-white">2. Permitted and Prohibited Uses</h3>
              <p>
                You are granted a limited, non-exclusive, non-transferable, revocable license to access and view the materials 
                on this website for personal, non-commercial, and educational purposes.
              </p>
              <div className="bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/50 dark:border-neutral-800/50 p-4 md:p-6 rounded-lg space-y-2">
                <p className="font-medium text-black dark:text-white">Specifically, you are strictly prohibited from:</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Downloading, copying, taking screenshots, or replicating images of artworks for commercial use.</li>
                  <li>Modifying, editing, cropping, altering, or creating derivative works based on the artist&apos;s creations.</li>
                  <li>Using images of the artworks for AI training, machine learning, or neural network dataset ingestion.</li>
                  <li>Redistributing, selling, licensing, renting, or exploiting any content of this site without written permission.</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-normal text-black dark:text-white">3. Attribution and Non-Commercial Sharing</h3>
              <p>
                Sharing the artist&apos;s work on social media platforms or personal blogs is permitted and encouraged 
                <strong> only</strong> under the following conditions:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Appropriate credit must be clearly given to <strong>Minh Doan</strong>.</li>
                <li>A direct link to this website or the artist&apos;s official Instagram profile (<a href="https://www.instagram.com/m1nhhhhhhhh/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black dark:hover:text-white transition-colors">@m1nhhhhhhhh</a>) must be provided.</li>
                <li>The context of sharing must remain entirely non-commercial and respectful of the original works.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-normal text-black dark:text-white">4. Inquiries, Permissions, and Commissions</h3>
              <p>
                For permission requests regarding publishing, commercial reproduction, exhibitions, press usage, or commission inquiries, 
                please reach out directly through the official Instagram handle or direct contact channels provided by the artist.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-normal text-black dark:text-white">5. Disclaimer</h3>
              <p>
                The artist reserves the right to modify these terms at any time. Continued use of this website following any revisions 
                constitutes your acceptance of the updated terms.
              </p>
            </section>

          </div>

        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
