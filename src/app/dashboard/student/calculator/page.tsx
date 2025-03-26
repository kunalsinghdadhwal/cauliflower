"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Trash2 } from "lucide-react"

export default function GpaCalculatorPage() {
  // Grade point values
  const gradePoints = {
    "A+": 4.0,
    A: 4.0,
    "A-": 3.7,
    "B+": 3.3,
    B: 3.0,
    "B-": 2.7,
    "C+": 2.3,
    C: 2.0,
    "C-": 1.7,
    "D+": 1.3,
    D: 1.0,
    F: 0.0,
  }

  // Initial course state
  const initialCourse = { name: "", credits: 3, grade: "A" }

  // State for current semester courses
  const [courses, setCourses] = useState([
    { name: "Introduction to Programming", credits: 4, grade: "A" },
    { name: "Calculus I", credits: 3, grade: "B+" },
  ])

  // State for previous GPA and credits
  const [previousGPA, setPreviousGPA] = useState<number | null>(3.5)
  const [previousCredits, setPreviousCredits] = useState<number | null>(30)

  // Add a new course
  const addCourse = () => {
    setCourses([...courses, { ...initialCourse }])
  }

  // Remove a course
  const removeCourse = (index: number) => {
    setCourses(courses.filter((_, i) => i !== index))
  }

  // Update course details
  const updateCourse = (index: number, field: string, value: string | number) => {
    const updatedCourses = [...courses]
    updatedCourses[index] = { ...updatedCourses[index], [field]: value }
    setCourses(updatedCourses)
  }

  // Calculate semester GPA
  const calculateSemesterGPA = () => {
    if (courses.length === 0) return 0

    let totalPoints = 0
    let totalCredits = 0

    courses.forEach((course) => {
      const grade = course.grade as keyof typeof gradePoints
      const points = gradePoints[grade] * course.credits
      totalPoints += points
      totalCredits += course.credits
    })

    return totalCredits > 0 ? totalPoints / totalCredits : 0
  }

  // Calculate cumulative GPA
  const calculateCumulativeGPA = () => {
    if (!previousGPA || !previousCredits) return calculateSemesterGPA()

    const semesterGPA = calculateSemesterGPA()
    const semesterCredits = courses.reduce((sum, course) => sum + course.credits, 0)

    const totalPoints = previousGPA * previousCredits + semesterGPA * semesterCredits
    const totalCredits = previousCredits + semesterCredits

    return totalCredits > 0 ? totalPoints / totalCredits : 0
  }

  // Format GPA to 2 decimal places
  const formatGPA = (gpa: number) => {
    return gpa.toFixed(2)
  }

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">GPA Calculator</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Current Semester</CardTitle>
              <CardDescription>Enter your courses for this semester</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course Name</TableHead>
                      <TableHead>Credits</TableHead>
                      <TableHead>Grade</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courses.map((course, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Input
                            value={course.name}
                            onChange={(e) => updateCourse(index, "name", e.target.value)}
                            placeholder="Course name"
                          />
                        </TableCell>
                        <TableCell>
                          <Select
                            value={course.credits.toString()}
                            onValueChange={(value) => updateCourse(index, "credits", Number.parseInt(value))}
                          >
                            <SelectTrigger className="w-[80px]">
                              <SelectValue placeholder="Credits" />
                            </SelectTrigger>
                            <SelectContent>
                              {[1, 2, 3, 4, 5].map((credit) => (
                                <SelectItem key={credit} value={credit.toString()}>
                                  {credit}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <Select value={course.grade} onValueChange={(value) => updateCourse(index, "grade", value)}>
                            <SelectTrigger className="w-[80px]">
                              <SelectValue placeholder="Grade" />
                            </SelectTrigger>
                            <SelectContent>
                              {Object.keys(gradePoints).map((grade) => (
                                <SelectItem key={grade} value={grade}>
                                  {grade}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" onClick={() => removeCourse(index)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <Button variant="outline" onClick={addCourse}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Course
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div>
                <p className="text-sm font-medium">Semester GPA</p>
                <p className="text-2xl font-bold">{formatGPA(calculateSemesterGPA())}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Total Credits</p>
                <p className="text-2xl font-bold">{courses.reduce((sum, course) => sum + course.credits, 0)}</p>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cumulative GPA</CardTitle>
              <CardDescription>Calculate your overall GPA including previous semesters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="previous-gpa">Previous GPA</Label>
                    <Input
                      id="previous-gpa"
                      type="number"
                      min="0"
                      max="4"
                      step="0.01"
                      value={previousGPA?.toString() || ""}
                      onChange={(e) => setPreviousGPA(e.target.value ? Number.parseFloat(e.target.value) : null)}
                      placeholder="Enter your previous GPA"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="previous-credits">Previous Credits</Label>
                    <Input
                      id="previous-credits"
                      type="number"
                      min="0"
                      step="1"
                      value={previousCredits?.toString() || ""}
                      onChange={(e) => setPreviousCredits(e.target.value ? Number.parseInt(e.target.value) : null)}
                      placeholder="Enter your previous credits"
                    />
                  </div>
                </div>

                <div className="rounded-md bg-muted p-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Previous GPA</p>
                      <p className="text-2xl font-bold">{previousGPA ? formatGPA(previousGPA) : "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Previous Credits</p>
                      <p className="text-2xl font-bold">{previousCredits || "N/A"}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-md bg-muted p-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Current Semester GPA</p>
                      <p className="text-2xl font-bold">{formatGPA(calculateSemesterGPA())}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Current Semester Credits</p>
                      <p className="text-2xl font-bold">{courses.reduce((sum, course) => sum + course.credits, 0)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full rounded-md bg-primary/10 p-4">
                <p className="text-sm font-medium text-primary">Cumulative GPA</p>
                <p className="text-3xl font-bold text-primary">{formatGPA(calculateCumulativeGPA())}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Based on {previousCredits || 0} previous credits and{" "}
                  {courses.reduce((sum, course) => sum + course.credits, 0)} current credits
                </p>
              </div>
            </CardFooter>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>GPA Scale Reference</CardTitle>
            <CardDescription>Standard grade point values</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Object.entries(gradePoints).map(([grade, points]) => (
                <div key={grade} className="flex items-center justify-between rounded-md border p-3">
                  <span className="font-medium">{grade}</span>
                  <span>{points.toFixed(1)}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

