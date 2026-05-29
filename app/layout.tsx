import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Sora:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
