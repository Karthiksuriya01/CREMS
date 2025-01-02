import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Sidebar } from "@/components/sidebar"
import { cn } from "@/lib/utils"
import "./globals.css"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex-1 overflow-auto">
              <div className="md:hidden flex justify-between items-center p-4 bg-background">
                <h1 className="text-2xl font-bold">Edulink</h1>
              </div>
              <main className="p-4 md:p-8">
                {children}
              </main>
            </div>
          </div>
          <Navigation />
        </ThemeProvider>
      </body>
    </html>
  )
}
