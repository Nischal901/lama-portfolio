'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaPhp, FaDatabase } from 'react-icons/fa'
import { IconType } from 'react-icons'

const skills: { category: string; items: { name: string; icon: IconType }[] }[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJsSquare }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Java", icon: FaJava },
      { name: "PHP", icon: FaPhp }
    ]
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: FaDatabase }
    ]
  },
]

export default function Skills() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skillCategory) => (
          <Card key={skillCategory.category}>
            <CardHeader>
              <CardTitle>{skillCategory.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {skillCategory.items.map((skill) => (
                  <li key={skill.name} className="flex items-center">
                    <div className="w-8 h-8 mr-4 flex-shrink-0 flex items-center justify-center">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

