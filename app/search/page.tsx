'use client'

import { useState } from 'react'
import { Search, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const dates = [
  { day: 'Mon', date: '12' },
  { day: 'Tue', date: '13' },
  { day: 'Wed', date: '14' },
  { day: 'Thu', date: '15' },
  { day: 'Fri', date: '16' },
  { day: 'Sat', date: '17' },
  { day: 'Sun', date: '18' },
  { day: 'Mon', date: '19' },
  { day: 'Tue', date: '20' },
  { day: 'Wed', date: '21' },
  // Add more dates as needed
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
        <div className="max-w-7xl mx-auto space-y-4">
          {/* Search and Date Picker Section */}
          <div className="flex gap-4 flex-col md:flex-row mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input type="search" placeholder="Search events" className="pl-10" />
            </div>
            <Card className="md:w-auto">
              <CardContent className="p-2 flex items-center gap-2">
                <Button variant="ghost" size="icon"><ChevronLeft className="h-4 w-4" /></Button>
                <span className="font-medium whitespace-nowrap">February 2024</span>
                <Button variant="ghost" size="icon"><ChevronRight className="h-4 w-4" /></Button>
              </CardContent>
            </Card>
          </div>

          {/* Date Selector - Horizontal Scrollable
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1 min-w-max">
              {dates.map(({ day, date }) => (
                <Button
                  key={date}
                  variant="ghost"
                  className={`flex-col py-2 px-3 ${selectedDate === date ? 'bg-primary text-primary-foreground' : ''}`}
                  onClick={() => setSelectedDate(date)}
                >
                  <span className="text-xs">{day}</span>
                  <span className="text-sm font-bold">{date}</span>
                </Button>
              ))}
            </div>
          </div> */}

          {/* Events Grid */}
          <div className="py-4">
            <h3 className="text-lg font-semibold mb-4">Today's Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {events.map((event, index) => (
                <Card key={index} className="transition-all hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">{event.title}</h4>
                        <p className="text-sm text-muted-foreground line-clamp-1">{event.description}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        event.status === 'ongoing' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                      }`}>
                        {event.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm mb-3">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {event.date}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {event.completed}/{event.total}
                      </div>
                    </div>

                    <Progress value={(event.completed / event.total) * 100} className="mb-3 h-2" />
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">View</Button>
                      <Button size="sm" variant="outline" className="flex-1">Complete</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

