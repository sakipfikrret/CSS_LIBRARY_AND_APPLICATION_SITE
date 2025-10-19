import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CSS Akademi - Kapsamlı CSS Referans Kütüphanesi",
  description:
    "Tüm CSS özelliklerini öğrenin, interaktif örneklerle pratik yapın. W3Schools tarzında modern CSS eğitim platformu.",
  keywords: "CSS, CSS3, web tasarım, frontend, öğretici, referans, kütüphane",
  authors: [{ name: "CSS Akademi" }],
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
