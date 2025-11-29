"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { type Task, categoryLabels, categoryColors, statusColors } from "@/lib/mock-tasks"
import { Users, Star, Lock, Calendar } from "lucide-react"
import Link from "next/link"

interface TaskCardProps {
  task: Task
}

export function TaskCard({ task }: TaskCardProps) {
  const categoryStyle = categoryColors[task.category]
  const statusStyle = statusColors[task.status]
  const daysLeft = Math.ceil((new Date(task.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24))

  return (
    <Link href={`/tasks/${task.id}`}>
      <Card className="group h-full flex flex-col transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <Badge className={`${categoryStyle.bg} ${categoryStyle.text} border ${categoryStyle.border}`}>
                {categoryLabels[task.category]}
              </Badge>
              <Badge variant="outline" className={`${statusStyle.bg} ${statusStyle.text} capitalize`}>
                {task.status.replace("-", " ")}
              </Badge>
            </div>
            {task.escrowAmount > 0 && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Lock className="h-3 w-3" />
                Escrow
              </div>
            )}
          </div>

          <h3 className="font-semibold text-lg leading-tight mt-3 line-clamp-2 group-hover:text-primary transition-colors">
            {task.title}
          </h3>
        </CardHeader>

        <CardContent className="flex-1 pb-3">
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{task.description}</p>

          {/* Required skills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {task.requiredSkills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {task.requiredSkills.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{task.requiredSkills.length - 3}
              </Badge>
            )}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{task.bids.length} bids</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span className={daysLeft < 3 ? "text-destructive" : ""}>
                {daysLeft > 0 ? `${daysLeft}d left` : "Expired"}
              </span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-3 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-secondary text-xs">{task.poster.slice(2, 4).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xs text-muted-foreground">{task.poster}</p>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-chart-4 text-chart-4" />
                <span className="text-xs">{task.posterRating}</span>
              </div>
            </div>
          </div>

          <div className="text-right">
            <p className="text-xs text-muted-foreground">Bounty</p>
            <p className="font-bold text-primary text-lg">{task.bounty} ETH</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
