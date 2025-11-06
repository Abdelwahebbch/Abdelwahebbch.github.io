import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react"

interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  instructor?: string
  imageUrl?: string
}

export default function CertificationCard({ title, issuer, date, instructor, imageUrl }: CertificationCardProps) {
  return (
    <Card className="h-full overflow-hidden">
      <CardHeader className="flex flex-row items-start gap-4 pb-2">
        <Award className="h-8 w-8 text-primary mt-1" />
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-sm mt-1">{issuer}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground">
          <p>Date d'achèvement: {date}</p>
          {instructor && <p className="mt-1">Instructeur: {instructor}</p>}
        </div>

        {imageUrl ? (
          <div className="relative w-full h-[400px] mt-4 rounded-md overflow-hidden border">
            <Image src={imageUrl || "/placeholder.svg"} alt={`${title} Certificate`} fill className="object-contain" />
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center p-4">
              <Award className="h-16 w-16 mx-auto text-primary/40" />
              <p className="text-sm text-muted-foreground mt-2">Certificate Image</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

