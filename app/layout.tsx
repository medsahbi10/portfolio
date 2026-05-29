import type React from "react"
import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })

export const metadata: Metadata = {
  title: "Mohamed Sahbi Ben Rejeb - Data & AI Engineer",
  description: "Junior Data & AI Engineer building production pipelines, fine-tuning LLMs, and shipping agentic AI systems.",
  keywords: ["data engineer", "AI engineer", "LLM", "RAG", "portfolio", "Tunisia", "Python", "dbt", "LangGraph"],
  authors: [{ name: "Mohamed Sahbi Ben Rejeb" }],
  openGraph: {
    title: "Mohamed Sahbi Ben Rejeb - Data & AI Engineer",
    description: "Building production data pipelines, fine-tuning LLMs, and agentic AI systems.",
    type: "website",
  },
    generator: 'senotron'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
