"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { Course } from "@/lib/types"
import { Search } from "lucide-react"

export default function CoursesPage() {
  // Mock data
  const availableCourses: Course[] = [
    {
      id: "1",
      code: "CS401",
      name: "Machine Learning",
      faculty: "Dr. Smith",
      slot: "A",
      timing: "Mon, Wed 9:00-10:30",
      credits: 4,
      attendance: 0,
    },
    {
      id: "2",
      code: "CS402",
      name: "Computer Networks",
      faculty: "Dr. Johnson",
      slot: "B",
      timing: "Tue, Thu 11:00-12:30",
      credits: 3,
      attendance: 0,
    },
    {
      id: "3",
      code: "CS403",
      name: "Software Engineering",
      faculty: "Dr. Williams",
      slot: "C",
      timing: "Mon, Wed 14:00-15:30",
      credits: 3,
      attendance: 0,
    },
    {
      id: "4",
      code: "CS404",
      name: "Artificial Intelligence",
      faculty: "Dr. Brown",
      slot: "D",
      timing: "Tue, Thu 14:00-15:30",
      credits: 4,
      attendance: 0,
    },
    {
      id: "5",
      code: "CS405",
      name: "Database Design",
      faculty: "Dr. Davis",
      slot: "E",
      timing: "Fri 9:00-12:00",
      credits: 3,
      attendance: 0,
    },
    {
      id: "6",
      code: "MA301",
      name: "Numerical Methods",
      faculty: "Dr. Wilson",
      slot: "F",
      timing: "Mon, Wed 11:00-12:30",
      credits: 3,
      attendance: 0,
    },
    {
      id: "7",
      code: "EE301",
      name: "Digital Signal Processing",
      faculty: "Dr. Taylor",
      slot: "G",
      timing: "Tue, Thu 9:00-10:30",
      credits: 4,
      attendance: 0,
    },
    {
      id: "8",
      code: "HU201",
      name: "Professional Ethics",
      faculty: "Dr. Moore",
      slot: "H",
      timing: "Fri 14:00-17:00",
      credits: 2,
      attendance: 0,
    },
  ]

  const [selectedCourses, setSelectedCourses] = useState<Course[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCourses = availableCourses.filter(
    (course) =>
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.faculty.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleCourseSelection = (course: Course, isSelected: boolean) => {
    if (isSelected) {
      // Check for time slot conflicts
      const hasConflict = selectedCourses.some((selectedCourse) => selectedCourse.slot === course.slot)

      if (hasConflict) {
        alert(`Time slot conflict with course in slot ${course.slot}`)
        return
      }

      setSelectedCourses([...selectedCourses, course])
    } else {
      setSelectedCourses(selectedCourses.filter((c) => c.id !== course.id))
    }
  }

  const totalCredits = selectedCourses.reduce((sum, course) => sum + course.credits, 0)

  // Time slots for timetable
  const timeSlots = ["9:00-10:30", "11:00-12:30", "14:00-15:30", "16:00-17:30"]

  // Days of the week
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

  // Helper function to check if a course is scheduled on a specific day and time
  const getCourseForSlot = (day: string, time: string) => {
    return selectedCourses.find((course) => {
      const courseDays = course.timing.split(" ")[0].replace(",", "")
      const courseTime = course.timing.split(" ")[1]

      const isDayMatch =
        (day === "Monday" && courseDays.includes("Mon")) ||
        (day === "Tuesday" && courseDays.includes("Tue")) ||
        (day === "Wednesday" && courseDays.includes("Wed")) ||
        (day === "Thursday" && courseDays.includes("Thu")) ||
        (day === "Friday" && courseDays.includes("Fri"))

      const isTimeMatch = courseTime === time

      return isDayMatch && isTimeMatch
    })
  }

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Course Registration</h1>

        <Tabs defaultValue="available">
          <TabsList>
            <TabsTrigger value="available">Available Courses</TabsTrigger>
            <TabsTrigger value="selected">Selected Courses</TabsTrigger>
            <TabsTrigger value="timetable">Timetable</TabsTrigger>
          </TabsList>

          <TabsContent value="available" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Available Courses</CardTitle>
                <CardDescription>Select courses for the upcoming semester</CardDescription>
                <div className="relative mt-2">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search courses by code, name, or faculty"
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">Select</TableHead>
                      <TableHead>Code</TableHead>
                      <TableHead>Course Name</TableHead>
                      <TableHead>Faculty</TableHead>
                      <TableHead>Slot</TableHead>
                      <TableHead>Timing</TableHead>
                      <TableHead>Credits</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCourses.map((course) => {
                      const isSelected = selectedCourses.some((c) => c.id === course.id)
                      const isDisabled = !isSelected && selectedCourses.some((c) => c.slot === course.slot)

                      return (
                        <TableRow key={course.id} className={isDisabled ? "opacity-50" : ""}>
                          <TableCell>
                            <Checkbox
                              checked={isSelected}
                              onCheckedChange={(checked) => handleCourseSelection(course, checked as boolean)}
                              disabled={isDisabled}
                            />
                          </TableCell>
                          <TableCell className="font-medium">{course.code}</TableCell>
                          <TableCell>{course.name}</TableCell>
                          <TableCell>{course.faculty}</TableCell>
                          <TableCell>{course.slot}</TableCell>
                          <TableCell>{course.timing}</TableCell>
                          <TableCell>{course.credits}</TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="selected" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Selected Courses</CardTitle>
                  <div className="text-sm">
                    Total Credits: <span className="font-bold">{totalCredits}</span>
                    {totalCredits > 20 && <span className="ml-2 text-red-500">(Exceeds maximum allowed credits)</span>}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {selectedCourses.length === 0 ? (
                  <p className="text-center text-muted-foreground">No courses selected yet</p>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Code</TableHead>
                        <TableHead>Course Name</TableHead>
                        <TableHead>Faculty</TableHead>
                        <TableHead>Slot</TableHead>
                        <TableHead>Timing</TableHead>
                        <TableHead>Credits</TableHead>
                        <TableHead className="w-[100px]">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedCourses.map((course) => (
                        <TableRow key={course.id}>
                          <TableCell className="font-medium">{course.code}</TableCell>
                          <TableCell>{course.name}</TableCell>
                          <TableCell>{course.faculty}</TableCell>
                          <TableCell>{course.slot}</TableCell>
                          <TableCell>{course.timing}</TableCell>
                          <TableCell>{course.credits}</TableCell>
                          <TableCell>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleCourseSelection(course, false)}
                            >
                              Remove
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button size="lg" disabled={selectedCourses.length === 0 || totalCredits > 20}>
                Register Courses
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="timetable">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Timetable</CardTitle>
                <CardDescription>Based on your selected courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Time</TableHead>
                        {days.map((day) => (
                          <TableHead key={day}>{day}</TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {timeSlots.map((time) => (
                        <TableRow key={time}>
                          <TableCell className="font-medium">{time}</TableCell>
                          {days.map((day) => {
                            const course = getCourseForSlot(day, time)
                            return (
                              <TableCell key={`${day}-${time}`} className={course ? "bg-primary/10" : ""}>
                                {course ? (
                                  <div className="space-y-1">
                                    <p className="font-medium">{course.code}</p>
                                    <p className="text-xs">{course.name}</p>
                                  </div>
                                ) : null}
                              </TableCell>
                            )
                          })}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

