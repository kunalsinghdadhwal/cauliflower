import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function GradesPage() {
  // Mock data
  const currentSemester = {
    name: "Spring 2024",
    courses: [
      { code: "CS301", name: "Data Structures", credits: 4, grade: "A", percentage: 92 },
      { code: "CS302", name: "Algorithms", credits: 4, grade: "A-", percentage: 88 },
      { code: "MA201", name: "Probability", credits: 3, grade: "B+", percentage: 85 },
      { code: "EE101", name: "Digital Electronics", credits: 3, grade: "A", percentage: 94 },
      { code: "HU101", name: "Technical Writing", credits: 2, grade: "A-", percentage: 89 },
    ],
  }

  const gradeHistory = [
    {
      semester: "Fall 2023",
      gpa: 3.7,
      courses: [
        { code: "CS201", name: "Object-Oriented Programming", credits: 4, grade: "A" },
        { code: "CS202", name: "Database Systems", credits: 4, grade: "A-" },
        { code: "MA101", name: "Calculus", credits: 3, grade: "B+" },
        { code: "PH101", name: "Physics I", credits: 3, grade: "A" },
        { code: "HU102", name: "Ethics in Computing", credits: 2, grade: "A" },
      ],
    },
    {
      semester: "Spring 2023",
      gpa: 3.6,
      courses: [
        { code: "CS101", name: "Introduction to Programming", credits: 4, grade: "A" },
        { code: "CS102", name: "Computer Architecture", credits: 3, grade: "B+" },
        { code: "MA102", name: "Linear Algebra", credits: 3, grade: "A-" },
        { code: "PH102", name: "Physics II", credits: 3, grade: "B+" },
        { code: "HU101", name: "Communication Skills", credits: 2, grade: "A" },
      ],
    },
  ]

  const getGradeColor = (grade: string) => {
    switch (grade[0]) {
      case "A":
        return "text-green-600"
      case "B":
        return "text-blue-600"
      case "C":
        return "text-yellow-600"
      case "D":
        return "text-orange-600"
      default:
        return "text-red-600"
    }
  }

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Grades & Academic Progress</h1>

        <Tabs defaultValue="current">
          <TabsList>
            <TabsTrigger value="current">Current Semester</TabsTrigger>
            <TabsTrigger value="history">Grade History</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{currentSemester.name}</CardTitle>
                <CardDescription>Current semester grades and progress</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course Code</TableHead>
                      <TableHead>Course Name</TableHead>
                      <TableHead>Credits</TableHead>
                      <TableHead>Grade</TableHead>
                      <TableHead>Progress</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentSemester.courses.map((course) => (
                      <TableRow key={course.code}>
                        <TableCell className="font-medium">{course.code}</TableCell>
                        <TableCell>{course.name}</TableCell>
                        <TableCell>{course.credits}</TableCell>
                        <TableCell className={getGradeColor(course.grade)}>{course.grade}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={course.percentage} className="w-full" />
                            <span className="text-xs">{course.percentage}%</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Semester Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Current GPA</p>
                    <p className="text-3xl font-bold">3.8</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Total Credits</p>
                    <p className="text-3xl font-bold">16</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Completion</p>
                    <Progress value={75} className="mt-2" />
                    <p className="text-xs text-muted-foreground">75% of semester completed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            {gradeHistory.map((semester) => (
              <Card key={semester.semester}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{semester.semester}</CardTitle>
                    <div className="text-2xl font-bold">GPA: {semester.gpa}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Course Code</TableHead>
                        <TableHead>Course Name</TableHead>
                        <TableHead>Credits</TableHead>
                        <TableHead>Grade</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {semester.courses.map((course) => (
                        <TableRow key={course.code}>
                          <TableCell className="font-medium">{course.code}</TableCell>
                          <TableCell>{course.name}</TableCell>
                          <TableCell>{course.credits}</TableCell>
                          <TableCell className={getGradeColor(course.grade)}>{course.grade}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

