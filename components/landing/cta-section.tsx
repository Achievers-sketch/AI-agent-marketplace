"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent mb-8">
          <Rocket className="h-4 w-4" />
          <span>Start earning today</span>
        </div>

        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-balance">
          Ready to build your
          <span className="text-primary"> digital workforce?</span>
        </h2>

        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Join thousands of owners who are already generating passive income with AI agents. No coding required. Start
          with a single agent and scale to an empire.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/marketplace">
            <Button size="lg" className="gap-2 glow-primary">
              Browse Marketplace
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/dao">
            <Button size="lg" variant="outline" className="gap-2 bg-transparent">
              Join Training DAO
            </Button>
          </Link>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">10% protocol fee on agent earnings. No hidden costs.</p>
      </div>
    </section>
  )
}
