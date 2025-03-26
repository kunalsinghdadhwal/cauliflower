"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import type { Payment } from "@/lib/types"
import { AlertCircle, CreditCard, Download, FileText, Receipt } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function PaymentsPage() {
  // Mock data
  const currentFees: Payment[] = [
    {
      id: "1",
      description: "Tuition Fee - Spring 2024",
      amount: 5000,
      dueDate: "2024-04-15",
      status: "pending",
    },
    {
      id: "2",
      description: "Library Fee - Spring 2024",
      amount: 200,
      dueDate: "2024-04-15",
      status: "pending",
    },
    {
      id: "3",
      description: "Laboratory Fee - Spring 2024",
      amount: 300,
      dueDate: "2024-04-15",
      status: "pending",
    },
  ]

  const paymentHistory: Payment[] = [
    {
      id: "4",
      description: "Tuition Fee - Fall 2023",
      amount: 5000,
      dueDate: "2023-10-15",
      status: "paid",
    },
    {
      id: "5",
      description: "Library Fee - Fall 2023",
      amount: 200,
      dueDate: "2023-10-15",
      status: "paid",
    },
    {
      id: "6",
      description: "Laboratory Fee - Fall 2023",
      amount: 300,
      dueDate: "2023-10-15",
      status: "paid",
    },
    {
      id: "7",
      description: "Tuition Fee - Spring 2023",
      amount: 4800,
      dueDate: "2023-04-15",
      status: "paid",
    },
    {
      id: "8",
      description: "Library Fee - Spring 2023",
      amount: 200,
      dueDate: "2023-04-15",
      status: "paid",
    },
    {
      id: "9",
      description: "Laboratory Fee - Spring 2023",
      amount: 300,
      dueDate: "2023-04-15",
      status: "paid",
    },
  ]

  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const toggleSelectItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id))
    } else {
      setSelectedItems([...selectedItems, id])
    }
  }

  const selectAll = () => {
    if (selectedItems.length === currentFees.length) {
      setSelectedItems([])
    } else {
      setSelectedItems(currentFees.map((fee) => fee.id))
    }
  }

  const totalSelected = currentFees
    .filter((fee) => selectedItems.includes(fee.id))
    .reduce((sum, fee) => sum + fee.amount, 0)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-green-500">Paid</Badge>
      case "pending":
        return (
          <Badge variant="outline" className="text-amber-500 border-amber-500">
            Pending
          </Badge>
        )
      case "overdue":
        return <Badge variant="destructive">Overdue</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getDaysRemaining = (dueDate: string) => {
    const today = new Date()
    const due = new Date(dueDate)
    const diffTime = due.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    return diffDays
  }

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Fees & Payments</h1>

        <Tabs defaultValue="current">
          <TabsList>
            <TabsTrigger value="current">Current Fees</TabsTrigger>
            <TabsTrigger value="history">Payment History</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Current Semester Fees</CardTitle>
                <CardDescription>Spring 2024</CardDescription>
              </CardHeader>
              <CardContent>
                {currentFees.length === 0 ? (
                  <p className="text-center text-muted-foreground py-4">No pending fees</p>
                ) : (
                  <div className="space-y-4">
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Payment Due</AlertTitle>
                      <AlertDescription>
                        Your payment for Spring 2024 is due on April 15, 2024. Please make the payment before the due
                        date to avoid late fees.
                      </AlertDescription>
                    </Alert>

                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[50px]">
                            <input
                              type="checkbox"
                              checked={selectedItems.length === currentFees.length && currentFees.length > 0}
                              onChange={selectAll}
                              className="h-4 w-4 rounded border-gray-300"
                            />
                          </TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Due Date</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {currentFees.map((fee) => (
                          <TableRow key={fee.id}>
                            <TableCell>
                              <input
                                type="checkbox"
                                checked={selectedItems.includes(fee.id)}
                                onChange={() => toggleSelectItem(fee.id)}
                                className="h-4 w-4 rounded border-gray-300"
                              />
                            </TableCell>
                            <TableCell className="font-medium">{fee.description}</TableCell>
                            <TableCell>{formatCurrency(fee.amount)}</TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <div>{formatDate(fee.dueDate)}</div>
                                <div className="text-xs text-muted-foreground">
                                  {getDaysRemaining(fee.dueDate) > 0
                                    ? `${getDaysRemaining(fee.dueDate)} days remaining`
                                    : "Overdue"}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{getStatusBadge(fee.status)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex flex-col items-end gap-4 sm:flex-row sm:justify-between">
                <div className="space-y-1">
                  <div className="text-sm font-medium">Total Selected</div>
                  <div className="text-2xl font-bold">{formatCurrency(totalSelected)}</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Download Invoice
                  </Button>
                  <Button disabled={selectedItems.length === 0}>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Pay Now
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Available payment options</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Credit/Debit Card</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">Pay securely using your credit or debit card.</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2">
                      <Receipt className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Bank Transfer</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">Transfer directly to the university account.</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Scholarship/Financial Aid</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">Apply your scholarship or financial aid.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>Record of your previous payments</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Description</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-[100px]">Receipt</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paymentHistory.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell className="font-medium">{payment.description}</TableCell>
                        <TableCell>{formatCurrency(payment.amount)}</TableCell>
                        <TableCell>{formatDate(payment.dueDate)}</TableCell>
                        <TableCell>{getStatusBadge(payment.status)}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

