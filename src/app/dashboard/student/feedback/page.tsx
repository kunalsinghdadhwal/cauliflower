"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Check } from "lucide-react"

export default function FeedbackPage() {
  // Mock data
  const courses = [
    { id: "1", code: "CS401", name: "Machine Learning", faculty: "Dr. Smith" },
    { id: "2", code: "CS402", name: "Computer Networks", faculty: "Dr. Johnson" },
    { id: "3", code: "CS403", name: "Software Engineering", faculty: "Dr. Williams" },
    { id: "4", code: "CS404", name: "Artificial Intelligence", faculty: "Dr. Brown" },
    { id: "5", code: "MA301", name: "Numerical Methods", faculty: "Dr. Wilson" },
  ]

  const previousFeedbacks = [
    { id: "1", course: "CS301 - Data Structures", faculty: "Dr. Davis", date: "2023-12-15", status: "Submitted" },
    { id: "2", course: "CS302 - Algorithms", faculty: "Dr. Miller", date: "2023-12-15", status: "Submitted" },
    { id: "3", course: "MA201 - Probability", faculty: "Dr. Taylor", date: "2023-12-10", status: "Submitted" },
  ]

  const [selectedCourse, setSelectedCourse] = useState<string>("")
  const [ratings, setRatings] = useState({
    teaching: "",
    content: "",
    materials: "",
    assessment: "",
    support: "",
  })
  const [comments, setComments] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleRatingChange = (category: string, value: string) => {
    setRatings({
      ...ratings,
      [category]: value,
    })
  }

  const handleSubmit = () => {
    // In a real app, you would send this data to the server
    console.log({
      course: selectedCourse,
      ratings,
      comments,
    })
    setSubmitted(true)
  }

  const resetForm = () => {
    setSelectedCourse("")
    setRatings({
      teaching: "",
      content: "",
      materials: "",
      assessment: "",
      support: "",
    })
    setComments("")
    setSubmitted(false)
  }

  const isFormValid = () => {
    return (
      selectedCourse &&
      ratings.teaching &&
      ratings.content &&
      ratings.materials &&
      ratings.assessment &&
      ratings.support
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }

  const RatingOption = ({ value, selected }: { value: string; selected: boolean }) => (
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-colors ${
        selected ? "border-primary bg-primary text-primary-foreground" : "border-input hover:bg-muted"
      }`}
    >
      {value}
    </div>
  )

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Faculty Feedback</h1>

        {submitted ? (
          <Card>
            <CardHeader>
              <CardTitle>Feedback Submitted</CardTitle>
              <CardDescription>
                Thank you for providing your feedback for {courses.find((c) => c.id === selectedCourse)?.name}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-6">
              <div className="rounded-full bg-green-100 p-3">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium">Feedback Recorded Successfully</h3>
              <p className="mt-2 text-center text-muted-foreground">
                Your feedback helps us improve the quality of education. Thank you for your valuable input.
              </p>
            </CardContent>
            <CardFooter>
              <Button onClick={resetForm} className="w-full">
                Submit Another Feedback
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Course Feedback Form</CardTitle>
              <CardDescription>Provide your feedback for the current semester courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="course">Select Course</Label>
                  <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                    <SelectTrigger id="course">
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course.id} value={course.id}>
                          {course.code} - {course.name} ({course.faculty})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedCourse && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Teaching Quality</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Teaching Effectiveness</Label>
                          <RadioGroup
                            className="flex space-x-2"
                            value={ratings.teaching}
                            onValueChange={(value) => handleRatingChange("teaching", value)}
                          >
                            {[1, 2, 3, 4, 5].map((value) => (
                              <div key={value} className="flex flex-col items-center">
                                <RadioGroupItem value={value.toString()} id={`teaching-${value}`} className="sr-only" />
                                <Label htmlFor={`teaching-${value}`} className="cursor-pointer">
                                  <RatingOption
                                    value={value.toString()}
                                    selected={ratings.teaching === value.toString()}
                                  />
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Poor</span>
                            <span>Excellent</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Course Content</Label>
                          <RadioGroup
                            className="flex space-x-2"
                            value={ratings.content}
                            onValueChange={(value) => handleRatingChange("content", value)}
                          >
                            {[1, 2, 3, 4, 5].map((value) => (
                              <div key={value} className="flex flex-col items-center">
                                <RadioGroupItem value={value.toString()} id={`content-${value}`} className="sr-only" />
                                <Label htmlFor={`content-${value}`} className="cursor-pointer">
                                  <RatingOption
                                    value={value.toString()}
                                    selected={ratings.content === value.toString()}
                                  />
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Poor</span>
                            <span>Excellent</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Course Materials</Label>
                          <RadioGroup
                            className="flex space-x-2"
                            value={ratings.materials}
                            onValueChange={(value) => handleRatingChange("materials", value)}
                          >
                            {[1, 2, 3, 4, 5].map((value) => (
                              <div key={value} className="flex flex-col items-center">
                                <RadioGroupItem
                                  value={value.toString()}
                                  id={`materials-${value}`}
                                  className="sr-only"
                                />
                                <Label htmlFor={`materials-${value}`} className="cursor-pointer">
                                  <RatingOption
                                    value={value.toString()}
                                    selected={ratings.materials === value.toString()}
                                  />
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Poor</span>
                            <span>Excellent</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Assessment Methods</Label>
                          <RadioGroup
                            className="flex space-x-2"
                            value={ratings.assessment}
                            onValueChange={(value) => handleRatingChange("assessment", value)}
                          >
                            {[1, 2, 3, 4, 5].map((value) => (
                              <div key={value} className="flex flex-col items-center">
                                <RadioGroupItem
                                  value={value.toString()}
                                  id={`assessment-${value}`}
                                  className="sr-only"
                                />
                                <Label htmlFor={`assessment-${value}`} className="cursor-pointer">
                                  <RatingOption
                                    value={value.toString()}
                                    selected={ratings.assessment === value.toString()}
                                  />
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Poor</span>
                            <span>Excellent</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Faculty Support</Label>
                          <RadioGroup
                            className="flex space-x-2"
                            value={ratings.support}
                            onValueChange={(value) => handleRatingChange("support", value)}
                          >
                            {[1, 2, 3, 4, 5].map((value) => (
                              <div key={value} className="flex flex-col items-center">
                                <RadioGroupItem value={value.toString()} id={`support-${value}`} className="sr-only" />
                                <Label htmlFor={`support-${value}`} className="cursor-pointer">
                                  <RatingOption
                                    value={value.toString()}
                                    selected={ratings.support === value.toString()}
                                  />
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Poor</span>
                            <span>Excellent</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="comments">Additional Comments</Label>
                      <Textarea
                        id="comments"
                        placeholder="Please provide any additional feedback or suggestions"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        rows={5}
                      />
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSubmit} disabled={!isFormValid()} className="w-full">
                Submit Feedback
              </Button>
            </CardFooter>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Previous Feedback Submissions</CardTitle>
            <CardDescription>History of your feedback submissions</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead>Faculty</TableHead>
                  <TableHead>Submission Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {previousFeedbacks.map((feedback) => (
                  <TableRow key={feedback.id}>
                    <TableCell className="font-medium">{feedback.course}</TableCell>
                    <TableCell>{feedback.faculty}</TableCell>
                    <TableCell>{formatDate(feedback.date)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>{feedback.status}</span>
                      </div>
                    </TableCell>
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

