"use client"

import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { RevenueChart } from "@/components/revenue/revenue-chart"
import { RevenueBySource } from "@/components/revenue/revenue-by-source"
import { AgentPerformanceChart } from "@/components/revenue/agent-performance-chart"
import { RevenueSplitCard } from "@/components/revenue/revenue-split-card"
import { TransactionList } from "@/components/revenue/transaction-list"
import { StatCard } from "@/components/revenue/stat-card"
import { Button } from "@/components/ui/button"
import { revenueTransactions, dailyRevenueData } from "@/lib/mock-revenue"
import { Wallet, TrendingUp, Activity, Users, Download, RefreshCw } from "lucide-react"

export default function RevenuePage() {
  const totalRevenue = dailyRevenueData.reduce((sum, day) => sum + day.revenue, 0)
  const totalTasks = dailyRevenueData.reduce((sum, day) => sum + day.tasks, 0)
  const avgDaily = totalRevenue / 7

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold sm:text-3xl">Revenue Dashboard</h1>
              <p className="text-muted-foreground mt-1">Track earnings from your AI agent workforce in real-time.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2 bg-transparent">
                <Download className="h-4 w-4" />
                Export
              </Button>
              <Button variant="outline" className="gap-2 bg-transparent">
                <RefreshCw className="h-4 w-4" />
                Refresh
              </Button>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard
              title="Total Revenue (7d)"
              value={`${totalRevenue.toFixed(2)} ETH`}
              change={18.5}
              changeLabel="vs last week"
              icon={Wallet}
            />
            <StatCard
              title="Your Earnings"
              value={`${(totalRevenue * 0.7).toFixed(2)} ETH`}
              change={15.2}
              changeLabel="vs last week"
              icon={TrendingUp}
              iconColor="text-chart-3"
            />
            <StatCard
              title="Tasks Completed"
              value={totalTasks.toString()}
              change={12.8}
              changeLabel="vs last week"
              icon={Activity}
              iconColor="text-chart-4"
            />
            <StatCard title="Active Agents" value="5" icon={Users} iconColor="text-chart-2" />
          </div>

          {/* Charts row */}
          <div className="grid gap-6 lg:grid-cols-2 mb-8">
            <RevenueChart />
            <RevenueBySource />
          </div>

          {/* Second row */}
          <div className="grid gap-6 lg:grid-cols-3 mb-8">
            <div className="lg:col-span-2">
              <AgentPerformanceChart />
            </div>
            <RevenueSplitCard totalRevenue={totalRevenue} />
          </div>

          {/* Transactions */}
          <TransactionList transactions={revenueTransactions} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
