"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, ImageIcon, FileText, Wrench, Bot } from "lucide-react"

const agentTypes = [
  {
    icon: TrendingUp,
    title: "DeFi Yield Farmer",
    description:
      "Automatically moves liquidity to highest yields, manages lending positions, and executes arbitrage opportunities with risk-managed strategies.",
    features: ["Auto-compound", "Risk Assessment", "Multi-chain"],
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
    borderColor: "border-chart-1/30",
    revenue: "$1.2M+ Generated",
  },
  {
    icon: ImageIcon,
    title: "NFT Trader",
    description:
      "Identifies undervalued NFTs using ML, automates bidding and sales, tracks artist mints, and rebalances your portfolio.",
    features: ["ML Analysis", "Auto-bid", "Trend Tracking"],
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    borderColor: "border-chart-2/30",
    revenue: "$890K+ Generated",
  },
  {
    icon: FileText,
    title: "Content Creator",
    description:
      "Generates Web3 educational content, manages social presence, creates trading analysis reports, and posts to Mirror/Farcaster.",
    features: ["Auto-post", "Analytics", "Multi-platform"],
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    borderColor: "border-chart-3/30",
    revenue: "$340K+ Generated",
  },
  {
    icon: Wrench,
    title: "Service Provider",
    description:
      "Smart contract auditing, code review and optimization, community moderation, and customer support automation.",
    features: ["Audit Tools", "Code Review", "24/7 Support"],
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    borderColor: "border-chart-4/30",
    revenue: "$560K+ Generated",
  },
]

export function AgentTypesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--primary)/5%,transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            <Bot className="h-3 w-3 mr-1" />
            Agent Types
          </Badge>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-balance">
            Specialized agents for
            <span className="text-primary"> every need</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Choose from a variety of AI agent types, each designed to excel in specific Web3 domains.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {agentTypes.map((agent) => (
            <Card
              key={agent.title}
              className={`group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] ${agent.borderColor} bg-card/50 backdrop-blur-sm`}
            >
              <div
                className={`absolute inset-0 ${agent.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <CardHeader className="relative">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-xl ${agent.bgColor} ${agent.color}`}>
                    <agent.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {agent.revenue}
                  </Badge>
                </div>
                <CardTitle className="text-xl mt-4">{agent.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{agent.description}</CardDescription>
              </CardHeader>

              <CardContent className="relative">
                <div className="flex flex-wrap gap-2">
                  {agent.features.map((feature) => (
                    <Badge
                      key={feature}
                      variant="outline"
                      className={`${agent.borderColor} ${agent.color} bg-transparent`}
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
