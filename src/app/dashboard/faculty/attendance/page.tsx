"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar } from "lucide-react"

export default function AttendancePage() {
  // Mock data
  const courses = [
    { id: "1", code: "CS101", name: "Introduction to Programming" },
    { id: "2", code: "CS301", name: "Data Structures" },
    { id: "3", code: "CS401", name: "Machine Learning" },
    { id: "4", code: "CS501", name: "Advanced Algorithms" },
  ]

  const students = [
    { id: "1", name: "John Doe", registerNumber: "2023CS1001" },
    { id: "2", name: "Jane Smith", registerNumber: "2023CS1002" },
    { id: "3", name: "Michael Johnson", registerNumber: "2023CS1003" },
    { id: "4", name: "Emily Brown", registerNumber: "2023CS1004" },
    { id: "5", name: "David Wilson", registerNumber: "2023CS1005" },
    { id: "6", name: "Sarah Taylor", registerNumber: "2023CS1006" },
    { id: "7", name: "James Anderson", registerNumber: "2023CS1007" },
    { id: "8", name: "Jessica Martinez", registerNumber: "2023CS1008" },
    { id: "9", name: "Robert Thomas", registerNumber: "2023CS1009" },
    { id: "10", name: "Jennifer Garcia", registerNumber: "2023CS1010" },
  ]

  const [selectedCourse, setSelectedCourse] = useState<string>("")
  const [date, setDate] = useState<string>(new Date().toISOString().split("T")[0])
  const [attendance, setAttendance] = useState<Record<string, boolean>>({})
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleSelectAll = (checked: boolean) => {
    const newAttendance = { ...attendance }
    students.forEach((student) => {
      newAttendance[student.id] = checked
    })
    setAttendance(newAttendance)
  }

  const handleAttendanceChange = (studentId: string, checked: boolean) => {
    setAttendance({
      ...attendance,
      [studentId]: checked,
    })
  }

  const handleSubmit = () => {
    // In a real app, you would send this data to the server
    console.log({
      course: selectedCourse,
      date,
      attendance,
    })
    setSubmitted(true)
  }

  const resetForm = () => {
    setSelectedCourse("")
    setDate(new Date().toISOString().split("T")[0])
    setAttendance({})
    setSubmitted(false)
  }

  const presentCount = Object.values(attendance).filter(Boolean).length
  const absentCount = students.length - presentCount

  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Attendance Management</h1>

        {submitted ? (
          <Card>
            <CardHeader>
              <CardTitle>Attendance Submitted</CardTitle>
              <CardDescription>
                Attendance for {courses.find((c) => c.id === selectedCourse)?.name} on{" "}
                {new Date(date).toLocaleDateString()} has been recorded
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="rounded-md bg-green-50 p-4">
                    <div className="font-medium text-green-800">Present</div>
                    <div className="text-3xl font-bold text-green-800">{presentCount}</div>
                  </div>
                  <div className="rounded-md bg-red-50 p-4">
                    <div className="font-medium text-red-800">Absent</div>
                    <div className="text-3xl font-bold text-red-800">{absentCount}</div>
                  </div>
                </div>
                <Button onClick={resetForm}>Record Another Attendance</Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Mark Attendance</CardTitle>
              <CardDescription>Select a course and mark student attendance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Select Course</label>
                    <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                      <SelectTrigger>
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
                    <label className="text-sm font-medium">Date</label>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>
                </div>

                {selectedCourse && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">{courses.find((c) => c.id === selectedCourse)?.name}</h3>
                      <div className="flex items-center gap-2">
                        <Checkbox id="select-all" onCheckedChange={(checked) => handleSelectAll(checked as boolean)} />
                        <label htmlFor="select-all" className="text-sm">
                          Select All
                        </label>
                      </div>
                    </div>

                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[50px]">Present</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Register Number</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {students.map((student) => (
                            <TableRow key={student.id}>
                              <TableCell>
                                <Checkbox
                                  checked={attendance[student.id] || false}
                                  onCheckedChange={(checked) => handleAttendanceChange(student.id, checked as boolean)}
                                />
                              </TableCell>
                              <TableCell className="font-medium">{student.name}</TableCell>
                              <TableCell>{student.registerNumber}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    <div className="flex justify-end">
                      <Button onClick={handleSubmit} disabled={!selectedCourse}>
                        Submit Attendance
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  )
}

