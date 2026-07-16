"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Moon, Sun, Send, CheckCircle, AlertCircle } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import Footer from "@/components/footer"

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setFormStatus('success')
        setFormData({ name: "", email: "", message: "" })
      } else {
        console.error("Error from contact API:", result);
        setFormStatus('error')
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus('error')
    }
  };

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-black dark:text-white transition-colors duration-500">
      <header className="border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md sticky top-0 z-10">
        <div className="container mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors group"
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

      <main className="flex-grow container mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="max-w-3xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-12 lg:gap-16 items-start">
          {/* Bio Section */}
          <section className="space-y-6">
            <h2 className="text-xl font-light text-neutral-800 dark:text-neutral-200 border-b border-neutral-200 dark:border-neutral-800 pb-3 mb-6">
              About the Artist
            </h2>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
              <p>
                Minh Đoàn is a visual artist based in Ho Chi Minh City, Vietnam. He holds a Bachelor of Fine Arts from SUNY New Paltz. His research-driven practice investigates the intersections of the built environment, ecology, and collective memory, examining how industrialization, colonial modernism, and migration continue to shape Vietnamese cultural identity.
              </p>
              <p>
                Operating at the intersection of painting and sculpture, Đoàn constructs complex, multi-layered sculptural paintings and installations. His recent works frequently address the “diasporic gaze,” utilizing architectural cutouts and structural voids to recreate the liminal spaces of transit. Visually synthesizing geometric patterns, recurring motifs, curvilinear forms, and gestural mark-making, Minh employs complex layering techniques to collapse linear time and perspective. These spatial interventions cast shadows and function as a "theatre of memory," capturing the tension between presence, absence, and the evolving concept of homeland.
              </p>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="lg:mt-16">
             <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-100 dark:border-neutral-800/50">
              <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-6">Get in Touch</h3>
              
              {formStatus === 'success' ? (
                <div className="text-center p-4 bg-green-100 dark:bg-green-900/50 rounded-lg">
                  <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
                  <h3 className="mt-2 text-lg font-medium text-green-800 dark:text-green-200">Message Sent!</h3>
                  <p className="mt-1 text-sm text-green-700 dark:text-green-300">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-1.5">
                      Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all"
                        placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-1.5">
                      Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all"
                        placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-1.5">
                      Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-3 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all resize-none"
                        placeholder="Your message..."
                    />
                  </div>

                  {formStatus === 'error' && (
                    <div className="flex items-center gap-x-2 text-sm text-red-500 dark:text-red-400">
                      <AlertCircle className="h-4 w-4" />
                      <p>Sorry, something went wrong. Please try again.</p>
                    </div>
                  )}

                  <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-black dark:bg-white text-white dark:text-black py-2.5 px-4 rounded-md 
                               text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-300 
                               flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                    {formStatus !== 'submitting' && <Send size={16} className="group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              )}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}