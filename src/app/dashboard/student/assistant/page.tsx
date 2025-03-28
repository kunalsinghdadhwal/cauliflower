"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock } from "lucide-react"
import VoiceAssistant from "@/components/voice-assistant"
import Timetable from "@/components/timetable"
import EventsList from "@/components/events-list"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userType, setUserType] = useState<"student" | "faculty" | null>(null)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Campus Portal</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">
              Welcome, {userType === "faculty" ? "Professor" : "Kunal Singh"} {username}
            </span>
            <Button variant="outline" size="sm" onClick={() => setIsLoggedIn(false)}>
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Tabs defaultValue="timetable" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="timetable" className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Timetable</span>
                </TabsTrigger>
                <TabsTrigger value="events" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Events</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="timetable" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Timetable</CardTitle>
                    <CardDescription>
                      {userType === "faculty"
                        ? "View your teaching schedule for the week"
                        : "View your class schedule for the week"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Timetable userType={userType} />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="events" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Stay updated with campus events and activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <EventsList userType={userType} />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <VoiceAssistant userType={userType} />
          </div>
        </div>
      </main>
    </div>
  )
}

