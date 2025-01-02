'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Calendar, Check } from 'lucide-react'

type Event = {
  title: string
  description: string
  date: string
  completed: number
  total: number
  status: string
}

type EventCarouselProps = {
  events: Event[]
}

export function EventCarousel({ events }: EventCarouselProps) {
  const [emblaRef] = useEmblaCarousel({ 
    loop: false, 
    align: 'start',
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  })

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {events.map((event, index) => (
          <div 
            key={index} 
            className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 mr-4 last:mr-0"
          >
            <Card className="bg-card h-full">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold">{event.title}</h4>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                  <span className={`
                    text-xs px-2 py-1 rounded-full inline-flex items-center gap-1
                    ${event.status === 'completed' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                    }
                  `}>
                    {event.status === 'completed' && <Check className="w-3 h-3" />}
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
                  <Button className="flex-1 bg-[#00FF38] text-black hover:bg-[#00FF38]/90">
                    Completed
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
