"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Instagram, Moon, Sun, X } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [mounted, setMounted] = useState(false)
  const [selectedArtwork, setSelectedArtwork] = useState<number | null>(null)
  const [fullscreenArtwork, setFullscreenArtwork] = useState<number | null>(null)
  const [selectedExhibitionYear, setSelectedExhibitionYear] = useState<string | null>(null)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const artworks = [
    {
      id: 1,
      title: "009",
      medium: "Oil on canvas",
      dimensions: "84 × 76 inches",
      year: 2025,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748875/009_vxftes.jpg",
    },
    {
      id: 2,
      title: "062",
      medium: "Oil on canvas",
      dimensions: "80 × 72 inches",
      year: 2025,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748875/062_jd4xye.jpg",
    },
    {
      id: 3,
      title: "006",
      medium: "Oil on canvas",
      dimensions: "82 × 74 inches",
      year: 2025,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748875/006_trqdvi.jpg",
    },
    {
      id: 4,
      title: "060",
      medium: "Oil on canvas",
      dimensions: "78 × 70 inches",
      year: 2025,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748876/060_qlzhik.jpg",
    },
    {
      id: 5,
      title: "005",
      medium: "Oil on canvas",
      dimensions: "80 × 72 inches",
      year: 2025,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748875/005_ve5spp.jpg",
    },
    {
      id: 6,
      title: "Oral History and Written History",
      medium: "Oil on canvas",
      dimensions: "84 × 76 inches",
      year: 2024,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748895/Oral_History_and_Written_History_vdxb2v.jpg",
    },
    {
      id: 7,
      title: "B52",
      medium: "Oil on canvas",
      dimensions: "80 × 72 inches",
      year: 2024,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748889/B52_l9qij3.jpg",
    },
    {
      id: 8,
      title: "Boeing",
      medium: "Oil on canvas",
      dimensions: "78 × 70 inches",
      year: 2024,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748891/Boeing_thom1l.jpg",
    },
    {
      id: 9,
      title: "Radar",
      medium: "Oil on canvas",
      dimensions: "76 × 68 inches",
      year: 2024,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748892/Radar_rcm5ce.jpg",
    },
    {
      id: 10,
      title: "Linebacker 1972",
      medium: "Oil on canvas",
      dimensions: "82 × 74 inches",
      year: 2024,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748892/Linebacker1972_damofk.jpg",
    },
    {
      id: 10,
      title: "Hanoi Saigon Paris",
      medium: "Oil on canvas",
      dimensions: "80 × 72 inches",
      year: 2024,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748893/HanoiSaigonParis_uxcp9c.jpg",
    },
    {
      id: 11,
      title: "Linebacker",
      medium: "Oil on canvas",
      dimensions: "84 × 78 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748888/Linebacker_aozveh.jpg",
    },
    {
      id: 12,
      title: "Paris 1973",
      medium: "Oil on canvas",
      dimensions: "76 × 64 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748888/Paris_1973_gzj6jb.jpg",
    },
    {
      id: 13,
      title: "Bamboo",
      medium: "Oil on canvas",
      dimensions: "80 × 72 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748887/Bamboo_z3btzb.jpg",
    },
    {
      id: 14,
      title: "Uncle X's Good Boy",
      medium: "Oil on canvas",
      dimensions: "76 × 68 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748887/Uncle_X_s_Good_Boy_dbmlum.jpg",
    },
    {
      id: 15,
      title: "This Whole War Is Bullshit",
      medium: "Oil on canvas",
      dimensions: "80 × 70 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748887/This_whole_war_is_bullshit_mbocuq.jpg",
    },
    {
      id: 16,
      title: "The Red River (or a red river)",
      medium: "Oil on canvas",
      dimensions: "84 × 76 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748886/The_Red_River_or_a_red_river_wvaa3i.jpg",
    },
    {
      id: 17,
      title: "1965-1975",
      medium: "Oil on canvas",
      dimensions: "78 × 72 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748880/1965-1975_ufo07l.jpg",
    },
    {
      id: 18,
      title: "Money, Aren't We All",
      medium: "Oil on canvas",
      dimensions: "80 × 68 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748879/Money_Aren_t_We_All_ruas6v.jpg",
    },
    {
      id: 19,
      title: "The Rear",
      medium: "Oil on canvas",
      dimensions: "76 × 70 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748878/The_Rear_fqwaob.jpg",
    },
    {
      id: 20,
      title: "The Target",
      medium: "Oil on canvas",
      dimensions: "82 × 74 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748878/The_Target_udymp4.jpg",
    },
    {
      id: 21,
      title: "New2",
      medium: "Oil on canvas",
      dimensions: "78 × 66 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748877/New2_uugnfr.jpg",
    },
    {
      id: 22,
      title: "My Hometown",
      medium: "Oil on canvas",
      dimensions: "80 × 70 inches",
      year: 2022,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748877/My_Hometown_vy79w4.jpg",
    },
    {
      id: 23,
      title: "My Table",
      medium: "Oil on canvas",
      dimensions: "76 × 68 inches",
      year: 2022,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748877/My_Table_w0ysys.jpg",
    },
    {
      id: 24,
      title: "My Kitchen",
      medium: "Oil on canvas",
      dimensions: "78 × 66 inches",
      year: 2022,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748876/My_Kitchen_a7zawj.jpg",
    },
  ]

  const navigationItems = [
    { label: "HOME", id: "home" },
    { label: "PAINTINGS", id: "paintings" },
    { label: "SOLO EXHIBITIONS", id: "exhibitions" },
    { label: "ON VIEW", id: "onview" },
    { label: "PUBLIC ART", id: "publicart" },
    { label: "EVENTS", id: "events" },
    { label: "PUBLICATIONS", id: "publications" },
    { label: "CV", id: "cv" },
    { label: "ABOUT", id: "about" },
    { label: "CONTACT", id: "contact" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-black dark:text-white transition-colors duration-300">
      {fullscreenArtwork && (
        <div className="fixed top-0 right-0 bottom-0 z-50 w-[calc(100%-16rem)] bg-white dark:bg-slate-950 flex items-center justify-center p-8 overflow-y-auto">
          {/* Close button */}
          <button
            onClick={() => setFullscreenArtwork(null)}
            className="absolute top-8 right-8 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-10"
            aria-label="Close"
          >
            <X size={24} className="text-black dark:text-white" />
          </button>

          {/* Main image - centered and large */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-full max-w-3xl aspect-square">
              <Image
                src={artworks.find((a) => a.id === fullscreenArtwork)?.image || ""}
                alt={artworks.find((a) => a.id === fullscreenArtwork)?.title || ""}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="absolute bottom-8 right-8 bg-white dark:bg-slate-900 p-6 rounded-sm shadow-lg max-w-xs">
              <h2 className="text-lg font-light mb-3">{artworks.find((a) => a.id === fullscreenArtwork)?.title}</h2>
              <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <p>{artworks.find((a) => a.id === fullscreenArtwork)?.medium}</p>
                <p>{artworks.find((a) => a.id === fullscreenArtwork)?.dimensions}</p>
                <p>{artworks.find((a) => a.id === fullscreenArtwork)?.year}</p>
              </div>

              {/* Navigation and thumbnails */}
              <div className="mt-4 space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-2 text-xs">
                  <button
                    onClick={() => {
                      const currentIndex = artworks.findIndex((a) => a.id === fullscreenArtwork)
                      const prevIndex = currentIndex === 0 ? artworks.length - 1 : currentIndex - 1
                      setFullscreenArtwork(artworks[prevIndex].id)
                    }}
                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    prev
                  </button>
                  <span className="text-gray-400 dark:text-gray-600">/</span>
                  <button
                    onClick={() => {
                      const currentIndex = artworks.findIndex((a) => a.id === fullscreenArtwork)
                      const nextIndex = currentIndex === artworks.length - 1 ? 0 : currentIndex + 1
                      setFullscreenArtwork(artworks[nextIndex].id)
                    }}
                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    next
                  </button>
                </div>
                {/* <button className="text-xs text-orange-600 dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400 transition-colors">
                  show thumbnails
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-64 p-12 flex flex-col justify-between min-h-screen border-r border-gray-200 dark:border-gray-800">
          {/* Header with Theme Toggle */}
          <div>
            <div className="flex items-start justify-between mb-12">
              <h1 className="text-3xl font-light tracking-tight">
                <div>MINH</div>
                <div>DOAN</div>
              </h1>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === "light" ? (
                  <Moon size={20} className="text-gray-600 dark:text-gray-400" />
                ) : (
                  <Sun size={20} className="text-gray-400" />
                )}
              </button>
            </div>

            {/* Navigation */}
            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`block text-sm tracking-wide transition-colors ${
                    activeSection === item.id
                      ? "text-black dark:text-white font-medium"
                      : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex justify-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} strokeWidth={1.5} />
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 p-8 ${fullscreenArtwork ? "hidden" : ""}`}>
          <div className="w-full max-w-full">
            {activeSection === "home" && (
              <div className="relative w-full h-[calc(100vh-4rem)] flex items-center justify-center">
                {/* Main Image */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={artworks[currentSlideIndex]?.image || "/placeholder.svg"}
                    alt={artworks[currentSlideIndex]?.title || ""}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={() => setCurrentSlideIndex((prev) => (prev === 0 ? artworks.length - 1 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800 transition-colors backdrop-blur-sm z-10"
                  aria-label="Previous image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>

                <button
                  onClick={() => setCurrentSlideIndex((prev) => (prev === artworks.length - 1 ? 0 : prev + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800 transition-colors backdrop-blur-sm z-10"
                  aria-label="Next image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                {/* Image Info */}
                <div className="absolute bottom-8 left-8 bg-white/90 dark:bg-slate-900/90 p-4 rounded-sm backdrop-blur-sm max-w-xs">
                  <p className="text-sm font-medium mb-1">{artworks[currentSlideIndex]?.title}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{artworks[currentSlideIndex]?.medium}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{artworks[currentSlideIndex]?.year}</p>
                </div>

                {/* Slide Counter */}
                <div className="absolute bottom-8 right-8 bg-white/90 dark:bg-slate-900/90 px-3 py-2 rounded-sm backdrop-blur-sm">
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {currentSlideIndex + 1} / {artworks.length}
                  </p>
                </div>
              </div>
            )}

            {activeSection === "paintings" && (
              <div className="space-y-8">
                <h2 className="text-2xl font-light">Paintings</h2>
                <div className="columns-2 md:columns-3 lg:columns-5 xl:columns-6 gap-3">
                  {artworks.map((artwork) => (
                    <button
                      key={artwork.id}
                      onClick={() => setFullscreenArtwork(artwork.id)}
                      className="group break-inside-avoid mb-3 w-full text-left hover:opacity-75 transition-opacity"
                    >
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-sm overflow-hidden relative w-full">
                        <Image
                          src={artwork.image || "/placeholder.svg"}
                          alt={artwork.title}
                          width={250}
                          height={250}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <div className="mt-2 space-y-0.5">
                        <p className="text-xs font-medium line-clamp-1">{artwork.title}</p>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">
                          {artwork.year}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "exhibitions" && (
              <div className="space-y-8">
                <h2 className="text-2xl font-light">Solo Exhibitions</h2>
                
                {!selectedExhibitionYear ? (
                  <div className="space-y-6">
                    {[
                      { year: "2025", title: "Recent Works", venue: "Gallery Name, New York" },
                      { year: "2024", title: "New Works", venue: "Gallery Name, New York" },
                      { year: "2023", title: "Reflections", venue: "Contemporary Art Space, Brooklyn" },
                      { year: "2022", title: "Perspectives", venue: "Modern Gallery, Manhattan" },
                    ].map((ex, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedExhibitionYear(ex.year)}
                        className="w-full text-left border-b border-gray-200 dark:border-gray-800 pb-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors px-2 -mx-2 rounded"
                      >
                        <p className="text-sm text-gray-500 dark:text-gray-400">{ex.year}</p>
                        <p className="font-medium">{ex.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{ex.venue}</p>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() => setSelectedExhibitionYear(null)}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white mb-6 flex items-center gap-2"
                    >
                      ← Back to exhibitions
                    </button>
                    
                    <div className="mb-6">
                      <p className="text-sm text-gray-500 dark:text-gray-400">{selectedExhibitionYear}</p>
                      <p className="font-medium text-lg">
                        {selectedExhibitionYear === "2025" && "Recent Works"}
                        {selectedExhibitionYear === "2024" && "New Works"}
                        {selectedExhibitionYear === "2023" && "Reflections"}
                        {selectedExhibitionYear === "2022" && "Perspectives"}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {selectedExhibitionYear === "2025" && "Gallery Name, New York"}
                        {selectedExhibitionYear === "2024" && "Gallery Name, New York"}
                        {selectedExhibitionYear === "2023" && "Contemporary Art Space, Brooklyn"}
                        {selectedExhibitionYear === "2022" && "Modern Gallery, Manhattan"}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 justify-items-start">
                      {artworks
                        .filter((artwork) => artwork.year.toString() === selectedExhibitionYear)
                        .map((artwork) => (
                          <button
                            key={artwork.id}
                            onClick={() => setFullscreenArtwork(artwork.id)}
                            className="group w-full max-w-[200px] text-left hover:opacity-90 transition-opacity"
                          >
                            <div className="bg-gray-50 dark:bg-gray-900 overflow-hidden relative w-full">
                              <Image
                                src={artwork.image || "/placeholder.svg"}
                                alt={artwork.title}
                                width={200}
                                height={200}
                                className="w-full h-auto object-cover"
                              />
                            </div>
                            <div className="mt-1.5 space-y-0.5">
                              <p className="text-[11px] font-medium leading-tight line-clamp-2">{artwork.title}</p>
                              <p className="text-[9px] text-gray-500 dark:text-gray-400">
                                {artwork.year}
                              </p>
                            </div>
                          </button>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeSection === "about" && (
              <div className="space-y-6 max-w-xl">
                <h2 className="text-2xl font-light">About</h2>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  Minh Doan is a contemporary visual artist whose work explores the intersection of abstraction, 
                  color, and geometric forms. Through vibrant compositions and dynamic use of space, the work 
                  invites viewers into a dialogue between structure and spontaneity.
                </p>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  Working primarily in oil on canvas, Minh creates pieces that balance bold color palettes 
                  with intricate layering, resulting in artworks that are both visually striking and 
                  emotionally resonant.
                </p>
              </div>
            )}

            {activeSection === "contact" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-light">Contact</h2>
                <div className="space-y-3 text-sm">
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    <a
                      href="mailto:contact@minhdoan.art"
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                    >
                      contact@minhdoan.art
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">Studio:</span> Hanoi, Vietnam
                  </p>
                  <p>
                    <span className="font-medium">Inquiries:</span> Available for commissions and exhibitions
                  </p>
                </div>
              </div>
            )}

            {["onview", "publicart", "events", "publications", "cv"].includes(activeSection) && (
              <div className="space-y-6">
                <h2 className="text-2xl font-light capitalize">
                  {navigationItems.find((n) => n.id === activeSection)?.label}
                </h2>
                <p className="text-gray-500 dark:text-gray-400">Coming soon</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
