"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Moon, Sun, Mail, MapPin, Instagram, Send } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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
              Contact
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
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-light text-slate-800 dark:text-slate-200 mb-6">
                Get in Touch
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Interested in my work? I'd love to hear from you. Whether you're looking to commission 
                a piece, collaborate, or just want to say hello, feel free to reach out.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-200 dark:bg-slate-800 rounded-lg">
                  <Mail size={20} className="text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200 mb-1">Email</p>
                  <a 
                    href="mailto:contact@minhdoan.art"
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    contact@minhdoan.art
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-200 dark:bg-slate-800 rounded-lg">
                  <MapPin size={20} className="text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200 mb-1">Studio</p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Hanoi, Vietnam
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-200 dark:bg-slate-800 rounded-lg">
                  <Instagram size={20} className="text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200 mb-1">Social</p>
                  <a 
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    @minhdoan.art
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Available for commissions, exhibitions, and collaborations
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600 transition-all"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 py-3 px-6 rounded-lg 
                         font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-300 
                         flex items-center justify-center gap-2 hover:shadow-lg group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
