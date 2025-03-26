"use client"

import type React from "react"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { ClassMessage } from "@/lib/types"

export default function MessagesPage() {
  // Mock data
  const courses = [
    { id: "1", code: "CS101", name: "Introduction to Programming" },
    { id: "2", code: "CS301", name: "Data Structures" },
    { id: "3", code: "CS401", name: "Machine Learning" },
    { id: "4", code: "CS501", name: "Advanced Algorithms" },
  ]

  const existingMessages: ClassMessage[] = [
    {
      id: "1",
      title: "Assignment Deadline Extended",
      content: "The deadline for Assignment 2 has been extended to next Friday.",
      date: "2024-03-20",
      sender: "Dr. Smith",
    },
    {
      id: "2",
      title: "Quiz Next Week",
      content: "There will be a quiz on Chapter 5 next Tuesday. Please prepare accordingly.",
      date: "2024-03-18",
      sender: "Dr. Smith",
    },
    {
      id: "3",
      title: "Office Hours Change",
      content: "My office hours will be changed to 2-4 PM on Wednesdays starting next week.",
      date: "2024-03-15",
      sender: "Dr. Smith",
    },
  ]

  const [selectedCourse, setSelectedCourse] = useState<string>("")
  const [messageTitle, setMessageTitle] = useState<string>("")
  const [messageContent, setMessageContent] = useState<string>("")
  const [messages, setMessages] = useState<ClassMessage[]>(existingMessages)
  const [activeTab, setActiveTab] = useState<string>("compose")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedCourse || !messageTitle || !messageContent) {
      alert("Please fill in all fields")
      return
    }

    const newMessage: ClassMessage = {
      id: (messages.length + 1).toString(),
      title: messageTitle,
      content: messageContent,
      date: new Date().toISOString().split("T")[0],
      sender: "Dr. Smith",
    }

    setMessages([newMessage, ...messages])
    setMessageTitle("")
    setMessageContent("")
    setActiveTab("history")
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }

  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Class Messages</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="compose">Compose Message</TabsTrigger>
            <TabsTrigger value="history">Message History</TabsTrigger>
          </TabsList>

          <TabsContent value="compose">
            <Card>
              <CardHeader>
                <CardTitle>Compose New Message</CardTitle>
                <CardDescription>Send announcements or information to your class</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="course">Course</Label>
                    <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                      <SelectTrigger id="course">
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course.id} value={course.id}>
                            {course.code} - {course.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">Message Title</Label>
                    <Input
                      id="title"
                      value={messageTitle}
                      onChange={(e) => setMessageTitle(e.target.value)}
                      placeholder="Enter message title"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Message Content</Label>
                    <Textarea
                      id="content"
                      value={messageContent}
                      onChange={(e) => setMessageContent(e.target.value)}
                      placeholder="Enter your message here"
                      rows={5}
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit">Send Message</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Message History</CardTitle>
                <CardDescription>Previously sent messages</CardDescription>
              </CardHeader>
              <CardContent>
                {messages.length === 0 ? (
                  <p className="text-center text-muted-foreground">No messages sent yet</p>
                ) : (
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className="rounded-md border p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium">{message.title}</h3>
                          <span className="text-sm text-muted-foreground">{formatDate(message.date)}</span>
                        </div>
                        <p className="mt-2">{message.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

