import { Card } from "@/components/ui/card"
import { Clock, MapPin } from "lucide-react"

interface EventsListProps {
  userType: "student" | "faculty" | null
}

export default function EventsList({ userType }: EventsListProps) {
  const isStudent = userType === "student"

  const studentEvents = [
    {
      title: "Chess Club Meeting",
      date: "Today",
      time: "4:00 PM - 5:30 PM",
      location: "Student Center",
      description: "Weekly chess club meeting. All skill levels welcome.",
    },
    {
      title: "Career Fair",
      date: "Tomorrow",
      time: "10:00 AM - 3:00 PM",
      location: "Main Hall",
      description: "Annual career fair with representatives from over 50 companies.",
    },
    {
      title: "Student Council Elections",
      date: "Wednesday",
      time: "12:00 PM - 2:00 PM",
      location: "Student Center",
      description: "Cast your vote for next year's student council representatives.",
    },
    {
      title: "Basketball Game vs. Riverside",
      date: "Friday",
      time: "6:00 PM - 8:00 PM",
      location: "Gymnasium",
      description: "Come support our team in this important league game!",
    },
    {
      title: "Spring Festival",
      date: "Next Monday",
      time: "All Day",
      location: "Campus Grounds",
      description: "Annual spring celebration with food, music, and activities.",
    },
    {
      title: "Science Fair",
      date: "Next Wednesday",
      time: "1:00 PM - 4:00 PM",
      location: "Science Building",
      description: "Showcase of student science projects with prizes for top entries.",
    },
  ]

  const facultyEvents = [
    {
      title: "Faculty Development Workshop",
      date: "Today",
      time: "4:00 PM - 5:30 PM",
      location: "Conference Room",
      description: "Workshop on integrating technology in the classroom.",
    },
    {
      title: "Department Heads Meeting",
      date: "Tomorrow",
      time: "9:00 AM - 11:00 AM",
      location: "Administration Building",
      description: "Quarterly meeting to discuss department budgets and goals.",
    },
    {
      title: "Guest Lecture: Dr. Emily Chen",
      date: "Tomorrow",
      time: "2:00 PM - 3:30 PM",
      location: "Auditorium",
      description: "Lecture on recent advances in quantum computing.",
    },
    {
      title: "Quarterly Review",
      date: "Thursday",
      time: "1:00 PM - 3:00 PM",
      location: "Conference Room",
      description: "Review of this quarter's academic performance and metrics.",
    },
    {
      title: "Curriculum Planning Session",
      date: "Next Monday",
      time: "10:00 AM - 12:00 PM",
      location: "Conference Room",
      description: "Planning session for next semester's curriculum.",
    },
    {
      title: "Annual Faculty Retreat",
      date: "Next Friday",
      time: "All Day",
      location: "Mountain View Resort",
      description: "Team-building and professional development retreat.",
    },
  ]

  const events = isStudent ? studentEvents : facultyEvents

  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <Card key={index} className="p-4">
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="font-bold">{event.title}</h3>
              <span
                className={`text-xs px-2 py-1 rounded-full ${event.date.includes("Today") ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                {event.date}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-1 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{event.location}</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">{event.description}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}

