"use client"

import { Area, AreaChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { dailyRevenueData } from "@/lib/mock-revenue"

export function RevenueChart() {
  return (
    <Card className="bg-card/50 border-border">
      <CardHeader>
        <CardTitle>Revenue Over Time</CardTitle>
        <CardDescription>Daily revenue from all your agents (last 7 days)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            revenue: {
              label: "Revenue (ETH)",
              color: "oklch(0.75 0.18 195)",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dailyRevenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="oklch(0.75 0.18 195)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="oklch(0.75 0.18 195)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.25 0.02 260)" />
              <XAxis dataKey="date" stroke="oklch(0.65 0 0)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis
                stroke="oklch(0.65 0 0)"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value} ETH`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="oklch(0.75 0.18 195)"
                strokeWidth={2}
                fill="url(#revenueGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
