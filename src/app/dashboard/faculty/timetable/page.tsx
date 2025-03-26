import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TimetablePage() {
  // Mock data
  const timeSlots = [
    "08:00 - 09:30",
    "09:45 - 11:15",
    "11:30 - 13:00",
    "14:00 - 15:30",
    "15:45 - 17:15",
    "17:30 - 19:00",
  ]

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

  const classes = [
    {
      id: "1",
      code: "CS101",
      name: "Introduction to Programming",
      day: "Monday",
      time: "09:45 - 11:15",
      location: "Room 201",
      type: "Lecture",
    },
    {
      id: "2",
      code: "CS101",
      name: "Introduction to Programming",
      day: "Wednesday",
      time: "09:45 - 11:15",
      location: "Room 201",
      type: "Lecture",
    },
    {
      id: "3",
      code: "CS101",
      name: "Introduction to Programming",
      day: "Friday",
      time: "14:00 - 15:30",
      location: "Lab 102",
      type: "Lab",
    },
    {
      id: "4",
      code: "CS301",
      name: "Data Structures",
      day: "Tuesday",
      time: "08:00 - 09:30",
      location: "Room 305",
      type: "Lecture",
    },
    {
      id: "5",
      code: "CS301",
      name: "Data Structures",
      day: "Thursday",
      time: "08:00 - 09:30",
      location: "Room 305",
      type: "Lecture",
    },
    {
      id: "6",
      code: "CS401",
      name: "Machine Learning",
      day: "Monday",
      time: "14:00 - 15:30",
      location: "Room 401",
      type: "Lecture",
    },
    {
      id: "7",
      code: "CS401",
      name: "Machine Learning",
      day: "Wednesday",
      time: "14:00 - 15:30",
      location: "Room 401",
      type: "Lecture",
    },
    {
      id: "8",
      code: "CS501",
      name: "Advanced Algorithms",
      day: "Tuesday",
      time: "15:45 - 17:15",
      location: "Room 201",
      type: "Lecture",
    },
    {
      id: "9",
      code: "CS501",
      name: "Advanced Algorithms",
      day: "Thursday",
      time: "15:45 - 17:15",
      location: "Room 201",
      type: "Lecture",
    },
  ]

  // Function to get class for a specific day and time slot
  const getClass = (day: string, time: string) => {
    return classes.find((c) => c.day === day && c.time === time)
  }

  // Function to get badge color based on class type
  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "Lecture":
        return "default"
      case "Lab":
        return "secondary"
      case "Tutorial":
        return "outline"
      default:
        return "default"
    }
  }

  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Weekly Timetable</h1>

        <Card>
          <CardHeader>
            <CardTitle>Class Schedule</CardTitle>
            <CardDescription>Your teaching schedule for the current semester</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden rounded-md border">
                  <table className="min-w-full divide-y divide-border">
                    <thead>
                      <tr className="divide-x divide-border">
                        <th className="bg-muted px-4 py-3 text-left text-sm font-medium text-muted-foreground">Time</th>
                        {days.map((day) => (
                          <th
                            key={day}
                            className="bg-muted px-4 py-3 text-left text-sm font-medium text-muted-foreground"
                          >
                            {day}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {timeSlots.map((time) => (
                        <tr key={time} className="divide-x divide-border">
                          <td className="px-4 py-3 text-sm font-medium">{time}</td>
                          {days.map((day) => {
                            const classItem = getClass(day, time)
                            return (
                              <td key={`${day}-${time}`} className="px-4 py-3 text-sm">
                                {classItem ? (
                                  <div className="space-y-1">
                                    <div className="flex items-center justify-between">
                                      <span className="font-medium">{classItem.code}</span>
                                      <Badge variant={getBadgeVariant(classItem.type)}>{classItem.type}</Badge>
                                    </div>
                                    <p className="text-xs text-muted-foreground">{classItem.name}</p>
                                    <p className="text-xs text-muted-foreground">{classItem.location}</p>
                                  </div>
                                ) : null}
                              </td>
                            )
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Today&apos;s Classes</CardTitle>
              <CardDescription>Classes scheduled for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {classes
                  .filter((c) => c.day === "Monday") // In a real app, use the current day
                  .map((classItem) => (
                    <div key={classItem.id} className="flex items-center justify-between rounded-md border p-3">
                      <div>
                        <div className="font-medium">
                          {classItem.code} - {classItem.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {classItem.time} • {classItem.location}
                        </div>
                      </div>
                      <Badge variant={getBadgeVariant(classItem.type)}>{classItem.type}</Badge>
                    </div>
                  ))}
                {classes.filter((c) => c.day === "Monday").length === 0 && (
                  <p className="text-center text-muted-foreground py-4">No classes scheduled for today</p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Course Summary</CardTitle>
              <CardDescription>Overview of your courses this semester</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from(new Set(classes.map((c) => c.code))).map((code) => {
                  const course = classes.find((c) => c.code === code)
                  const courseClasses = classes.filter((c) => c.code === code)

                  return (
                    <div key={code} className="rounded-md border p-3">
                      <div className="font-medium">
                        {course?.code} - {course?.name}
                      </div>
                      <div className="mt-2 space-y-1">
                        {courseClasses.map((c) => (
                          <div key={c.id} className="flex items-center justify-between text-sm">
                            <span>
                              {c.day}, {c.time}
                            </span>
                            <span className="text-muted-foreground">{c.location}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

