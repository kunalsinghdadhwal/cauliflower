import Link from "next/link"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Bell, BookOpen, Calendar, Clock, FileText, GraduationCap } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function FacultyDashboard() {
  // Mock data
  const faculty = {
    name: "Dr. Smith",
    employeeId: "FAC2023001",
    classesTaught: 4,
    researchPapers: 12,
    scopusId: "57123456789",
  }

  const todaySchedule = [
    {
      id: "1",
      course: "CS101 - Introduction to Programming",
      startTime: "09:00",
      endTime: "10:30",
      location: "Room 201",
    },
    { id: "2", course: "CS301 - Data Structures", startTime: "14:00", endTime: "15:30", location: "Lab 102" },
  ]

  const researchPapers = [
    {
      id: "1",
      title: "Machine Learning Applications in Healthcare",
      journal: "IEEE Transactions on Medical Imaging",
      year: "2023",
      citations: 8,
    },
    {
      id: "2",
      title: "Deep Learning for Natural Language Processing",
      journal: "ACM Computing Surveys",
      year: "2022",
      citations: 15,
    },
    {
      id: "3",
      title: "Advances in Computer Vision Algorithms",
      journal: "Computer Vision and Image Understanding",
      year: "2021",
      citations: 23,
    },
  ]

  const classes = [
    { id: "1", code: "CS101", name: "Introduction to Programming", students: 45, attendance: 92 },
    { id: "2", code: "CS301", name: "Data Structures", students: 38, attendance: 88 },
    { id: "3", code: "CS401", name: "Machine Learning", students: 30, attendance: 95 },
    { id: "4", code: "CS501", name: "Advanced Algorithms", students: 25, attendance: 90 },
  ]

  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h1 className="text-3xl font-bold tracking-tight">Faculty Dashboard</h1>
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
              <CardTitle className="text-sm font-medium">Faculty Name</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{faculty.name}</div>
              <p className="text-xs text-muted-foreground">Employee ID: {faculty.employeeId}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Classes This Semester</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{faculty.classesTaught}</div>
              <p className="text-xs text-muted-foreground">Total courses</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Research Papers</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{faculty.researchPapers}</div>
              <p className="text-xs text-muted-foreground">Published papers</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Scopus ID</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{faculty.scopusId}</div>
              <p className="text-xs text-muted-foreground">Research profile</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
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
                    <div className="ml-auto">
                      <Button size="sm" asChild>
                        <Link href="/dashboard/faculty/attendance">Take Attendance</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Classes Overview</CardTitle>
              <CardDescription>Current semester classes</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Attendance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {classes.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div className="font-medium">{item.code}</div>
                        <div className="text-xs text-muted-foreground">{item.name}</div>
                      </TableCell>
                      <TableCell>{item.students}</TableCell>
                      <TableCell>{item.attendance}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Research Publications</CardTitle>
            <CardDescription>Your published papers</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Journal</TableHead>
                  <TableHead>Year</TableHead>
                  <TableHead>Citations</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {researchPapers.map((paper) => (
                  <TableRow key={paper.id}>
                    <TableCell className="font-medium">{paper.title}</TableCell>
                    <TableCell>{paper.journal}</TableCell>
                    <TableCell>{paper.year}</TableCell>
                    <TableCell>{paper.citations}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

