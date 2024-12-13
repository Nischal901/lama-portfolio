import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Logo } from '../components/ui/Logo'
import { ThemeProvider } from '../components/ui/theme-provider'
import { ModeToggle } from '../components/ui/mode-toggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nischal Portfolio',
  description: 'Personal portfolio showcasing my projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex flex-col min-h-screen">
            <header className="border-b">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Logo />
                <nav className="hidden md:flex space-x-4">
                  <Link href="/" className="text-sm font-medium hover:text-primary">Home</Link>
                  <Link href="/projects" className="text-sm font-medium hover:text-primary">Projects</Link>
                  <Link href="/skills" className="text-sm font-medium hover:text-primary">Skills</Link>
                  <Link href="/contact" className="text-sm font-medium hover:text-primary">Contact</Link>
                </nav>
                <ModeToggle />
              </div>
            </header>
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <footer className="border-t">
              <div className="container mx-auto px-4 py-4 text-center text-sm">
                © {new Date().getFullYear()} Nischal. All rights reserved.
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



