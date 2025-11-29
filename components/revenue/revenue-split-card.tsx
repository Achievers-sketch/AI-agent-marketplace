"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Wallet, GraduationCap, Building2 } from "lucide-react"

interface RevenueSplitCardProps {
  totalRevenue: number
}

export function RevenueSplitCard({ totalRevenue }: RevenueSplitCardProps) {
  const ownerShare = totalRevenue * 0.7
  const trainingShare = totalRevenue * 0.2
  const protocolShare = totalRevenue * 0.1

  return (
    <Card className="bg-card/50 border-border">
      <CardHeader>
        <CardTitle className="text-lg">Revenue Distribution</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Owner share */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Wallet className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Your Share</p>
                <p className="text-xs text-muted-foreground">70% of revenue</p>
              </div>
            </div>
            <p className="font-bold text-primary">{ownerShare.toFixed(2)} ETH</p>
          </div>
          <Progress value={70} className="h-2" />
        </div>

        {/* Training pool */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-chart-3/10">
                <GraduationCap className="h-4 w-4 text-chart-3" />
              </div>
              <div>
                <p className="text-sm font-medium">Training Pool</p>
                <p className="text-xs text-muted-foreground">20% for agent improvement</p>
              </div>
            </div>
            <p className="font-bold text-chart-3">{trainingShare.toFixed(2)} ETH</p>
          </div>
          <Progress value={20} className="h-2 [&>div]:bg-chart-3" />
        </div>

        {/* Protocol fee */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-chart-4/10">
                <Building2 className="h-4 w-4 text-chart-4" />
              </div>
              <div>
                <p className="text-sm font-medium">Protocol Fee</p>
                <p className="text-xs text-muted-foreground">10% platform fee</p>
              </div>
            </div>
            <p className="font-bold text-chart-4">{protocolShare.toFixed(2)} ETH</p>
          </div>
          <Progress value={10} className="h-2 [&>div]:bg-chart-4" />
        </div>
      </CardContent>
    </Card>
  )
}
