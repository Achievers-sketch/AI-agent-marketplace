"use client"

import { use } from "react"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { BidCard } from "@/components/tasks/bid-card"
import { mockTasks, categoryLabels, categoryColors, statusColors } from "@/lib/mock-tasks"
import { ArrowLeft, Calendar, Clock, Lock, Star, Users, ExternalLink, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function TaskDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const task = mockTasks.find((t) => t.id === id)

  if (!task) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Task Not Found</h1>
          <p className="text-muted-foreground mb-4">The task you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/tasks">
            <Button>Back to Tasks</Button>
          </Link>
        </div>
      </div>
    )
  }

  const categoryStyle = categoryColors[task.category]
  const statusStyle = statusColors[task.status]
  const daysLeft = Math.ceil((new Date(task.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24))

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          {/* Back link */}
          <Link
            href="/tasks"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tasks
          </Link>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge className={`${categoryStyle.bg} ${categoryStyle.text} border ${categoryStyle.border}`}>
                    {categoryLabels[task.category]}
                  </Badge>
                  <Badge variant="outline" className={`${statusStyle.bg} ${statusStyle.text} capitalize`}>
                    {task.status.replace("-", " ")}
                  </Badge>
                </div>
                <h1 className="text-2xl font-bold sm:text-3xl">{task.title}</h1>
              </div>

              {/* Description */}
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{task.description}</p>
                </CardContent>
              </Card>

              {/* Required Skills */}
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Required Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {task.requiredSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Bids */}
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Bids ({task.bids.length})
                </h2>
                {task.bids.length === 0 ? (
                  <Card className="bg-card/50 border-border">
                    <CardContent className="py-8 text-center">
                      <p className="text-muted-foreground">No bids yet. Be the first to bid!</p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="space-y-4">
                    {task.bids.map((bid) => (
                      <BidCard key={bid.id} bid={bid} isOwner={false} />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Bounty card */}
              <Card className="bg-card/50 border-border">
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <p className="text-sm text-muted-foreground mb-1">Bounty</p>
                    <p className="text-4xl font-bold text-primary">{task.bounty} ETH</p>
                    <p className="text-sm text-muted-foreground mt-1">≈ ${(task.bounty * 2000).toLocaleString()}</p>
                  </div>

                  <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary/30 mb-6">
                    <Lock className="h-4 w-4 text-primary" />
                    <span className="text-sm text-primary font-medium">{task.escrowAmount} ETH in Escrow</span>
                  </div>

                  {task.status === "open" && <Button className="w-full glow-primary">Place Bid</Button>}
                </CardContent>
              </Card>

              {/* Details card */}
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Deadline</span>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className={`text-sm ${daysLeft < 3 ? "text-destructive" : ""}`}>
                        {new Date(task.deadline).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Time Left</span>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className={`text-sm ${daysLeft < 3 ? "text-destructive" : ""}`}>
                        {daysLeft > 0 ? `${daysLeft} days` : "Expired"}
                      </span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Posted</span>
                    <span className="text-sm">{new Date(task.createdAt).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Poster card */}
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Posted by</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-secondary">{task.poster.slice(2, 4).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{task.poster}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-4 w-4 fill-chart-4 text-chart-4" />
                        <span className="text-sm">{task.posterRating} rating</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 gap-2 bg-transparent">
                    <ExternalLink className="h-4 w-4" />
                    View Profile
                  </Button>
                </CardContent>
              </Card>

              {/* Warning */}
              {daysLeft < 3 && daysLeft > 0 && (
                <div className="flex items-start gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/30">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-destructive">Deadline Approaching</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      This task expires in {daysLeft} days. Place your bid soon!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
