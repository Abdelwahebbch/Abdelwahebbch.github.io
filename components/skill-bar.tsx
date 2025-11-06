interface SkillBarProps {
  name: string
  proficiency: number // Keeping this in the interface for backward compatibility
}

export default function SkillBar({ name }: SkillBarProps) {
  return (
    <div className="py-2 px-4 bg-muted/50 rounded-md">
      <span className="font-medium">{name}</span>
    </div>
  )
}

