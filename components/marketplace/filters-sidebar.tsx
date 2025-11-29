"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Search, X, SlidersHorizontal } from "lucide-react"
import type { AgentType, AgentRarity } from "@/lib/mock-data"

interface FiltersState {
  search: string
  types: AgentType[]
  rarities: AgentRarity[]
  priceRange: [number, number]
  onlyForSale: boolean
  onlyForRent: boolean
}

interface FiltersSidebarProps {
  filters: FiltersState
  onFiltersChange: (filters: FiltersState) => void
}

const agentTypes: { value: AgentType; label: string }[] = [
  { value: "defi", label: "DeFi Yield Farmer" },
  { value: "nft", label: "NFT Trader" },
  { value: "content", label: "Content Creator" },
  { value: "service", label: "Service Provider" },
]

const rarities: { value: AgentRarity; label: string; color: string }[] = [
  { value: "common", label: "Common", color: "text-muted-foreground" },
  { value: "rare", label: "Rare", color: "text-chart-1" },
  { value: "epic", label: "Epic", color: "text-chart-2" },
  { value: "legendary", label: "Legendary", color: "text-chart-4" },
]

export function FiltersSidebar({ filters, onFiltersChange }: FiltersSidebarProps) {
  const updateFilters = (updates: Partial<FiltersState>) => {
    onFiltersChange({ ...filters, ...updates })
  }

  const toggleType = (type: AgentType) => {
    const newTypes = filters.types.includes(type) ? filters.types.filter((t) => t !== type) : [...filters.types, type]
    updateFilters({ types: newTypes })
  }

  const toggleRarity = (rarity: AgentRarity) => {
    const newRarities = filters.rarities.includes(rarity)
      ? filters.rarities.filter((r) => r !== rarity)
      : [...filters.rarities, rarity]
    updateFilters({ rarities: newRarities })
  }

  const clearFilters = () => {
    onFiltersChange({
      search: "",
      types: [],
      rarities: [],
      priceRange: [0, 20],
      onlyForSale: false,
      onlyForRent: false,
    })
  }

  const activeFiltersCount =
    filters.types.length +
    filters.rarities.length +
    (filters.onlyForSale ? 1 : 0) +
    (filters.onlyForRent ? 1 : 0) +
    (filters.priceRange[0] > 0 || filters.priceRange[1] < 20 ? 1 : 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-primary" />
          <h2 className="font-semibold text-lg">Filters</h2>
          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="bg-primary/20 text-primary">
              {activeFiltersCount}
            </Badge>
          )}
        </div>
        {activeFiltersCount > 0 && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground">
            <X className="h-4 w-4 mr-1" />
            Clear
          </Button>
        )}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search agents..."
          value={filters.search}
          onChange={(e) => updateFilters({ search: e.target.value })}
          className="pl-9 bg-secondary/50"
        />
      </div>

      <Separator />

      {/* Agent Types */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Agent Type</Label>
        <div className="space-y-2">
          {agentTypes.map((type) => (
            <label key={type.value} className="flex items-center gap-3 cursor-pointer group">
              <Checkbox checked={filters.types.includes(type.value)} onCheckedChange={() => toggleType(type.value)} />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {type.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      {/* Rarity */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Rarity</Label>
        <div className="space-y-2">
          {rarities.map((rarity) => (
            <label key={rarity.value} className="flex items-center gap-3 cursor-pointer group">
              <Checkbox
                checked={filters.rarities.includes(rarity.value)}
                onCheckedChange={() => toggleRarity(rarity.value)}
              />
              <span className={`text-sm ${rarity.color}`}>{rarity.label}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Price Range</Label>
          <span className="text-sm text-muted-foreground">
            {filters.priceRange[0]} - {filters.priceRange[1]} ETH
          </span>
        </div>
        <Slider
          value={filters.priceRange}
          onValueChange={(value) => updateFilters({ priceRange: value as [number, number] })}
          min={0}
          max={20}
          step={0.5}
          className="py-2"
        />
      </div>

      <Separator />

      {/* Availability */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Availability</Label>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer">
            <Checkbox
              checked={filters.onlyForSale}
              onCheckedChange={(checked) => updateFilters({ onlyForSale: checked as boolean })}
            />
            <span className="text-sm text-muted-foreground">For Sale</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <Checkbox
              checked={filters.onlyForRent}
              onCheckedChange={(checked) => updateFilters({ onlyForRent: checked as boolean })}
            />
            <span className="text-sm text-muted-foreground">For Rent</span>
          </label>
        </div>
      </div>
    </div>
  )
}
