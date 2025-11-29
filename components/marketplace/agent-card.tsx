"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { type Agent, rarityColors, typeLabels } from "@/lib/mock-data"
import { TrendingUp, TrendingDown, Zap, ShoppingCart, Clock } from "lucide-react"

interface AgentCardProps {
  agent: Agent
}

export function AgentCard({ agent }: AgentCardProps) {
  const rarityStyle = rarityColors[agent.rarity]
  const priceUp = agent.priceChange >= 0

  return (
    <Link href={`/agent/${agent.id}`}>
      <Card
        className={`group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border hover:${rarityStyle.border} ${rarityStyle.glow}`}
      >
        {/* Rarity indicator */}
        <div className={`absolute top-0 left-0 right-0 h-1 ${rarityStyle.bg}`} />

        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-secondary/50">
          <Image
            src={agent.image || "/placeholder.svg"}
            alt={agent.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

          {/* Level badge */}
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="gap-1 bg-background/80 backdrop-blur-sm">
              <Zap className="h-3 w-3 text-primary" />
              Lv.{agent.level}
            </Badge>
          </div>

          {/* Rarity badge */}
          <div className="absolute top-3 right-3">
            <Badge className={`${rarityStyle.bg} ${rarityStyle.text} border ${rarityStyle.border} capitalize`}>
              {agent.rarity}
            </Badge>
          </div>

          {/* Status badges */}
          <div className="absolute bottom-3 left-3 flex gap-2">
            {agent.isForSale && (
              <Badge variant="secondary" className="gap-1 bg-primary/80 text-primary-foreground">
                <ShoppingCart className="h-3 w-3" />
                Sale
              </Badge>
            )}
            {agent.isForRent && (
              <Badge variant="secondary" className="gap-1 bg-accent/80 text-accent-foreground">
                <Clock className="h-3 w-3" />
                Rent
              </Badge>
            )}
          </div>
        </div>

        <CardContent className="p-4">
          {/* Type label */}
          <p className="text-xs text-muted-foreground mb-1">{typeLabels[agent.type]}</p>

          {/* Name */}
          <h3 className="font-semibold text-lg truncate">{agent.name}</h3>

          {/* XP Progress */}
          <div className="mt-3 space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">XP</span>
              <span className="text-muted-foreground">
                {agent.xp.toLocaleString()} / {agent.maxXp.toLocaleString()}
              </span>
            </div>
            <Progress value={(agent.xp / agent.maxXp) * 100} className="h-1.5" />
          </div>

          {/* Stats */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-muted-foreground">Revenue (30d)</p>
              <p className="font-semibold text-primary">${agent.revenue.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Success Rate</p>
              <p className="font-semibold">{agent.successRate}%</p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Price</p>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">{agent.price} ETH</span>
              <span className={`flex items-center text-xs ${priceUp ? "text-chart-3" : "text-destructive"}`}>
                {priceUp ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {Math.abs(agent.priceChange)}%
              </span>
            </div>
          </div>

          <Button size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
            View
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
