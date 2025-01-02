'use client'

import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const subjects = Array(6).fill("Maths")

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background p-4 md:pl-72">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              type="search" 
              placeholder="Search materials" 
              className="pl-10"
            />
          </div>
          <Select defaultValue="2024">
            <SelectTrigger className="w-28">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2025</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="1">
            <SelectTrigger className="w-28">
              <SelectValue placeholder="Sem" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Sem 1</SelectItem>
              <SelectItem value="2">Sem 2</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {subjects.map((subject, index) => (
            <Card 
              key={index}
              className="aspect-square flex items-center justify-center text-xl font-medium hover:bg-accent cursor-pointer transition-colors"
            >
              {subject}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

