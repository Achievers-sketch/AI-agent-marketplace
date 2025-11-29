export interface RevenueTransaction {
  id: string
  agentId: string
  agentName: string
  type: "task" | "defi" | "nft" | "service" | "rental"
  amount: number
  ownerShare: number
  trainingPoolShare: number
  protocolShare: number
  timestamp: string
  txHash: string
  status: "completed" | "pending"
}

export interface AgentRevenue {
  agentId: string
  agentName: string
  totalRevenue: number
  last30Days: number
  last7Days: number
  revenueByType: {
    task: number
    defi: number
    nft: number
    service: number
    rental: number
  }
}

export const revenueTransactions: RevenueTransaction[] = [
  {
    id: "tx-001",
    agentId: "agent-001",
    agentName: "Alpha Yield Hunter",
    type: "defi",
    amount: 1.24,
    ownerShare: 0.868,
    trainingPoolShare: 0.248,
    protocolShare: 0.124,
    timestamp: "2025-11-29T14:30:00Z",
    txHash: "0xabc123...",
    status: "completed",
  },
  {
    id: "tx-002",
    agentId: "agent-002",
    agentName: "NFT Sniper Pro",
    type: "nft",
    amount: 0.85,
    ownerShare: 0.595,
    trainingPoolShare: 0.17,
    protocolShare: 0.085,
    timestamp: "2025-11-29T12:15:00Z",
    txHash: "0xdef456...",
    status: "completed",
  },
  {
    id: "tx-003",
    agentId: "agent-004",
    agentName: "Code Sentinel",
    type: "task",
    amount: 2.5,
    ownerShare: 1.75,
    trainingPoolShare: 0.5,
    protocolShare: 0.25,
    timestamp: "2025-11-29T10:00:00Z",
    txHash: "0xghi789...",
    status: "completed",
  },
  {
    id: "tx-004",
    agentId: "agent-003",
    agentName: "Content Forge AI",
    type: "service",
    amount: 0.45,
    ownerShare: 0.315,
    trainingPoolShare: 0.09,
    protocolShare: 0.045,
    timestamp: "2025-11-28T22:45:00Z",
    txHash: "0xjkl012...",
    status: "completed",
  },
  {
    id: "tx-005",
    agentId: "agent-008",
    agentName: "Viral Engine",
    type: "rental",
    amount: 1.2,
    ownerShare: 0.84,
    trainingPoolShare: 0.24,
    protocolShare: 0.12,
    timestamp: "2025-11-28T18:30:00Z",
    txHash: "0xmno345...",
    status: "completed",
  },
  {
    id: "tx-006",
    agentId: "agent-001",
    agentName: "Alpha Yield Hunter",
    type: "defi",
    amount: 0.92,
    ownerShare: 0.644,
    trainingPoolShare: 0.184,
    protocolShare: 0.092,
    timestamp: "2025-11-28T16:00:00Z",
    txHash: "0xpqr678...",
    status: "completed",
  },
  {
    id: "tx-007",
    agentId: "agent-007",
    agentName: "Community Guardian",
    type: "service",
    amount: 0.3,
    ownerShare: 0.21,
    trainingPoolShare: 0.06,
    protocolShare: 0.03,
    timestamp: "2025-11-28T14:00:00Z",
    txHash: "0xstu901...",
    status: "pending",
  },
]

export const dailyRevenueData = [
  { date: "Nov 23", revenue: 2.4, tasks: 3 },
  { date: "Nov 24", revenue: 3.1, tasks: 5 },
  { date: "Nov 25", revenue: 2.8, tasks: 4 },
  { date: "Nov 26", revenue: 4.2, tasks: 7 },
  { date: "Nov 27", revenue: 3.5, tasks: 5 },
  { date: "Nov 28", revenue: 2.87, tasks: 4 },
  { date: "Nov 29", revenue: 4.59, tasks: 6 },
]

export const revenueBySourceData = [
  { name: "DeFi", value: 8.45, color: "#22d3ee" },
  { name: "NFT", value: 4.23, color: "#f472b6" },
  { name: "Tasks", value: 6.78, color: "#4ade80" },
  { name: "Services", value: 2.34, color: "#fbbf24" },
  { name: "Rentals", value: 1.72, color: "#a78bfa" },
]

export const agentPerformanceData = [
  { name: "Alpha Yield Hunter", revenue: 8.2, tasks: 42 },
  { name: "NFT Sniper Pro", revenue: 4.5, tasks: 28 },
  { name: "Code Sentinel", revenue: 5.8, tasks: 15 },
  { name: "Content Forge AI", revenue: 2.1, tasks: 67 },
  { name: "Viral Engine", revenue: 6.4, tasks: 89 },
]
