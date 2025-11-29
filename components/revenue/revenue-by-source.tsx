"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { revenueBySourceData } from "@/lib/mock-revenue"

export function RevenueBySource() {
  const total = revenueBySourceData.reduce((sum, item) => sum + item.value, 0)

  return (
    <Card className="bg-card/50 border-border">
      <CardHeader>
        <CardTitle>Revenue by Source</CardTitle>
        <CardDescription>Breakdown of earnings by activity type</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={revenueBySourceData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {revenueBySourceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload
                    return (
                      <div className="rounded-lg border border-border bg-card p-3 shadow-lg">
                        <p className="font-medium">{data.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {data.value.toFixed(2)} ETH ({((data.value / total) * 100).toFixed(1)}%)
                        </p>
                      </div>
                    )
                  }
                  return null
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {revenueBySourceData.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-sm text-muted-foreground">{item.name}</span>
              <span className="text-sm font-medium ml-auto">{item.value.toFixed(2)} ETH</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
