import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  githubUrl: string
  liveUrl?: string
}

export default function ProjectCard({ title, description, tags, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm" asChild>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            Code
          </a>
        </Button>
        {liveUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

