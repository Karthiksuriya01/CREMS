import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { EventCarousel } from "@/components/event-carousel"
import { Search} from 'lucide-react'
import { Input } from "@/components/ui/input"
const stats = [
  { title: "Completed", value: "6" },
  { title: "Not Completed", value: "2" },
  { title: "Total Events", value: "8" },
]

const events = [
  {
    title: "Google Certifications",
    description: "Lorem ipsum dolor sit amet consectetur..",
    date: "12-02-2024",
    completed: 25,
    total: 79,
    status: "pending"
  },
  {
    title: "Web Development Workshop",
    description: "Advanced React and Next.js techniques",
    date: "15-02-2024",
    completed: 45,
    total: 60,
    status: "completed"
  },
  {
    title: "Data Science Fundamentals",
    description: "Introduction to Python and data analysis",
    date: "18-02-2024",
    completed: 10,
    total: 50,
    status: "pending"
  },
  {
    title: "UI/UX Design Principles",
    description: "Learn the basics of user interface design",
    date: "20-02-2024",
    completed: 30,
    total: 40,
    status: "completed"
  },
  {
    title: "Machine Learning Basics",
    description: "Introduction to ML algorithms and applications",
    date: "22-02-2024",
    completed: 5,
    total: 30,
    status: "pending"
  }
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="md:pl-64 p-4 md:p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Search Bar - Mobile Only */}
          <div className="md:hidden mb-4">
          <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input type="search" placeholder="Search events" className="pl-10" />
            </div>
          </div>

          {/* Welcome Section - Desktop Only */}
          <div className="hidden md:block">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Welcome back, Karhik! Here what happening with your learning progress.
            </p>
          </div>

          {/* Mobile Welcome */}
          <div className="md:hidden">
            <h2 className="text-xl mb-4">
              👋 Welcome <span className="font-semibold">Karhik</span>
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <Card key={stat.title} className="bg-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Today's Events */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Today</h3>
            <EventCarousel events={events.slice(0, 3)} />
          </div>

          {/* All Events */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">All Events</h3>
              <Button variant="link" className="text-primary">View More</Button>
            </div>
            <EventCarousel events={events} />
          </div>
        </div>
      </div>
    </div>
  )
}

