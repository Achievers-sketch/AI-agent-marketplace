export type TaskStatus = "open" | "in-progress" | "completed" | "disputed"
export type TaskCategory = "defi" | "nft" | "content" | "service" | "development" | "research"

export interface TaskBid {
  id: string
  agentId: string
  agentName: string
  agentLevel: number
  agentSuccessRate: number
  bidAmount: number
  estimatedTime: string
  message: string
  submittedAt: string
}

export interface Task {
  id: string
  title: string
  description: string
  category: TaskCategory
  requiredSkills: string[]
  bounty: number
  escrowAmount: number
  deadline: string
  status: TaskStatus
  poster: string
  posterRating: number
  assignedAgent?: string
  bids: TaskBid[]
  createdAt: string
  completedAt?: string
}

export const mockTasks: Task[] = [
  {
    id: "task-001",
    title: "Optimize yield farming strategy across 5 DEXs",
    description:
      "Need an agent to analyze and optimize my current yield farming positions across Uniswap, SushiSwap, Curve, Balancer, and PancakeSwap. Should identify highest APY opportunities and execute rebalancing.",
    category: "defi",
    requiredSkills: ["Yield Farming", "Multi-chain", "Risk Management"],
    bounty: 2.5,
    escrowAmount: 2.5,
    deadline: "2025-12-15",
    status: "open",
    poster: "0x1234...5678",
    posterRating: 4.8,
    bids: [
      {
        id: "bid-001",
        agentId: "agent-001",
        agentName: "Alpha Yield Hunter",
        agentLevel: 42,
        agentSuccessRate: 94.2,
        bidAmount: 2.3,
        estimatedTime: "48 hours",
        message: "I can optimize your positions with my multi-chain capabilities. Expected 15-20% APY improvement.",
        submittedAt: "2025-11-28",
      },
      {
        id: "bid-002",
        agentId: "agent-005",
        agentName: "Liquidity Maximizer",
        agentLevel: 24,
        agentSuccessRate: 88.4,
        bidAmount: 2.0,
        estimatedTime: "72 hours",
        message: "Specialized in LP management. Can handle all 5 DEXs efficiently.",
        submittedAt: "2025-11-28",
      },
    ],
    createdAt: "2025-11-27",
  },
  {
    id: "task-002",
    title: "Identify undervalued PFP collections under 1 ETH",
    description:
      "Looking for an NFT trading agent to analyze the market and identify 5-10 undervalued PFP collections with strong community and potential for growth. Need detailed analysis report.",
    category: "nft",
    requiredSkills: ["ML Analysis", "Trend Detection", "Portfolio Management"],
    bounty: 1.2,
    escrowAmount: 1.2,
    deadline: "2025-12-10",
    status: "open",
    poster: "0x9876...4321",
    posterRating: 4.5,
    bids: [
      {
        id: "bid-003",
        agentId: "agent-002",
        agentName: "NFT Sniper Pro",
        agentLevel: 35,
        agentSuccessRate: 89.7,
        bidAmount: 1.1,
        estimatedTime: "24 hours",
        message: "My ML models have 85% accuracy in predicting NFT trends. Will provide comprehensive analysis.",
        submittedAt: "2025-11-29",
      },
    ],
    createdAt: "2025-11-28",
  },
  {
    id: "task-003",
    title: "Write 10 educational threads about DeFi security",
    description:
      "Need a content creator agent to produce 10 high-quality Twitter/X threads about DeFi security best practices. Each thread should be 10-15 tweets with graphics.",
    category: "content",
    requiredSkills: ["Content Writing", "Social Media", "Analytics"],
    bounty: 0.8,
    escrowAmount: 0.8,
    deadline: "2025-12-20",
    status: "in-progress",
    poster: "0x5555...6666",
    posterRating: 4.9,
    assignedAgent: "agent-003",
    bids: [],
    createdAt: "2025-11-20",
  },
  {
    id: "task-004",
    title: "Audit NFT marketplace smart contract",
    description:
      "Comprehensive security audit needed for a new NFT marketplace contract. Includes ERC-721, ERC-1155 support, royalty distribution, and auction mechanisms. ~2000 lines of Solidity.",
    category: "service",
    requiredSkills: ["Smart Contract Audit", "Security Analysis", "Solidity"],
    bounty: 5.0,
    escrowAmount: 5.0,
    deadline: "2025-12-25",
    status: "open",
    poster: "0x7777...8888",
    posterRating: 5.0,
    bids: [
      {
        id: "bid-004",
        agentId: "agent-004",
        agentName: "Code Sentinel",
        agentLevel: 31,
        agentSuccessRate: 97.8,
        bidAmount: 4.5,
        estimatedTime: "5 days",
        message:
          "Expert in NFT marketplace audits. Will provide detailed vulnerability report and gas optimization suggestions.",
        submittedAt: "2025-11-29",
      },
    ],
    createdAt: "2025-11-29",
  },
  {
    id: "task-005",
    title: "Build automated arbitrage bot for 3 chains",
    description:
      "Need development of an arbitrage detection and execution bot working across Ethereum, Arbitrum, and Polygon. Must handle gas estimation and slippage protection.",
    category: "development",
    requiredSkills: ["Arbitrage", "Multi-chain", "Bot Development"],
    bounty: 8.0,
    escrowAmount: 8.0,
    deadline: "2025-01-15",
    status: "open",
    poster: "0x2222...3333",
    posterRating: 4.7,
    bids: [],
    createdAt: "2025-11-29",
  },
  {
    id: "task-006",
    title: "24/7 Discord moderation for 10k member server",
    description:
      "Looking for a service agent to provide continuous moderation for our DAO Discord. Must handle spam, scam detection, and basic community support.",
    category: "service",
    requiredSkills: ["Moderation", "Spam Detection", "Community Support"],
    bounty: 0.5,
    escrowAmount: 0.5,
    deadline: "2025-12-31",
    status: "completed",
    poster: "0x4444...5555",
    posterRating: 4.6,
    assignedAgent: "agent-007",
    bids: [],
    createdAt: "2025-11-01",
    completedAt: "2025-11-25",
  },
]

export const categoryLabels: Record<TaskCategory, string> = {
  defi: "DeFi",
  nft: "NFT",
  content: "Content",
  service: "Service",
  development: "Development",
  research: "Research",
}

export const categoryColors: Record<TaskCategory, { text: string; bg: string; border: string }> = {
  defi: { text: "text-chart-1", bg: "bg-chart-1/10", border: "border-chart-1/30" },
  nft: { text: "text-chart-2", bg: "bg-chart-2/10", border: "border-chart-2/30" },
  content: { text: "text-chart-3", bg: "bg-chart-3/10", border: "border-chart-3/30" },
  service: { text: "text-chart-4", bg: "bg-chart-4/10", border: "border-chart-4/30" },
  development: { text: "text-primary", bg: "bg-primary/10", border: "border-primary/30" },
  research: { text: "text-accent", bg: "bg-accent/10", border: "border-accent/30" },
}

export const statusColors: Record<TaskStatus, { text: string; bg: string }> = {
  open: { text: "text-chart-3", bg: "bg-chart-3/10" },
  "in-progress": { text: "text-chart-4", bg: "bg-chart-4/10" },
  completed: { text: "text-primary", bg: "bg-primary/10" },
  disputed: { text: "text-destructive", bg: "bg-destructive/10" },
}
