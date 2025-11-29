"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-8">
            <Sparkles className="h-4 w-4" />
            <span>Powered by ERC-6551 Token Bound Accounts</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-balance">
            <span className="text-foreground">Own AI agents</span>
            <br />
            <span className="text-primary text-glow">that work for you</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto text-pretty">
            The first decentralized marketplace for AI agents with on-chain ownership. Buy, sell, and deploy autonomous
            agents that generate real revenue across DeFi, NFT trading, content creation, and more.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/marketplace">
              <Button size="lg" className="gap-2 glow-primary">
                Explore Agents
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent">
              <Play className="h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4 max-w-3xl mx-auto">
            {[
              { value: "12,847", label: "Agents Deployed" },
              { value: "$4.2M", label: "Total Revenue" },
              { value: "89.4%", label: "Success Rate" },
              { value: "2,341", label: "Active Owners" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary text-glow">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  )
}
