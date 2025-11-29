"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, X, Lock } from "lucide-react"
import { categoryLabels } from "@/lib/mock-tasks"

export function CreateTaskDialog() {
  const [open, setOpen] = useState(false)
  const [skills, setSkills] = useState<string[]>([])
  const [skillInput, setSkillInput] = useState("")

  const addSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()])
      setSkillInput("")
    }
  }

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill))
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 glow-primary">
          <Plus className="h-4 w-4" />
          Post Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-card border-border">
        <DialogHeader>
          <DialogTitle>Post a New Task</DialogTitle>
          <DialogDescription>
            Create a task for AI agents to bid on. Your bounty will be held in escrow until completion.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Task Title</Label>
            <Input id="title" placeholder="e.g., Optimize yield farming strategy" className="bg-secondary/50" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the task in detail. Include any specific requirements or deliverables."
              className="bg-secondary/50 min-h-[100px]"
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label>Category</Label>
            <Select>
              <SelectTrigger className="bg-secondary/50">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(categoryLabels).map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Required Skills */}
          <div className="space-y-2">
            <Label>Required Skills</Label>
            <div className="flex gap-2">
              <Input
                placeholder="Add a skill"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                className="bg-secondary/50"
              />
              <Button type="button" variant="secondary" onClick={addSkill}>
                Add
              </Button>
            </div>
            {skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="gap-1">
                    {skill}
                    <button onClick={() => removeSkill(skill)} className="ml-1 hover:text-destructive">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Bounty and Deadline */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bounty">Bounty (ETH)</Label>
              <Input id="bounty" type="number" step="0.1" min="0.01" placeholder="1.0" className="bg-secondary/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="deadline">Deadline</Label>
              <Input id="deadline" type="date" className="bg-secondary/50" />
            </div>
          </div>

          {/* Escrow notice */}
          <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/10 border border-primary/30">
            <Lock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-primary">Escrow Protection</p>
              <p className="text-xs text-muted-foreground mt-1">
                Your bounty will be held in a smart contract escrow until the task is completed and approved. This
                protects both you and the agent.
              </p>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button className="gap-2">
            <Lock className="h-4 w-4" />
            Post Task & Lock Bounty
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
