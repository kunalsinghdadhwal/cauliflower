import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { ResearchPaper } from "@/lib/types"
import { BarChart, BookOpen, ExternalLink, FileText, Users } from "lucide-react"

export default function ResearchPage() {
  // Mock data
  const researchPapers: ResearchPaper[] = [
    {
      id: "1",
      title: "Machine Learning Applications in Healthcare",
      journal: "IEEE Transactions on Medical Imaging",
      year: "2023",
      coAuthors: ["Dr. Johnson", "Dr. Williams", "Dr. Brown"],
      url: "https://example.com/paper1",
    },
    {
      id: "2",
      title: "Deep Learning for Natural Language Processing",
      journal: "ACM Computing Surveys",
      year: "2022",
      coAuthors: ["Dr. Davis", "Dr. Miller"],
      url: "https://example.com/paper2",
    },
    {
      id: "3",
      title: "Advances in Computer Vision Algorithms",
      journal: "Computer Vision and Image Understanding",
      year: "2021",
      coAuthors: ["Dr. Taylor", "Dr. Anderson", "Dr. Thomas"],
      url: "https://example.com/paper3",
    },
    {
      id: "4",
      title: "Blockchain Technology for Secure Healthcare Data",
      journal: "Journal of Medical Systems",
      year: "2021",
      coAuthors: ["Dr. Wilson", "Dr. Moore"],
      url: "https://example.com/paper4",
    },
    {
      id: "5",
      title: "Quantum Computing: Challenges and Opportunities",
      journal: "IEEE Quantum Computing",
      year: "2020",
      coAuthors: ["Dr. Clark", "Dr. Lewis", "Dr. Young"],
      url: "https://example.com/paper5",
    },
  ]

  const conferences = [
    {
      id: "1",
      name: "International Conference on Machine Learning (ICML)",
      location: "Vienna, Austria",
      date: "2023-07-15",
      paper: "Reinforcement Learning in Healthcare Decision Making",
      role: "Speaker",
    },
    {
      id: "2",
      name: "ACM Conference on Computer and Communications Security (CCS)",
      location: "London, UK",
      date: "2022-11-10",
      paper: "Secure Multi-party Computation for Privacy-Preserving Data Analysis",
      role: "Panelist",
    },
    {
      id: "3",
      name: "IEEE International Conference on Data Engineering (ICDE)",
      location: "San Francisco, USA",
      date: "2022-05-20",
      paper: "Efficient Query Processing in Large-Scale Distributed Databases",
      role: "Speaker",
    },
  ]

  const projects = [
    {
      id: "1",
      title: "AI-Driven Healthcare Diagnostics",
      funding: "$250,000",
      duration: "2023-2025",
      status: "Ongoing",
      team: ["Dr. Smith", "Dr. Johnson", "Dr. Williams", "3 PhD Students"],
    },
    {
      id: "2",
      title: "Secure Blockchain Systems for Financial Transactions",
      funding: "$180,000",
      duration: "2022-2024",
      status: "Ongoing",
      team: ["Dr. Smith", "Dr. Davis", "Dr. Miller", "2 PhD Students"],
    },
    {
      id: "3",
      title: "Natural Language Processing for Educational Content",
      funding: "$120,000",
      duration: "2021-2023",
      status: "Completed",
      team: ["Dr. Smith", "Dr. Taylor", "2 PhD Students"],
    },
  ]

  const citations = {
    total: 450,
    hIndex: 15,
    i10Index: 20,
    byYear: [
      { year: "2023", count: 85 },
      { year: "2022", count: 120 },
      { year: "2021", count: 95 },
      { year: "2020", count: 75 },
      { year: "2019", count: 45 },
      { year: "2018", count: 30 },
    ],
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Research & Publications</h1>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Publications</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{researchPapers.length}</div>
              <p className="text-xs text-muted-foreground">Total research papers</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Citations</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{citations.total}</div>
              <p className="text-xs text-muted-foreground">Total citations</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">h-index</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{citations.hIndex}</div>
              <p className="text-xs text-muted-foreground">Research impact</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Projects</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{projects.length}</div>
              <p className="text-xs text-muted-foreground">Research projects</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="publications">
          <TabsList>
            <TabsTrigger value="publications">Publications</TabsTrigger>
            <TabsTrigger value="conferences">Conferences</TabsTrigger>
            <TabsTrigger value="projects">Research Projects</TabsTrigger>
            <TabsTrigger value="citations">Citations</TabsTrigger>
          </TabsList>

          <TabsContent value="publications">
            <Card>
              <CardHeader>
                <CardTitle>Research Publications</CardTitle>
                <CardDescription>Your published research papers</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Journal</TableHead>
                      <TableHead>Year</TableHead>
                      <TableHead>Co-Authors</TableHead>
                      <TableHead className="w-[100px]">Link</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {researchPapers.map((paper) => (
                      <TableRow key={paper.id}>
                        <TableCell className="font-medium">{paper.title}</TableCell>
                        <TableCell>{paper.journal}</TableCell>
                        <TableCell>{paper.year}</TableCell>
                        <TableCell>{paper.coAuthors.join(", ")}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" asChild>
                            <a href={paper.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="conferences">
            <Card>
              <CardHeader>
                <CardTitle>Conference Presentations</CardTitle>
                <CardDescription>Your conference participations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {conferences.map((conference) => (
                    <div key={conference.id} className="rounded-md border p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{conference.name}</h3>
                        <Badge>{conference.role}</Badge>
                      </div>
                      <p className="mt-1 text-sm">{conference.paper}</p>
                      <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
                        <span>{conference.location}</span>
                        <span>{formatDate(conference.date)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Research Projects</CardTitle>
                <CardDescription>Current and past research projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="rounded-md border p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{project.title}</h3>
                        <Badge variant={project.status === "Ongoing" ? "default" : "secondary"}>{project.status}</Badge>
                      </div>
                      <div className="mt-2 grid gap-2 sm:grid-cols-2">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Funding</p>
                          <p>{project.funding}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Duration</p>
                          <p>{project.duration}</p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm font-medium text-muted-foreground">Team</p>
                        <p className="text-sm">{project.team.join(", ")}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="citations">
            <Card>
              <CardHeader>
                <CardTitle>Citation Metrics</CardTitle>
                <CardDescription>Impact of your research</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-md border p-4 text-center">
                      <p className="text-sm font-medium text-muted-foreground">Total Citations</p>
                      <p className="text-3xl font-bold">{citations.total}</p>
                    </div>
                    <div className="rounded-md border p-4 text-center">
                      <p className="text-sm font-medium text-muted-foreground">h-index</p>
                      <p className="text-3xl font-bold">{citations.hIndex}</p>
                    </div>
                    <div className="rounded-md border p-4 text-center">
                      <p className="text-sm font-medium text-muted-foreground">i10-index</p>
                      <p className="text-3xl font-bold">{citations.i10Index}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-lg font-medium">Citations by Year</h3>
                    <div className="h-[200px] space-y-4">
                      <div className="flex h-full items-end gap-2">
                        {citations.byYear.map((item) => (
                          <div key={item.year} className="flex flex-1 flex-col items-center gap-2">
                            <div
                              className="w-full rounded-md bg-primary"
                              style={{
                                height: `${(item.count / Math.max(...citations.byYear.map((y) => y.count))) * 100}%`,
                              }}
                            ></div>
                            <span className="text-xs font-medium">{item.year}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

