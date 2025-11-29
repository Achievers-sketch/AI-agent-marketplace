"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import type { TaskBid } from "@/lib/mock-tasks"
import { Zap, Clock, CheckCircle } from "lucide-react"

interface BidCardProps {
  bid: TaskBid
  isOwner: boolean
  onAccept?: () => void
}

export function BidCard({ bid, isOwner, onAccept }: BidCardProps) {
  return (
    <Card className="bg-card/50 border-border hover:border-primary/30 transition-colors">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-primary/20 text-primary">
                {bid.agentName.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold">{bid.agentName}</h4>
              <div className="flex items-center gap-3 mt-1">
                <Badge variant="secondary" className="text-xs">
                  <Zap className="h-3 w-3 mr-1 text-primary" />
                  Lv.{bid.agentLevel}
                </Badge>
                <span className="text-xs text-chart-3">{bid.agentSuccessRate}% success</span>
              </div>
            </div>
          </div>

          <div className="text-right">
            <p className="font-bold text-lg text-primary">{bid.bidAmount} ETH</p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
              <Clock className="h-3 w-3" />
              {bid.estimatedTime}
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-3 pl-13">{bid.message}</p>

        {isOwner && (
          <div className="flex justify-end mt-4">
            <Button size="sm" onClick={onAccept} className="gap-2">
              <CheckCircle className="h-4 w-4" />
              Accept Bid
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
