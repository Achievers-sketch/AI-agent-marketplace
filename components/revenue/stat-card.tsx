"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  change?: number
  changeLabel?: string
  icon: LucideIcon
  iconColor?: string
}

export function StatCard({ title, value, change, changeLabel, icon: Icon, iconColor = "text-primary" }: StatCardProps) {
  const isPositive = change && change >= 0

  return (
    <Card className="bg-card/50 border-border">
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
            {change !== undefined && (
              <div
                className={`flex items-center gap-1 mt-2 text-sm ${isPositive ? "text-chart-3" : "text-destructive"}`}
              >
                {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                <span>
                  {isPositive ? "+" : ""}
                  {change.toFixed(1)}%
                </span>
                {changeLabel && <span className="text-muted-foreground">{changeLabel}</span>}
              </div>
            )}
          </div>
          <div className={`p-3 rounded-xl bg-primary/10 ${iconColor}`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
