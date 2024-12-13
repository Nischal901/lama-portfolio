import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from "../components/ui/button"

export default function Home() {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-144px)] space-y-8">
      <h1 className="text-4xl font-bold text-center">Welcome, I`m Nischal Lama</h1>
      <p className="text-xl text-center max-w-2xl text-muted-foreground">
        I`m a passionate web developer specializing in creating beautiful and functional websites.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Button asChild>
          <Link href="/projects">View My Projects</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/skills">Check My Skills</Link>
        </Button>
      </div>
      <div className="flex space-x-4">
        <a href="https://github.com/Nischal901" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
          <Github size={24} />
        </a>
        <a href="https://linkedin.com/in/nischal-lama" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
          <Linkedin size={24} />
        </a>
        <a href="mailto:lamanischal9999@gmail.com" className="text-muted-foreground hover:text-primary">
          <Mail size={24} />
        </a>
      </div>
    </div>
  )
}

