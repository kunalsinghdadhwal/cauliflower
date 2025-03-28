"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Calendar,
  GraduationCap,
  Library,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Users,
  Building,
  Award,
  Clock,
  ArrowRight,
  LayoutDashboard,
} from "lucide-react"
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes"

export default function CollegeLandingPage() {
  const { theme, setTheme } = useTheme();
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6" />
            <span className="text-xl font-bold">Cauliflower College</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#academics" className="text-sm font-medium hover:underline underline-offset-4">
              Academics
            </Link>
            <Link href="#campus" className="text-sm font-medium hover:underline underline-offset-4">
              Campus Life
            </Link>
            <Link href="#admissions" className="text-sm font-medium hover:underline underline-offset-4">
              Admissions
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/sign-in">
              <Button variant="log-in" size="sm" className="bg-black text-white hover:bg-black/80 hover:text-white">
                Log In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button variant="outline" size="sm" className="bg-black text-white hover:bg-black/80 hover:text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Announcement Banner */}
      <section className="w-full bg-primary py-4">
        <div className="container flex items-center justify-between px-4 md:px-6 text-primary-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <p className="text-sm font-medium">Fall 2023 Admissions Now Open - Apply by June 30th</p>
          </div>
          <Button variant="secondary" size="sm">
            Learn More
          </Button>
        </div>
      </section>

      <main>
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    The Complete College Management System
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Streamline your institution's operations with our all-in-one platform for students, faculty, and
                    administrators.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/dashboard">
                    <Button size="lg" className="gap-1">
                      Try Demo
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl" />
                  <div className="absolute inset-10 bg-muted rounded-lg shadow-lg overflow-hidden">
                    <div className="p-4 border-b">
                      <div className="flex items-center gap-2">
                        <LayoutDashboard className="h-5 w-5 text-primary" />
                        <span className="font-medium">Dashboard</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 p-4">
                      <div className="bg-background rounded p-3 shadow-sm">
                        <Users className="h-5 w-5 text-primary mb-2" />
                        <div className="text-sm font-medium">Students</div>
                        <div className="text-2xl font-bold">2,543</div>
                      </div>
                      <div className="bg-background rounded p-3 shadow-sm">
                        <BookOpen className="h-5 w-5 text-primary mb-2" />
                        <div className="text-sm font-medium">Courses</div>
                        <div className="text-2xl font-bold">156</div>
                      </div>
                      <div className="bg-background rounded p-3 shadow-sm">
                        <Calendar className="h-5 w-5 text-primary mb-2" />
                        <div className="text-sm font-medium">Events</div>
                        <div className="text-2xl font-bold">12</div>
                      </div>
                      <div className="bg-background rounded p-3 shadow-sm">
                        <Library className="h-5 w-5 text-primary mb-2" />
                        <div className="text-sm font-medium">Library</div>
                        <div className="text-2xl font-bold">8,721</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Cauliflower College</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Founded in 1985, Cauliflower College has been a beacon of academic excellence for over 35 years.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="College campus"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Our Mission</h3>
                      <p className="text-muted-foreground">
                        To provide transformative education that empowers students to make meaningful contributions to
                        society.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Our Vision</h3>
                      <p className="text-muted-foreground">
                        To be a leading institution recognized globally for academic excellence, innovation, and social
                        impact.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Our Values</h3>
                      <p className="text-muted-foreground">
                        Excellence, Integrity, Diversity, Innovation, and Community Engagement.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="w-full py-12 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
              <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg bg-background p-4">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="text-3xl font-bold">5,000+</h3>
                <p className="text-sm text-muted-foreground text-center">Students Enrolled</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg bg-background p-4">
                <BookOpen className="h-8 w-8 text-primary" />
                <h3 className="text-3xl font-bold">50+</h3>
                <p className="text-sm text-muted-foreground text-center">Academic Programs</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg bg-background p-4">
                <Award className="h-8 w-8 text-primary" />
                <h3 className="text-3xl font-bold">95%</h3>
                <p className="text-sm text-muted-foreground text-center">Graduate Employment Rate</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg bg-background p-4">
                <Building className="h-8 w-8 text-primary" />
                <h3 className="text-3xl font-bold">25</h3>
                <p className="text-sm text-muted-foreground text-center">Campus Buildings</p>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Programs */}
        <section id="academics" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Academic Programs</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our diverse range of undergraduate and graduate programs designed to prepare you for success.
                </p>
              </div>
            </div>
            <div className="grid gap-6 pt-10 md:grid-cols-2 lg:grid-cols-3">
              {/* Program Card 1 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg">
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black/60" />
                <div className="absolute top-0 right-0 z-20 p-2">
                  <div className="rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                    Popular
                  </div>
                </div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Business program"
                  className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">Business Administration</h3>
                  <p className="text-sm text-white/80">Bachelor's and Master's Programs</p>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="mt-4 w-fit opacity-0 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Program Card 2 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg">
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black/60" />
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Engineering program"
                  className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">Engineering</h3>
                  <p className="text-sm text-white/80">Civil, Mechanical, Electrical, and Computer</p>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="mt-4 w-fit opacity-0 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Program Card 3 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg">
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black/60" />
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Arts program"
                  className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">Arts & Humanities</h3>
                  <p className="text-sm text-white/80">Literature, History, Philosophy, and Fine Arts</p>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="mt-4 w-fit opacity-0 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Program Card 4 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg">
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black/60" />
                <div className="absolute top-0 right-0 z-20 p-2">
                  <div className="rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                    New
                  </div>
                </div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Science program"
                  className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">Natural Sciences</h3>
                  <p className="text-sm text-white/80">Biology, Chemistry, Physics, and Mathematics</p>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="mt-4 w-fit opacity-0 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Program Card 5 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg">
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black/60" />
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Health Sciences program"
                  className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">Health Sciences</h3>
                  <p className="text-sm text-white/80">Nursing, Public Health, and Pre-Medical</p>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="mt-4 w-fit opacity-0 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Program Card 6 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg">
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black/60" />
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Computer Science program"
                  className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">Computer Science</h3>
                  <p className="text-sm text-white/80">Software Engineering, AI, and Data Science</p>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="mt-4 w-fit opacity-0 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <Button variant="outline" className="gap-2">
                View All Programs
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Campus Life */}
        <section id="campus" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Campus Life</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience a vibrant campus community with state-of-the-art facilities and diverse student activities.
                </p>
              </div>
              <Button size="lg" className="mt-4">
                Take a Virtual Campus Tour
              </Button>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width={300}
                    height={300}
                    alt="Campus library"
                    className="rounded-lg object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button variant="secondary" size="sm">
                      Library Tour
                    </Button>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width={300}
                    height={300}
                    alt="Student center"
                    className="rounded-lg object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button variant="secondary" size="sm">
                      Student Center
                    </Button>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width={300}
                    height={300}
                    alt="Sports facilities"
                    className="rounded-lg object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button variant="secondary" size="sm">
                      Sports Facilities
                    </Button>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width={300}
                    height={300}
                    alt="Dormitories"
                    className="rounded-lg object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button variant="secondary" size="sm">
                      Residence Halls
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Library className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Modern Facilities</h3>
                      <p className="text-muted-foreground">
                        State-of-the-art libraries, laboratories, classrooms, and recreational facilities.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Student Clubs</h3>
                      <p className="text-muted-foreground">
                        Over 50 student-led organizations covering academic, cultural, and recreational interests.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Building className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Residence Halls</h3>
                      <p className="text-muted-foreground">
                        Comfortable on-campus housing options with modern amenities and supportive communities.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Events and News */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Events & News</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay updated with the latest happenings at Cauliflower College.
                </p>
              </div>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-12">
              {/* Featured Event */}
              <div className="md:col-span-8 group relative overflow-hidden rounded-xl border">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  width={800}
                  height={400}
                  alt="Spring Commencement"
                  className="h-[300px] md:h-[400px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                      Featured Event
                    </div>
                    <div className="flex items-center gap-1 text-sm text-white">
                      <Calendar className="h-4 w-4" />
                      <span>May 15, 2023</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Spring Commencement Ceremony</h3>
                  <p className="mt-2 text-white/80 max-w-[600px]">
                    Join us in celebrating the achievements of our graduating class of 2023. The ceremony will feature
                    keynote speaker Dr. Jane Smith, renowned scientist and alumna.
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="flex items-center gap-1 text-sm text-white/80">
                      <Clock className="h-4 w-4" />
                      <span>10:00 AM</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-white/80">
                      <MapPin className="h-4 w-4" />
                      <span>Main Auditorium</span>
                    </div>
                  </div>
                  <Button className="mt-4 w-fit">Learn More</Button>
                </div>
              </div>

              {/* News and Events Column */}
              <div className="md:col-span-4 space-y-6">
                {/* News Item */}
                <div className="group relative overflow-hidden rounded-lg border bg-background hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>April 28, 2023</span>
                    </div>
                    <h3 className="mt-3 text-xl font-bold group-hover:text-primary transition-colors">
                      Faculty Receives $2M Research Grant
                    </h3>
                    <p className="mt-2 text-muted-foreground line-clamp-2">
                      Professor Sarah Johnson's team awarded major grant for climate research.
                    </p>
                    <Button variant="link" className="mt-2 p-0 h-auto font-medium group">
                      <span>Read More</span>
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>

                {/* Event Item */}
                <div className="group relative overflow-hidden rounded-lg border bg-background hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>June 5, 2023</span>
                    </div>
                    <h3 className="mt-3 text-xl font-bold group-hover:text-primary transition-colors">
                      Summer Orientation
                    </h3>
                    <p className="mt-2 text-muted-foreground line-clamp-2">
                      Welcome event for incoming freshmen to tour the campus and meet faculty.
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <Button variant="link" className="mt-2 p-0 h-auto font-medium group">
                      <span>Learn More</span>
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>

                {/* View All Button */}
                <Button variant="outline" className="w-full gap-2 group">
                  <span>View All Events & News</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Admissions */}
        <section id="admissions" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Join Our Community?</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Take the first step towards your future by applying to Cauliflower College today.
                  </p>
                </div>
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Application Deadlines</h3>
                      <p className="text-muted-foreground">Fall Semester: June 30 | Spring Semester: November 15</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Admission Requirements</h3>
                      <p className="text-muted-foreground">
                        High school diploma or equivalent, standardized test scores, personal statement, and letters of
                        recommendation.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Financial Aid & Scholarships</h3>
                      <p className="text-muted-foreground">
                        Various merit-based and need-based scholarships available to help make your education
                        affordable.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="px-8">
                    Apply Now
                  </Button>
                  <Button variant="outline" size="lg" className="px-8">
                    Request Information
                  </Button>
                </div>
              </div>
              <div className="space-y-6 rounded-xl border bg-muted p-6">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Campus life"
                    className="w-full h-[250px] object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-xl font-bold">Virtual Campus Tour</h3>
                      <p className="text-sm text-white/80">Explore our campus from anywhere</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg bg-background p-4 hover:border-primary transition-colors">
                    <Calendar className="h-8 w-8 text-primary" />
                    <h3 className="text-lg font-bold text-center">Open House</h3>
                    <p className="text-xs text-muted-foreground text-center">Every Saturday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're here to answer your questions and provide assistance.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Campus Address</h3>
                      <p className="text-muted-foreground">
                        123 College Avenue
                        <br />
                        Anytown, ST 12345
                        <br />
                        United States
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Phone</h3>
                      <p className="text-muted-foreground">
                        Main: (123) 456-7890
                        <br />
                        Admissions: (123) 456-7891
                        <br />
                        Financial Aid: (123) 456-7892
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Email</h3>
                      <p className="text-muted-foreground">
                        info@Cauliflowercollege.edu
                        <br />
                        admissions@Cauliflowercollege.edu
                        <br />
                        financialaid@Cauliflowercollege.edu
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border bg-background p-2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Campus map"
                  className="rounded-lg w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] opacity-10 bg-cover bg-center"></div>
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl"></div>
          <div className="container relative grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter md:text-5xl/tight">
                Begin Your Journey at Cauliflower College
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl/relaxed">
                Take the first step towards a transformative educational experience that will shape your future and open
                doors to endless possibilities.
              </p>
            </div>
            <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row justify-center mt-6">
              <Button size="lg" variant="secondary" className="px-8 group">
                <span>Apply Now</span>
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Schedule a Visit
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2">
                <Award className="h-5 w-5" />
                <span className="text-sm font-medium">Top-Ranked Programs</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2">
                <Users className="h-5 w-5" />
                <span className="text-sm font-medium">Diverse Community</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2">
                <BookOpen className="h-5 w-5" />
                <span className="text-sm font-medium">Innovative Research</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-12">
        <div className="container flex flex-col gap-8 px-4 md:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
            <div className="flex flex-col gap-3 lg:max-w-sm">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6" />
                <span className="text-xl font-bold">Cauliflower College</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering students to achieve academic excellence and personal growth since 1985.
              </p>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Academics</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      Programs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      Departments
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      Calendar
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      Library
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Admissions</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      Apply
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      Financial Aid
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      Visit
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      Request Info
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Campus Life</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      Housing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      Dining
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      Athletics
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      Student Clubs
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      Directory
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      News
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:underline">
                      Alumni
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row items-center justify-between">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Cauliflower College. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-muted-foreground hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:underline">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:underline">
                Accessibility
              </Link>
            </div>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}