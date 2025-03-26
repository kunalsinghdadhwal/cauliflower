import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bell, BookOpen, Calendar, Clock, FileText, GraduationCap, Users } from "lucide-react"

export default function StudentDashboard() {
  // Mock data
  const student = {
    name: "John Doe",
    registerNumber: "2023CS1001",
    degree: "B.Tech Computer Science",
    cgpa: 3.8,
    coursesRegistered: 5,
    attendancePercentage: 92,
  }

  const todaySchedule = [
    {
      id: "1",
      course: "CS101 - Introduction to Programming",
      startTime: "09:00",
      endTime: "10:30",
      location: "Room 201",
    },
    { id: "2", course: "MA102 - Linear Algebra", startTime: "11:00", endTime: "12:30", location: "Room 305" },
    { id: "3", course: "PH101 - Physics I", startTime: "14:00", endTime: "15:30", location: "Lab 102" },
  ]

  const assignments = [
    { id: "1", title: "Programming Assignment 3", course: "CS101", dueDate: "Tomorrow", status: "pending" },
    { id: "2", title: "Math Problem Set", course: "MA102", dueDate: "In 3 days", status: "pending" },
  ]

  const messages = [
    {
      id: "1",
      title: "Class Rescheduled",
      content: "Tomorrow's CS101 class will be held in Room 302",
      date: "Today",
      sender: "Dr. Smith",
    },
    {
      id: "2",
      title: "Quiz Announcement",
      content: "There will be a quiz in MA102 next week",
      date: "Yesterday",
      sender: "Dr. Johnson",
    },
  ]

  const gpaData = [
    { semester: "Sem 1", gpa: 3.6 },
    { semester: "Sem 2", gpa: 3.7 },
    { semester: "Sem 3", gpa: 3.5 },
    { semester: "Sem 4", gpa: 3.8 },
  ]

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              March 2024
            </Button>
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Student Name</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{student.name}</div>
              <p className="text-xs text-muted-foreground">{student.registerNumber}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current CGPA</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{student.cgpa}</div>
              <p className="text-xs text-muted-foreground">{student.degree}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Courses Registered</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{student.coursesRegistered}</div>
              <p className="text-xs text-muted-foreground">Current Semester</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{student.attendancePercentage}%</div>
              <Progress value={student.attendancePercentage} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Academic Progress</CardTitle>
              <CardDescription>GPA trend across semesters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] space-y-4">
                <div className="flex h-full items-end gap-2">
                  {gpaData.map((item) => (
                    <div key={item.semester} className="flex flex-1 flex-col items-center gap-2">
                      <div
                        className="w-full rounded-md bg-primary"
                        style={{ height: `${(item.gpa / 4) * 100}%` }}
                      ></div>
                      <span className="text-xs font-medium">{item.semester}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-muted-foreground">0.0</span>
                  <span className="text-xs text-muted-foreground">4.0</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Today&apos;s Schedule</CardTitle>
              <CardDescription>Your classes for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todaySchedule.map((item) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="rounded-md bg-primary/10 p-2">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{item.course}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.startTime} - {item.endTime} • {item.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Assignments Due</CardTitle>
              <CardDescription>Upcoming deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assignments.map((item) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="rounded-md bg-primary/10 p-2">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.course} • Due {item.dueDate}
                      </p>
                    </div>
                    <div className="ml-auto">
                      <Button size="sm">Submit</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Class Messages</CardTitle>
              <CardDescription>Announcements from faculty</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {messages.map((item) => (
                  <div key={item.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.date}</p>
                    </div>
                    <p className="text-sm">{item.content}</p>
                    <p className="text-xs text-muted-foreground">From: {item.sender}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

