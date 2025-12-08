import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Minh Doan - Contemporary Artist",
  description:
    "Minh Doan is a contemporary visual artist whose work explores the intersection of abstraction, color, and geometric forms.",
  openGraph: {
    title: "Minh Doan - Contemporary Artist",
    description:
      "Minh Doan is a contemporary visual artist whose work explores the intersection of abstraction, color, and geometric forms.",
    url: "https://painting-project-theta.vercel.app",
    siteName: "Minh Doan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minh Doan - Contemporary Artist",
    description:
      "Minh Doan is a contemporary visual artist whose work explores the intersection of abstraction, color, and geometric forms.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
