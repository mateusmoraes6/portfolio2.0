import { ThemeProvider } from "@/components/theme-provider"
import { PortfolioSidebarWrapper } from "@/components/portfolio-sidebar"
import { cn } from "@/lib/utils"
// import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <PortfolioSidebarWrapper>{children}</PortfolioSidebarWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
