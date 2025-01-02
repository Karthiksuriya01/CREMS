'use client'

import { Home, BookOpen, Search, Menu, User, LogOut } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from "@/lib/utils"
import { ThemeToggle } from './theme-toggle'

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: BookOpen, label: 'Resources', path: '/resources' },
  { icon: Search, label: 'Search', path: '/search' },
  { icon: Menu, label: 'Menu', path: '/menu' },
  { icon: User, label: 'Profile', path: '/profile' },
]

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  // Only show on desktop
  return (
    <div className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 bg-background border-r p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Edulink</h1>
        <ThemeToggle />
      </div>
      
      <nav className="flex-1">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = pathname === path
          return (
            <button
              key={path}
              onClick={() => router.push(path)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors",
                isActive 
                  ? "bg-[#00FF38] text-black" 
                  : "hover:bg-accent"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{label}</span>
            </button>
          )
        })}
      </nav>

      <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-500/10">
        <LogOut className="h-5 w-5" />
        <span className="font-medium">Logout</span>
      </button>
    </div>
  )
}
