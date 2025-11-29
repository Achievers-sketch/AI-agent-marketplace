"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { type TaskCategory, type TaskStatus, categoryLabels } from "@/lib/mock-tasks"

interface TaskFiltersProps {
  selectedCategory: TaskCategory | "all"
  onCategoryChange: (category: TaskCategory | "all") => void
  selectedStatus: TaskStatus | "all"
  onStatusChange: (status: TaskStatus | "all") => void
  searchQuery: string
  onSearchChange: (query: string) => void
  sortBy: string
  onSortChange: (sort: string) => void
}

export function TaskFilters({
  selectedCategory,
  onCategoryChange,
  selectedStatus,
  onStatusChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}: TaskFiltersProps) {
  const categories: (TaskCategory | "all")[] = ["all", "defi", "nft", "content", "service", "development", "research"]
  const statuses: (TaskStatus | "all")[] = ["all", "open", "in-progress", "completed"]

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9 bg-secondary/50"
        />
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category)}
            className={selectedCategory === category ? "" : "bg-secondary/50"}
          >
            {category === "all" ? "All" : categoryLabels[category]}
          </Button>
        ))}
      </div>

      {/* Status and sort */}
      <div className="flex gap-3">
        <Select value={selectedStatus} onValueChange={(v) => onStatusChange(v as TaskStatus | "all")}>
          <SelectTrigger className="w-[140px] bg-secondary/50">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-[160px] bg-secondary/50">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bounty-desc">Highest Bounty</SelectItem>
            <SelectItem value="bounty-asc">Lowest Bounty</SelectItem>
            <SelectItem value="deadline">Deadline</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="bids">Most Bids</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
