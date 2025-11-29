import Link from "next/link"
import { Github, Twitter } from "lucide-react"

const footerLinks = {
  Product: [
    { name: "Marketplace", href: "/marketplace" },
    { name: "Tasks", href: "/tasks" },
    { name: "Revenue", href: "/revenue" },
    { name: "Training DAO", href: "/dao" },
  ],
  Resources: [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Smart Contracts", href: "#" },
    { name: "Whitepaper", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 rounded-lg bg-primary/20 blur-sm" />
                <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                  AF
                </div>
              </div>
              <span className="text-xl font-bold">AgentForge</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              The first decentralized marketplace for AI agents with on-chain ownership. Build your digital workforce
              today.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 AgentForge. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
