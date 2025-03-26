"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { UserRole } from "@/lib/types"
import { Button } from "@/components/ui/button"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BarChart3,
  BookOpen,
  Calendar,
  CreditCard,
  FileText,
  Home,
  LogOut,
  MessageSquare,
  Settings,
  User,
  Users,
} from "lucide-react"

interface DashboardLayoutProps {
  children: React.ReactNode
  role: UserRole
}

export default function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [userName, setUserName] = useState(role === "student" ? "John Doe" : "Dr. Smith")

  const studentNavItems = [
    { href: "/dashboard/student", label: "Dashboard", icon: Home },
    { href: "/dashboard/student/grades", label: "Grades", icon: BarChart3 },
    { href: "/dashboard/student/courses", label: "Course Registration", icon: BookOpen },
    { href: "/dashboard/student/attendance", label: "Attendance", icon: Users },
    { href: "/dashboard/student/calculator", label: "GPA Calculator", icon: FileText },
    { href: "/dashboard/student/payments", label: "Fees & Payments", icon: CreditCard },
    { href: "/dashboard/student/events", label: "Events", icon: Calendar },
    { href: "/dashboard/student/feedback", label: "Faculty Feedback", icon: MessageSquare },
  ]

  const facultyNavItems = [
    { href: "/dashboard/faculty", label: "Dashboard", icon: Home },
    { href: "/dashboard/faculty/attendance", label: "Attendance", icon: Users },
    { href: "/dashboard/faculty/timetable", label: "Timetable", icon: Calendar },
    { href: "/dashboard/faculty/messages", label: "Class Messages", icon: MessageSquare },
    { href: "/dashboard/faculty/research", label: "Research", icon: FileText },
  ]

  const navItems = role === "student" ? studentNavItems : facultyNavItems

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="flex h-14 items-center border-b px-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <BookOpen className="h-6 w-6" />
              <span>Educational Portal</span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.label}>
                    <Link href={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t p-4">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt={userName} />
                <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                <p className="truncate text-sm font-medium">{userName}</p>
                <p className="truncate text-xs text-muted-foreground">{role === "student" ? "Student" : "Faculty"}</p>
              </div>
              <Button variant="ghost" size="icon" asChild>
                <Link href="/login">
                  <LogOut className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="w-full">
          <div className="flex min-h-screen w-full flex-col">
            <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
              <SidebarTrigger />
              <div className="flex-1" />
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </header>
            <main className="flex-1 p-4 sm:p-6">{children}</main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

