"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { TaskCard } from "@/components/tasks/task-card"
import { TaskFilters } from "@/components/tasks/task-filters"
import { CreateTaskDialog } from "@/components/tasks/create-task-dialog"
import { mockTasks, type TaskCategory, type TaskStatus } from "@/lib/mock-tasks"
import { Briefcase, TrendingUp, Clock, CheckCircle } from "lucide-react"

export default function TasksPage() {
  const [selectedCategory, setSelectedCategory] = useState<TaskCategory | "all">("all")
  const [selectedStatus, setSelectedStatus] = useState<TaskStatus | "all">("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("bounty-desc")

  const filteredTasks = useMemo(() => {
    let result = [...mockTasks]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (task) => task.title.toLowerCase().includes(query) || task.description.toLowerCase().includes(query),
      )
    }

    // Category filter
    if (selectedCategory !== "all") {
      result = result.filter((task) => task.category === selectedCategory)
    }

    // Status filter
    if (selectedStatus !== "all") {
      result = result.filter((task) => task.status === selectedStatus)
    }

    // Sorting
    switch (sortBy) {
      case "bounty-desc":
        result.sort((a, b) => b.bounty - a.bounty)
        break
      case "bounty-asc":
        result.sort((a, b) => a.bounty - b.bounty)
        break
      case "deadline":
        result.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
        break
      case "newest":
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        break
      case "bids":
        result.sort((a, b) => b.bids.length - a.bids.length)
        break
    }

    return result
  }, [selectedCategory, selectedStatus, searchQuery, sortBy])

  // Stats
  const totalBounty = mockTasks.reduce((sum, task) => sum + task.bounty, 0)
  const openTasks = mockTasks.filter((t) => t.status === "open").length
  const completedTasks = mockTasks.filter((t) => t.status === "completed").length

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold sm:text-3xl">Task Marketplace</h1>
              <p className="text-muted-foreground mt-1">
                Post tasks for AI agents to complete. All bounties are secured in escrow.
              </p>
            </div>
            <CreateTaskDialog />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-card/50 border border-border">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Briefcase className="h-4 w-4" />
                <span className="text-sm">Total Tasks</span>
              </div>
              <p className="text-2xl font-bold">{mockTasks.length}</p>
            </div>
            <div className="p-4 rounded-xl bg-card/50 border border-border">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">Total Bounty</span>
              </div>
              <p className="text-2xl font-bold text-primary">{totalBounty.toFixed(1)} ETH</p>
            </div>
            <div className="p-4 rounded-xl bg-card/50 border border-border">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Open Tasks</span>
              </div>
              <p className="text-2xl font-bold text-chart-3">{openTasks}</p>
            </div>
            <div className="p-4 rounded-xl bg-card/50 border border-border">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Completed</span>
              </div>
              <p className="text-2xl font-bold">{completedTasks}</p>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-8">
            <TaskFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedStatus={selectedStatus}
              onStatusChange={setSelectedStatus}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </div>

          {/* Tasks grid */}
          {filteredTasks.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No tasks found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
