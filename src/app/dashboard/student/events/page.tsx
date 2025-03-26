import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import type { Event } from "@/lib/types"
import { Calendar, MapPin, Users } from "lucide-react"

export default function EventsPage() {
  // Mock data
  const upcomingEvents: Event[] = [
    {
      id: "1",
      title: "Annual Tech Symposium",
      description:
        "Join us for a day of technology talks, workshops, and networking opportunities with industry professionals.",
      date: "2024-04-15",
      location: "Main Auditorium",
    },
    {
      id: "2",
      title: "Career Fair",
      description: "Meet representatives from top companies and explore internship and job opportunities.",
      date: "2024-04-20",
      location: "University Center",
    },
    {
      id: "3",
      title: "Research Showcase",
      description: "Students and faculty present their latest research projects and findings.",
      date: "2024-05-05",
      location: "Science Building",
    },
    {
      id: "4",
      title: "Alumni Networking Event",
      description: "Connect with alumni and learn about their career journeys and experiences.",
      date: "2024-05-12",
      location: "Business School Lounge",
    },
  ]

  const academicEvents: Event[] = [
    {
      id: "5",
      title: "Final Exams",
      description: "End of semester examinations for all courses.",
      date: "2024-05-20",
      location: "Various Locations",
    },
    {
      id: "6",
      title: "Course Registration",
      description: "Registration period for the Fall 2024 semester.",
      date: "2024-06-10",
      location: "Online",
    },
    {
      id: "7",
      title: "Graduation Ceremony",
      description: "Commencement ceremony for the Class of 2024.",
      date: "2024-06-15",
      location: "University Stadium",
    },
  ]

  const clubEvents: Event[] = [
    {
      id: "8",
      title: "Coding Competition",
      description: "Test your programming skills in this competitive coding event.",
      date: "2024-04-10",
      location: "Computer Science Building",
    },
    {
      id: "9",
      title: "Debate Club Finals",
      description: "Watch the final round of the annual debate competition.",
      date: "2024-04-18",
      location: "Humanities Auditorium",
    },
    {
      id: "10",
      title: "Cultural Festival",
      description: "Celebrate diversity with performances, food, and activities from different cultures.",
      date: "2024-04-25",
      location: "University Quad",
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getTimeUntil = (dateString: string) => {
    const today = new Date()
    const eventDate = new Date(dateString)
    const diffTime = eventDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return "Today"
    if (diffDays === 1) return "Tomorrow"
    if (diffDays > 1 && diffDays < 7) return `In ${diffDays} days`
    if (diffDays >= 7 && diffDays < 14) return "Next week"
    if (diffDays >= 14 && diffDays < 30) return "In 2 weeks"
    return `In ${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? "s" : ""}`
  }

  const EventCard = ({ event }: { event: Event }) => (
    <Card className="overflow-hidden">
      <div className="h-2 bg-primary"></div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>{event.title}</CardTitle>
            <CardDescription>
              <div className="flex items-center gap-1 mt-1">
                <Calendar className="h-3 w-3" />
                <span>{formatDate(event.date)}</span>
              </div>
            </CardDescription>
          </div>
          <Badge variant="outline">{getTimeUntil(event.date)}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span>{event.location}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <Users className="mr-2 h-4 w-4" />
          Register for Event
        </Button>
      </CardFooter>
    </Card>
  )

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Events & Activities</h1>

        <Tabs defaultValue="upcoming">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="academic">Academic Calendar</TabsTrigger>
            <TabsTrigger value="clubs">Club Activities</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="academic" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {academicEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="clubs" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {clubEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

