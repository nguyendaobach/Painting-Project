"use client"

import Link from "next/link"
import { Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/50 dark:border-neutral-800/50 bg-white/50 dark:bg-neutral-950/50 backdrop-blur-md py-8 mt-auto w-full transition-colors duration-500">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-neutral-500 dark:text-neutral-400">
        
        {/* Left Side: Copyright Notice */}
        <div className="text-center md:text-left">
          <p>© {new Date().getFullYear()} Minh Doan. All rights reserved.</p>
        </div>

        {/* Right Side: Links & Social */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link 
            href="/terms" 
            className="hover:text-black dark:hover:text-white transition-colors underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-black dark:hover:decoration-white"
          >
            Terms of Use & Copyright Statement
          </Link>
          <a
            href="https://www.instagram.com/m1nhhhhhhhh/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-black dark:hover:text-white transition-colors"
            aria-label="Instagram Profile"
          >
            <Instagram size={14} className="md:w-4 md:h-4" />
            <span>Instagram</span>
          </a>
        </div>

      </div>
    </footer>
  )
}
