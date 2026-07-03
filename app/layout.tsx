import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn, pageContainerClass } from "@/lib/utils";
import Navbar from "@/components/shadcn-space/blocks/navbar-01/navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="it"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body suppressHydrationWarning className="min-h-dvh bg-background">
        <ThemeProvider>
          <div className="flex min-h-dvh flex-col">
            <Navbar />
            <main className="w-full flex-1">{children}</main>
            <div className={pageContainerClass}>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
