'use client'

import { Home, BookOpen, Search, Menu, User } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from "@/lib/utils"

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: BookOpen, label: 'Resources', path: '/resources' },
  { icon: Search, label: 'Search', path: '/search' },
  { icon: Menu, label: 'Menu', path: '/menu' },
  { icon: User, label: 'Profile', path: '/profile' },
]

export function Navigation() {
  const pathname = usePathname()
  const router = useRouter()

  // Only show on mobile
  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
      <nav className="bg-zinc-900/90 backdrop-blur-sm rounded-full px-6 py-2">
        <div className="flex justify-between items-center">
          {navItems.map(({ icon: Icon, path }) => {
            const isActive = pathname === path
            return (
              <button
                key={path}
                onClick={() => router.push(path)}
                className={cn(
                  "p-2 rounded-full transition-colors",
                  isActive ? "text-[#00FF38]" : "text-gray-400 hover:text-white"
                )}
              >
                <Icon className="h-6 w-6" />
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
