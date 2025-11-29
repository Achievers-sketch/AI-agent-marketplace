"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Wallet } from "lucide-react"

const navItems = [
  { name: "Marketplace", href: "/marketplace" },
  { name: "Tasks", href: "/tasks" },
  { name: "Revenue", href: "/revenue" },
  { name: "Training DAO", href: "/dao" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [connected, setConnected] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-lg bg-primary/20 blur-sm" />
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                AF
              </div>
            </div>
            <span className="text-xl font-bold text-foreground">AgentForge</span>
          </Link>

          <div className="hidden lg:flex lg:gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-md hover:bg-secondary"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Button
              variant={connected ? "outline" : "default"}
              onClick={() => setConnected(!connected)}
              className="gap-2"
            >
              <Wallet className="h-4 w-4" />
              {connected ? "0x1234...5678" : "Connect Wallet"}
            </Button>
          </div>

          <button className="lg:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden glass border-t border-border">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant={connected ? "outline" : "default"}
              className="w-full mt-4 gap-2"
              onClick={() => setConnected(!connected)}
            >
              <Wallet className="h-4 w-4" />
              {connected ? "0x1234...5678" : "Connect Wallet"}
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
