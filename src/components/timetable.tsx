import { Card } from "@/components/ui/card"

interface TimetableProps {
  userType: "student" | "faculty" | null
}

export default function Timetable({ userType }: TimetableProps) {
  const isStudent = userType === "student"

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

  const studentSchedule = {
    Monday: [
      { time: "9:00 AM - 10:30 AM", subject: "Mathematics", location: "Room 101" },
      { time: "11:00 AM - 12:30 PM", subject: "Computer Science", location: "Computer Lab" },
      { time: "2:00 PM - 3:30 PM", subject: "English Literature", location: "Room 302" },
    ],
    Tuesday: [
      { time: "10:00 AM - 11:30 AM", subject: "Physics", location: "Room 203" },
      { time: "1:00 PM - 2:30 PM", subject: "History", location: "Room 304" },
      { time: "3:00 PM - 4:30 PM", subject: "Study Group", location: "Library" },
    ],
    Wednesday: [
      { time: "9:00 AM - 10:30 AM", subject: "Biology", location: "Room 207" },
      { time: "11:00 AM - 12:30 PM", subject: "Art", location: "Art Studio" },
      { time: "2:00 PM - 3:30 PM", subject: "Physical Education", location: "Gymnasium" },
    ],
    Thursday: [
      { time: "10:00 AM - 11:30 AM", subject: "Chemistry", location: "Room 205" },
      { time: "1:00 PM - 2:30 PM", subject: "Music", location: "Music Room" },
      { time: "3:00 PM - 4:30 PM", subject: "Club Meeting", location: "Student Center" },
    ],
    Friday: [
      { time: "9:00 AM - 10:30 AM", subject: "Mathematics", location: "Room 101" },
      { time: "11:00 AM - 12:30 PM", subject: "English Literature", location: "Room 302" },
      { time: "1:00 PM", subject: "Early Dismissal", location: "" },
    ],
  }

  const facultySchedule = {
    Monday: [
      { time: "9:00 AM - 10:30 AM", subject: "Teaching: Mathematics", location: "Room 101" },
      { time: "11:00 AM - 12:30 PM", subject: "Teaching: Computer Science", location: "Computer Lab" },
      { time: "2:00 PM - 4:00 PM", subject: "Office Hours", location: "Faculty Office" },
    ],
    Tuesday: [
      { time: "10:00 AM - 11:30 AM", subject: "Teaching: Physics", location: "Room 203" },
      { time: "12:00 PM - 1:00 PM", subject: "Department Meeting", location: "Conference Room" },
      { time: "2:00 PM - 4:00 PM", subject: "Office Hours", location: "Faculty Office" },
    ],
    Wednesday: [
      { time: "9:00 AM - 10:30 AM", subject: "Teaching: Biology", location: "Room 207" },
      { time: "12:00 PM - 1:00 PM", subject: "Faculty Meeting", location: "Main Hall" },
      { time: "2:00 PM - 5:00 PM", subject: "Research Time", location: "Research Lab" },
    ],
    Thursday: [
      { time: "10:00 AM - 11:30 AM", subject: "Teaching: Chemistry", location: "Room 205" },
      { time: "1:00 PM - 3:00 PM", subject: "Student Consultations", location: "Faculty Office" },
      { time: "4:00 PM - 5:00 PM", subject: "Department Meeting", location: "Conference Room" },
    ],
    Friday: [
      { time: "9:00 AM - 10:30 AM", subject: "Teaching: Mathematics", location: "Room 101" },
      { time: "11:00 AM - 12:30 PM", subject: "Teaching: English Literature", location: "Room 302" },
      { time: "1:00 PM - 3:00 PM", subject: "Grading Time", location: "Faculty Office" },
    ],
  }

  const schedule = isStudent ? studentSchedule : facultySchedule

  // Highlight today's schedule
  const today = new Date().getDay() // 0 is Sunday, 1 is Monday, etc.
  const todayName = today > 0 && today < 6 ? days[today - 1] : null

  return (
    <div className="space-y-4">
      {days.map((day) => (
        <div key={day} className={`${todayName === day ? "border-l-4 border-primary pl-3" : ""}`}>
          <h3 className="font-medium text-lg mb-2 flex items-center">
            {day}
            {todayName === day && (
              <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">Today</span>
            )}
          </h3>
          <div className="space-y-2">
            {schedule[day].map((item, index) => (
              <Card key={index} className="p-3">
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-sm font-medium">{item.time}</div>
                  <div className="text-sm font-bold">{item.subject}</div>
                  <div className="text-sm text-muted-foreground">{item.location}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

