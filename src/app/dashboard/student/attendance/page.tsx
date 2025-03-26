import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AttendancePage() {
  // Mock data
  const courses = [
    {
      id: "1",
      code: "CS401",
      name: "Machine Learning",
      totalClasses: 24,
      attended: 22,
      percentage: 91.7,
      history: [
        { date: "2024-03-01", status: "present" },
        { date: "2024-03-03", status: "present" },
        { date: "2024-03-08", status: "present" },
        { date: "2024-03-10", status: "absent" },
        { date: "2024-03-15", status: "present" },
        { date: "2024-03-17", status: "present" },
        { date: "2024-03-22", status: "present" },
        { date: "2024-03-24", status: "present" },
      ],
    },
    {
      id: "2",
      code: "CS402",
      name: "Computer Networks",
      totalClasses: 24,
      attended: 23,
      percentage: 95.8,
      history: [
        { date: "2024-03-02", status: "present" },
        { date: "2024-03-04", status: "present" },
        { date: "2024-03-09", status: "present" },
        { date: "2024-03-11", status: "present" },
        { date: "2024-03-16", status: "present" },
        { date: "2024-03-18", status: "present" },
        { date: "2024-03-23", status: "present" },
        { date: "2024-03-25", status: "absent" },
      ],
    },
    {
      id: "3",
      code: "CS403",
      name: "Software Engineering",
      totalClasses: 24,
      attended: 20,
      percentage: 83.3,
      history: [
        { date: "2024-03-01", status: "present" },
        { date: "2024-03-03", status: "absent" },
        { date: "2024-03-08", status: "present" },
        { date: "2024-03-10", status: "present" },
        { date: "2024-03-15", status: "absent" },
        { date: "2024-03-17", status: "present" },
        { date: "2024-03-22", status: "present" },
        { date: "2024-03-24", status: "present" },
      ],
    },
    {
      id: "4",
      code: "CS404",
      name: "Artificial Intelligence",
      totalClasses: 24,
      attended: 24,
      percentage: 100,
      history: [
        { date: "2024-03-02", status: "present" },
        { date: "2024-03-04", status: "present" },
        { date: "2024-03-09", status: "present" },
        { date: "2024-03-11", status: "present" },
        { date: "2024-03-16", status: "present" },
        { date: "2024-03-18", status: "present" },
        { date: "2024-03-23", status: "present" },
        { date: "2024-03-25", status: "present" },
      ],
    },
    {
      id: "5",
      code: "MA301",
      name: "Numerical Methods",
      totalClasses: 24,
      attended: 21,
      percentage: 87.5,
      history: [
        { date: "2024-03-01", status: "present" },
        { date: "2024-03-03", status: "present" },
        { date: "2024-03-08", status: "absent" },
        { date: "2024-03-10", status: "present" },
        { date: "2024-03-15", status: "present" },
        { date: "2024-03-17", status: "absent" },
        { date: "2024-03-22", status: "present" },
        { date: "2024-03-24", status: "present" },
      ],
    },
  ]

  const overallAttendance = {
    totalClasses: courses.reduce((sum, course) => sum + course.totalClasses, 0),
    attended: courses.reduce((sum, course) => sum + course.attended, 0),
  }

  const overallPercentage = (overallAttendance.attended / overallAttendance.totalClasses) * 100

  const getStatusColor = (status: string) => {
    return status === "present" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Attendance</h1>

        <Card>
          <CardHeader>
            <CardTitle>Overall Attendance</CardTitle>
            <CardDescription>
              {overallAttendance.attended} classes attended out of {overallAttendance.totalClasses}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{overallPercentage.toFixed(1)}%</span>
                <span className="text-sm text-muted-foreground">Minimum required: 75%</span>
              </div>
              <Progress value={overallPercentage} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Course-wise Attendance</CardTitle>
            <CardDescription>Detailed attendance for each course</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={courses[0].id}>
              <TabsList className="mb-4 w-full overflow-x-auto">
                {courses.map((course) => (
                  <TabsTrigger key={course.id} value={course.id}>
                    {course.code}
                  </TabsTrigger>
                ))}
              </TabsList>

              {courses.map((course) => (
                <TabsContent key={course.id} value={course.id} className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">{course.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{course.percentage.toFixed(1)}%</span>
                      <span className="text-sm text-muted-foreground">
                        {course.attended} classes attended out of {course.totalClasses}
                      </span>
                    </div>
                    <Progress
                      value={course.percentage}
                      className="h-2"
                      color={course.percentage < 75 ? "bg-red-500" : undefined}
                    />
                  </div>

                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {course.history.map((record, index) => (
                          <TableRow key={index}>
                            <TableCell>{formatDate(record.date)}</TableCell>
                            <TableCell>
                              <span
                                className={`rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(record.status)}`}
                              >
                                {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                              </span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

