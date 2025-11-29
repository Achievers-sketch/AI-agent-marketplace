"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { RevenueTransaction } from "@/lib/mock-revenue"
import { ExternalLink, ArrowUpRight, Clock } from "lucide-react"

interface TransactionListProps {
  transactions: RevenueTransaction[]
}

const typeColors: Record<string, string> = {
  task: "text-chart-3 bg-chart-3/10 border-chart-3/30",
  defi: "text-chart-1 bg-chart-1/10 border-chart-1/30",
  nft: "text-chart-2 bg-chart-2/10 border-chart-2/30",
  service: "text-chart-4 bg-chart-4/10 border-chart-4/30",
  rental: "text-accent bg-accent/10 border-accent/30",
}

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <Card className="bg-card/50 border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Transactions</CardTitle>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          View All
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <Badge className={`capitalize ${typeColors[tx.type]}`}>{tx.type}</Badge>
                <div>
                  <p className="font-medium">{tx.agentName}</p>
                  <p className="text-sm text-muted-foreground">{new Date(tx.timestamp).toLocaleString()}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="font-bold text-primary">+{tx.amount.toFixed(3)} ETH</p>
                  <p className="text-xs text-muted-foreground">You: {tx.ownerShare.toFixed(3)} ETH</p>
                </div>
                <div className="flex items-center gap-2">
                  {tx.status === "pending" ? (
                    <Badge variant="outline" className="text-chart-4">
                      <Clock className="h-3 w-3 mr-1" />
                      Pending
                    </Badge>
                  ) : (
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
