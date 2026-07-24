"use client"

import { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, Moon, Sun, ChevronDown, X } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import Footer from "@/components/footer"

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
    { year: "2026", count: 10 },
    { year: "2024", count: 8 },
    { year: "2023", count: 10 },
    { year: "2022", count: 7 },
  ]

  const allArtworks = [
    {
      id: 108,
      title: "Untitle",
      medium: "oil, acrylic, and fabric on canvas",
      dimensions: "60x81cm",
      year: 2026,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1784883426/DSC06215upwebFINALmaudep_rtjis8.jpg",
    },
    {
      id: 109,
      title: "Hybrid",
      medium: "Oil, acrylic, and fabric on canvas",
      dimensions: "60x81cm",
      year: 2026,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1784822486/DSC05940cropupweb_nz2otj.jpg",
    },
    {
      id: 110,
      title: "Untitle",
      medium: "Oil, acrylic, and fabric on canvas",
      dimensions: "54x65cm",
      year: 2026,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1784909988/DSC06232cropfinalupwebmaudep_umgfxl.jpg",
    },
    {
      id: 101,
      title: "Early Summer",
      medium: "oil, acrylic, and collage on wood",
      dimensions: "50x50cm",
      year: 2026,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1782705090/Screenshot_2026-06-29_104940_koz5h0.png",
    },
    {
      id: 102,
      title: "Untitle",
      medium: "Oil, acrylic, and fabric on canvas",
      dimensions: "60 x 81cm",
      year: 2026,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1782706225/Screenshot_2026-06-29_110949_ju31po.png",
    },
    {
      id: 103,
      title: "Late Summer",
      medium: "Oil, and acrylic on canvas",
      dimensions: "54 x 65cm",
      year: 2026,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1782705331/Screenshot_2026-06-29_105511_vcuog4.png",
    },
    {
      id: 104,
      title: "Untitle",
      medium: "Oil, and acrylic on canvas",
      dimensions: "54x65cm",
      year: 2026,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1782714913/Screenshot_2026-06-29_133450_uv8n75.png",
    },
    {
      id: 105,
      title: "Early spring",
      medium: "oil, acrylic, and collage on wood",
      dimensions: "46x61cm",
      year: 2026,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1782705472/Screenshot_2026-06-29_105625_bycvpk.png",
    },
    {
      id: 106,
      title: "Contrast",
      medium: "Oil, and acrylic on canvas",
      dimensions: "54x65cm",
      year: 2026,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1782706465/Screenshot_2026-06-29_111403_sbhmwp.png",
    },
    {
      id: 107,
      title: "Late spring",
      medium: "oil, acrylic, and collage on wood",
      dimensions: "46x61cm",
      year: 2026,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1782705613/Screenshot_2026-06-29_105951_owcqix.png",
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
      medium: "Oil and collage on wood panels",
      dimensions: "76 × 68 inches",
      year: 2024,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748892/Radar_rcm5ce.jpg",
    },
    {
      id: 10,
      title: "Linebacker 1972",
      medium: "Oil and collage on wood panels",
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
      id: 111,
      
      title: "Tiếng Việt(Vietnamese)",
      medium: "Oil on wood panels",
      dimensions: "5.4ft x 7.3 ft x 7/8",
      year: 2024,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1782705795/Screenshot_2026-06-29_110246_l8jlqb.png",
    },
    {
      id: 112,
      
      title: "Napalm Bombs",
      medium: "Acrylic, Oil, Colored Pencils, Collage, and Colored Frog Tape on Wood Panel",
      dimensions: "64\"x38\"x2\" (162.5cm x 96.5cm x 5cm)",
      year: 2024,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1782715078/Screenshot_2026-06-29_133737_qxt5wc.png",
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
      id: 17,
      title: "A little thicket, Edition 1",
      medium: "lithography and collage on paper",
      dimensions: "25cmx30cm",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1782059478/A_little_thicket_Edition_1_lithography_and_collage_on_paper_25cmx30cm_2023_sr44pp.jpg",
    },
    {
      id: 18,
      title: "A little thicket, Edition 3",
      medium: "lithography and collage on paper",
      dimensions: "25cmx30cm",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1782059479/A_little_thicket_Edition_3_lithography_and_collage_on_paper_25cmx30cm_2023.JPG_n5ct73.jpg",
    },
    {
      id: 19,
      title: "A little thicket, Edition 2",
      medium: "lithography and collage on paper",
      dimensions: "25cmx30cm",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1782059480/A_little_thicket_Edition_2_lithography_and_collage_on_paper_25cmx30cm_2023.JPG_rw9cug.jpg",
    },
    {
      id: 20,
      title: "Dutch landscape",
      medium: "Oil on canvas",
      dimensions: '9"x12"',
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1782059481/Dutch_landscape_Oil_on_canvas_9_12_inches_2023_vovqjl.jpg",
    },
    {
      id: 21,
      title: "Dresden",
      medium: "woodblock print",
      dimensions: "13cmx16cm",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1782059481/Dresden_woodblock_print_13cmx16cm_2023_bzvput.jpg",
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
    {
      id: 30,
      title: "My Kitchen",
      medium: "oil on canvas",
      dimensions: '12"x16"',
      year: 2022,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1782059353/My_Kitchen_oil_on_canvas_12_x16__2022_cpgyan.jpg",
    },
  ]

  const displayedArtworks = selectedYear
    ? allArtworks.filter((artwork) => artwork.year.toString() === selectedYear)
    : allArtworks

  return (
    <>
      <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-black dark:text-white transition-colors duration-500">
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
        <main className="flex-grow container mx-auto px-6 lg:px-12 py-8">
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
                      <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-1">
                        {artwork.year} • {artwork.medium}
                      </p>
                      <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                        {artwork.dimensions}
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
        <Footer />
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