"use client"

import { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, Moon, Sun, ChevronDown, X } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

function PaintingsContent() {
  const [mounted, setMounted] = useState(false)
  const [selectedYear, setSelectedYear] = useState<string | null>(null)
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<typeof allArtworks[0] | null>(null)
  const { theme, toggleTheme } = useTheme()
  const searchParams = useSearchParams()

  useEffect(() => {
    setMounted(true)
    const yearParam = searchParams.get("year")
    if (yearParam) {
      setSelectedYear(yearParam)
    }
  }, [searchParams])

  if (!mounted) {
    return null
  }

  const years = [
    { year: "2026", count: 7 },
    { year: "2024", count: 6 },
    { year: "2023", count: 5 },
    { year: "2022", count: 6 },
  ]

  const allArtworks = [
    {
      id: 101,
      title: "Early Summer",
      medium: "oil, acrylic, and collage on wood",
      dimensions: "50x50cm",
      year: 2026,
      image: "https://3gudmi3d2n.ucarecd.net/01b71099-d0d2-4282-a03f-9bb8fffe47ee/4Finalcopy.png",
    },
    {
      id: 102,
      title: "Untitle",
      medium: "Oil, acrylic, and fabric on canvas",
      dimensions: "60 x 81cm",
      year: 2026,
      image: "https://3gudmi3d2n.ucarecd.net/fd8a2771-e502-417a-bc4f-03dc09c5f385/7nenfreal.png",
    },
    {
      id: 103,
      title: "Late Summer",
      medium: "Oil, and acrylic on canvas",
      dimensions: "54 x 65cm",
      year: 2026,
      image: "https://3gudmi3d2n.ucarecd.net/9ef9f6af-60c0-4886-8d87-c38ea340f25c/2nenreal.png",
    },
    {
      id: 104,
      title: "Untitle",
      medium: "Oil, acrylic, and fabric on canvas",
      dimensions: "54 x 65 cm",
      year: 2026,
      image: "https://3gudmi3d2n.ucarecd.net/31fca27e-2b70-4706-b978-284cc3d4f7b8/6final.png",
    },
    {
      id: 105,
      title: "Early spring",
      medium: "oil, acrylic, and collage on wood",
      dimensions: "46x61cm",
      year: 2026,
      image: "https://3gudmi3d2n.ucarecd.net/cf60515f-7f19-464b-a3d8-191308956ede/Final3nenreal.png",
    },
    {
      id: 106,
      title: "Contrast",
      medium: "Oil, and acrylic on canvas",
      dimensions: "54x65cm",
      year: 2026,
      image: "https://3gudmi3d2n.ucarecd.net/91162681-c7fd-4a36-b835-5188e9db3980/5nenreal.png",
    },
    {
      id: 107,
      title: "Late spring",
      medium: "oil, acrylic, and collage on wood",
      dimensions: "46x61cm",
      year: 2026,
      image: "https://3gudmi3d2n.ucarecd.net/a24bb26e-4e35-4d03-a249-4aec32b9a7ba/FinalUpIG.png",
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
      id: 11,
      title: "Hanoi Saigon Paris",
      medium: "Oil on canvas",
      dimensions: "80 × 72 inches",
      year: 2024,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748893/HanoiSaigonParis_uxcp9c.jpg",
    },
    {
      id: 12,
      title: "Dutch landscape",
      medium: "Oil on canvas",
      dimensions: "9 × 12 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1767021112/g_vte462.png",
    },
    {
      id: 11,
      
      title: "Tiếng Việt(Vietnamese)",
      medium: "Oil on wood panels",
      dimensions: "5.4ft x 7.3 ft x 7/8",
      year: 2024,
      image: "https://3gudmi3d2n.ucarecd.net/9e279404-b45d-4742-a121-b3dc8d035dc1/TiengViet(Vietnamese).jpg",
    },
    {
      id: 11,
      
      title: "Napalm Bombs",
      medium: "Acrylic, Oil, Colored Pencils, Collage, and Colored Frog Tape on Wood Panel",
      dimensions: "64\"x38\"x2\" (162.5cm x 96.5cm x 5cm)",
      year: 2024,
      image: "https://3gudmi3d2n.ucarecd.net/e0ec3498-3d43-4e56-9843-3ba4e371d9cf/Painting1.jpg",
    },
    {
      id: 13,
      title: "Targeting Hanoi",
      medium: "Acrylic, Watercolor, and photo transfer on paper",
      dimensions: "12 x 9 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1767021112/up_hinh_ig2-7_k77aae.jpg",
    },
    {
      id: 14,
      title: "Groningen",
      medium: "Lithography",
      dimensions: "16 × 12 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1767021114/Groningen_View_gnjg1u.png",
    },
    {
      id: 15,
      title: "Dutch Windmill",
      medium: "Woodcut",
      dimensions: "12 × 9 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1767021110/z4721074719020_477ded44f22bff59b8478e9f5719acd8_rt2gar.jpg",
    },
    {
      id: 16,
      title: "Tulips",
      medium: "Lithography",
      dimensions: "15 × 25 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1767021115/up_hinh_ig_cp8b0k.jpg",
    },
    {
      id: 24,
      title: "Bathroom",
      medium: "Pencil, water color, and gouache on paper",
      dimensions: "20 x 16 inches",
      year: 2022,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1767021123/Bathroom_fz2ajg.jpg",
    },
    {
      id: 25,
      title: "Desk",
      medium: "Pencil, water color, and gouache on paper",
      dimensions: "20 x 16 inches",
      year: 2022,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1767021124/Desk_csm5fg.jpg",
    },
    {
      id: 26,
      title: "Studying",
      medium: "Pencil, water color, and gouache on paper",
      dimensions: "20 x 16 inches",
      year: 2022,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1767021122/Study_lbdgrc.jpg",
    },
    {
      id: 27,
      title: "Table 2",
      medium: "Pencil, water color, and gouache on paper",
      dimensions: "20 x 16 inches",
      year: 2022,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1767021125/Table2_zml7m0.jpg",
    },
    {
      id: 28,
      title: "Table",
      medium: "Pencil, water color, and gouache on paper",
      dimensions: "20 x 16 inches",
      year: 2022,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1767021126/Table_ps8ovn.jpg",
    },
    {
      id: 29,
      title: "Untitle",
      medium: "Pencil, water color, and gouache on paper",
      dimensions: "20 x 16 inches",
      year: 2022,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1767021122/z4241283384530_8b7d5007bb727b10f271ea13e792ea68_o7v3mu.jpg",
    },
  ]

  const displayedArtworks = selectedYear
    ? allArtworks.filter((artwork) => artwork.year.toString() === selectedYear)
    : allArtworks

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-neutral-950 text-black dark:text-white transition-colors duration-500">
        {/* Header */}
        <header className="border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium">Back</span>
              </Link>
              <h1 className="text-2xl md:text-3xl font-light tracking-tight">
                Paintings
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

          {/* Year Filter */}
          <div className="mt-6 flex items-center gap-3 flex-wrap">
            {years.map((yearItem) => (
              <button
                key={yearItem.year}
                onClick={() => setSelectedYear(yearItem.year)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedYear === yearItem.year
                    ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                }`}
              >
                {yearItem.year}
              </button>
            ))}
            <button
              onClick={() => setSelectedYear(null)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                !selectedYear
                  ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900"
                  : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              }`}
            >
              All
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-12 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Masonry Grid - Smaller items */}
          <div className="columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-3">
            {displayedArtworks.map((artwork) => (
              <div
                key={artwork.id}
                className="break-inside-avoid mb-3"
              >
                <div 
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(artwork)}
                >
                  <div className="relative overflow-hidden rounded bg-neutral-100 dark:bg-neutral-900">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-auto object-cover hover:opacity-90 transition-opacity duration-300"
                    />
                  </div>
                  <div className="mt-1.5 px-0.5">
                    <p className="text-xs font-medium text-neutral-900 dark:text-neutral-100 line-clamp-1">
                      {artwork.title}
                    </p>
                    <p className="text-[10px] text-neutral-500 dark:text-neutral-400">
                      {artwork.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {displayedArtworks.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-500 dark:text-neutral-400">No artworks found for this year</p>
            </div>
          )}
        </div>
      </main>
    </div>

    {/* Fullscreen Image Modal */}
    {selectedImage && (
      <div 
        className="fixed inset-0 z-50 bg-white dark:bg-neutral-950 flex items-center justify-center p-4"
        onClick={() => setSelectedImage(null)}
      >
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white transition-colors z-10"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        
        <div className="max-w-7xl max-h-full flex flex-col items-center justify-center gap-4">
          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="text-center text-neutral-900 dark:text-white" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-medium mb-2">{selectedImage.title}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{selectedImage.medium}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{selectedImage.dimensions}</p>
            <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">{selectedImage.year}</p>
          </div>
        </div>
      </div>
    )}
  </>
  )
}

export default function PaintingsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white dark:bg-neutral-950" />}>
      <PaintingsContent />
    </Suspense>
  )
}
