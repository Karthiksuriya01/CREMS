'use client'

import { useState } from 'react'
import { Search, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const dates = [
  { day: 'Mon', date: '15' },
  { day: 'Tue', date: '16' },
  { day: 'Wed', date: '17' },
  { day: 'Thu', date: '18' },
  { day: 'Fri', date: '19' },
  { day: 'Sat', date: '20' },
  { day: 'Sun', date: '21' },
]

const events = [
  {
    title: "Google Certifications",
    description: "Lorem ipsum dolor sit amet consectetur..",
    date: "12-02-2024",
    completed: 25,
    total: 79,
    status: "ongoing"
  },
  {
    title: "Web Development Workshop",
    description: "Advanced React and Next.js techniques",
    date: "15-02-2024",
    completed: 45,
    total: 60,
    status: "ongoing"
  },
  {
    title: "Data Science Fundamentals",
    description: "Introduction to Python and data analysis",
    date: "18-02-2024",
    completed: 10,
    total: 50,
    status: "ongoing"
  }
]

export default function SearchPage() {
  const [selectedDate, setSelectedDate] = useState('16')

  return (
    <div className="min-h-screen bg-background">
      <div className="md:pl-64 p-4 md:p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              type="search" 
              placeholder="Search events" 
              className="pl-10 pr-10"
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <Calendar className="h-4 w-4" />
            </Button>
          </div>

          {/* Date Selector */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <Button variant="ghost" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="font-semibold">February 2024</div>
                <Button variant="ghost" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-between">
                {dates.map(({ day, date }) => (
                  <Button
                    key={date}
                    variant="ghost"
                    className={`flex-col h-16 ${selectedDate === date ? 'bg-primary text-primary-foreground' : ''}`}
                    onClick={() => setSelectedDate(date)}
                  >
                    <span className="text-xs">{day}</span>
                    <span className="text-lg font-bold">{date}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Events List */}
          <div className="space-y-4">
            {events.map((event, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>
                    <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                      {event.status}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    Completed : {event.completed} / {event.total}
                  </div>
                  <Progress 
                    value={(event.completed / event.total) * 100} 
                    className="mb-4" 
                  />
                  <div className="flex gap-2">
                    <Button className="flex-1">Completed</Button>
                    <Button variant="outline" className="flex-1">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

