"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { AgentCard } from "@/components/marketplace/agent-card"
import { AgentListItem } from "@/components/marketplace/agent-list-item"
import { FiltersSidebar } from "@/components/marketplace/filters-sidebar"
import { MarketplaceHeader } from "@/components/marketplace/marketplace-header"
import { mockAgents, type AgentType, type AgentRarity } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Filter } from "lucide-react"

interface FiltersState {
  search: string
  types: AgentType[]
  rarities: AgentRarity[]
  priceRange: [number, number]
  onlyForSale: boolean
  onlyForRent: boolean
}

export default function MarketplacePage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("revenue")
  const [filters, setFilters] = useState<FiltersState>({
    search: "",
    types: [],
    rarities: [],
    priceRange: [0, 20],
    onlyForSale: false,
    onlyForRent: false,
  })

  const filteredAgents = useMemo(() => {
    let result = [...mockAgents]

    // Search filter
    if (filters.search) {
      const search = filters.search.toLowerCase()
      result = result.filter(
        (agent) => agent.name.toLowerCase().includes(search) || agent.description.toLowerCase().includes(search),
      )
    }

    // Type filter
    if (filters.types.length > 0) {
      result = result.filter((agent) => filters.types.includes(agent.type))
    }

    // Rarity filter
    if (filters.rarities.length > 0) {
      result = result.filter((agent) => filters.rarities.includes(agent.rarity))
    }

    // Price range filter
    result = result.filter((agent) => agent.price >= filters.priceRange[0] && agent.price <= filters.priceRange[1])

    // Availability filters
    if (filters.onlyForSale) {
      result = result.filter((agent) => agent.isForSale)
    }
    if (filters.onlyForRent) {
      result = result.filter((agent) => agent.isForRent)
    }

    // Sorting
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "revenue":
        result.sort((a, b) => b.revenue - a.revenue)
        break
      case "level":
        result.sort((a, b) => b.level - a.level)
        break
      case "success":
        result.sort((a, b) => b.successRate - a.successRate)
        break
    }

    return result
  }, [filters, sortBy])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <MarketplaceHeader
            totalAgents={filteredAgents.length}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          <div className="mt-8 flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6">
                <FiltersSidebar filters={filters} onFiltersChange={setFilters} />
              </div>
            </aside>

            {/* Mobile filter button */}
            <div className="lg:hidden fixed bottom-6 right-6 z-40">
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="lg" className="rounded-full glow-primary">
                    <Filter className="h-5 w-5 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 bg-card">
                  <FiltersSidebar filters={filters} onFiltersChange={setFilters} />
                </SheetContent>
              </Sheet>
            </div>

            {/* Agent grid/list */}
            <div className="flex-1">
              {filteredAgents.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">No agents found matching your criteria.</p>
                  <Button
                    variant="outline"
                    className="mt-4 bg-transparent"
                    onClick={() =>
                      setFilters({
                        search: "",
                        types: [],
                        rarities: [],
                        priceRange: [0, 20],
                        onlyForSale: false,
                        onlyForRent: false,
                      })
                    }
                  >
                    Clear filters
                  </Button>
                </div>
              ) : viewMode === "grid" ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredAgents.map((agent) => (
                    <AgentCard key={agent.id} agent={agent} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredAgents.map((agent) => (
                    <AgentListItem key={agent.id} agent={agent} />
                  ))}
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
