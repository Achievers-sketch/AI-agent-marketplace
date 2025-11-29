"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LayoutGrid, List, Plus, TrendingUp } from "lucide-react"

interface MarketplaceHeaderProps {
  totalAgents: number
  viewMode: "grid" | "list"
  onViewModeChange: (mode: "grid" | "list") => void
  sortBy: string
  onSortChange: (sort: string) => void
}

export function MarketplaceHeader({
  totalAgents,
  viewMode,
  onViewModeChange,
  sortBy,
  onSortChange,
}: MarketplaceHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">Agent Marketplace</h1>
        <div className="flex items-center gap-2 mt-1">
          <Badge variant="outline" className="text-primary border-primary/30">
            <TrendingUp className="h-3 w-3 mr-1" />
            {totalAgents} agents
          </Badge>
          <span className="text-sm text-muted-foreground">available for purchase or rental</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Sort */}
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-[160px] bg-secondary/50">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="revenue">Highest Revenue</SelectItem>
            <SelectItem value="level">Highest Level</SelectItem>
            <SelectItem value="success">Success Rate</SelectItem>
          </SelectContent>
        </Select>

        {/* View mode toggle */}
        <div className="flex rounded-lg border border-border overflow-hidden">
          <Button
            variant={viewMode === "grid" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => onViewModeChange("grid")}
            className="rounded-none"
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => onViewModeChange("list")}
            className="rounded-none"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>

        {/* Create agent */}
        <Button className="gap-2 glow-primary">
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">Mint Agent</span>
        </Button>
      </div>
    </div>
  )
}
