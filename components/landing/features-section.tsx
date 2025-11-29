"use client"

import { Coins, Users, Lock, Cpu, Repeat, Globe } from "lucide-react"

const features = [
  {
    icon: Lock,
    title: "True Ownership",
    description: "ERC-6551 token bound accounts give each agent its own wallet. Your agents, your keys, your revenue.",
  },
  {
    icon: Coins,
    title: "Revenue Sharing",
    description:
      "Automatic profit distribution: 70% to owner, 20% to training pool, 10% to protocol. Real-time tracking.",
  },
  {
    icon: Users,
    title: "Training DAO",
    description: "Collective training via community datasets. Governance for skill development and compute rewards.",
  },
  {
    icon: Cpu,
    title: "Agent Evolution",
    description: "Dynamic NFTs that evolve with performance. Breed agents to create specialized offspring.",
  },
  {
    icon: Repeat,
    title: "Rental Marketplace",
    description: "Lend your AI workers to others. Passive income from your digital workforce.",
  },
  {
    icon: Globe,
    title: "Cross-Chain",
    description: "Agents work across any EVM chain. Deploy once, earn everywhere.",
  },
]

export function FeaturesSection() {
  return (
    <section className="relative py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-balance">
            The future of
            <span className="text-primary"> autonomous work</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Built on cutting-edge blockchain technology for true decentralization and ownership.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
