import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Code2, Palette, Zap } from "lucide-react";

const projects = [
  {
    title: "Resume Builder Web App",
    description:"A RBWA is an online platform that enables users to create professional resumes easily.It typically offers a user-friendly interface,input fields and download their resumes in formats like PDF.",
    image: "/rbwa.jpg?height=200&width=300",
    githubLink: "https://github.com/Nischal901/ResumeBuilder",

  },
  {
    title: "To-Do App",
    description: "A To-Do List app helps users organize tasks efficiently by allowing them to add, edit, delete, and mark tasks as complete. It provides a simple interface for managing daily activities and improving productivity",
    image: "/todo.png?height=200&width=300",
    githubLink: "https://github.com/Nischal901/ResumeBuilder",

  },
]

export default function Projects() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader className="p-0">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-900 hover:text-red-500 transition-colors"
              >
                <Github size={16} className="mr-1" />
                View on GitHub
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

