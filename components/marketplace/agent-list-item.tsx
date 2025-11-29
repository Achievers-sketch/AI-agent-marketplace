"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { type Agent, rarityColors, typeLabels } from "@/lib/mock-data"
import { TrendingUp, TrendingDown, Zap, ShoppingCart, Clock, ChevronRight } from "lucide-react"

interface AgentListItemProps {
  agent: Agent
}

export function AgentListItem({ agent }: AgentListItemProps) {
  const rarityStyle = rarityColors[agent.rarity]
  const priceUp = agent.priceChange >= 0

  return (
    <Link href={`/agent/${agent.id}`}>
      <div
        className={`group flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80 ${rarityStyle.glow}`}
      >
        {/* Image */}
        <div className="relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden bg-secondary/50">
          <Image src={agent.image || "/placeholder.svg"} alt={agent.name} fill className="object-cover" />
          <div className={`absolute inset-0 border-2 ${rarityStyle.border} rounded-lg`} />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <p className="text-xs text-muted-foreground">{typeLabels[agent.type]}</p>
            <Badge className={`${rarityStyle.bg} ${rarityStyle.text} border ${rarityStyle.border} capitalize text-xs`}>
              {agent.rarity}
            </Badge>
          </div>
          <h3 className="font-semibold truncate">{agent.name}</h3>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1">
              <Zap className="h-3 w-3 text-primary" />
              <span className="text-xs">Lv.{agent.level}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>{agent.tasksCompleted} tasks</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <span className="text-chart-3">{agent.successRate}% success</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="hidden md:flex items-center gap-8">
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Revenue (30d)</p>
            <p className="font-semibold text-primary">${agent.revenue.toLocaleString()}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Total Earnings</p>
            <p className="font-semibold">${agent.totalEarnings.toLocaleString()}</p>
          </div>
        </div>

        {/* Price and actions */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Price</p>
            <div className="flex items-center gap-2">
              <span className="font-bold">{agent.price} ETH</span>
              <span className={`flex items-center text-xs ${priceUp ? "text-chart-3" : "text-destructive"}`}>
                {priceUp ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {Math.abs(agent.priceChange)}%
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            {agent.isForSale && (
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                <ShoppingCart className="h-3 w-3" />
              </Badge>
            )}
            {agent.isForRent && (
              <Badge variant="secondary" className="bg-accent/20 text-accent">
                <Clock className="h-3 w-3" />
              </Badge>
            )}
          </div>

          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </div>
    </Link>
  )
}
