"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ArrowRight } from "lucide-react"
import { cssProperties, cssCategories } from "@/lib/css-data"

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState(cssProperties.slice(0, 10))
  const router = useRouter()

  useEffect(() => {
    if (query.trim() === "") {
      setResults(cssProperties.slice(0, 10))
      return
    }

    const filtered = cssProperties.filter(
      (prop) =>
        prop.name.toLowerCase().includes(query.toLowerCase()) ||
        prop.description.toLowerCase().includes(query.toLowerCase()) ||
        prop.values.some((val) => val.toLowerCase().includes(query.toLowerCase())),
    )

    setResults(filtered.slice(0, 20))
  }, [query])

  const handleSelect = (propertyName: string) => {
    router.push(`/ozellik/${propertyName}`)
    onOpenChange(false)
    setQuery("")
  }

  const getCategoryColor = (category: string) => {
    const categoryData = cssCategories[category as keyof typeof cssCategories]
    return categoryData?.color || "from-gray-500 to-gray-600"
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[600px] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>CSS Özelliği Ara</DialogTitle>
          <DialogDescription>300+ CSS özelliği arasından arama yapın</DialogDescription>
        </DialogHeader>

        <div className="px-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Özellik adı, açıklama veya değer ara..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
              autoFocus
            />
          </div>
        </div>

        <div className="overflow-y-auto max-h-[400px] px-6 pb-6">
          {results.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p>Sonuç bulunamadı</p>
              <p className="text-sm mt-2">Farklı bir arama terimi deneyin</p>
            </div>
          ) : (
            <div className="space-y-2 mt-4">
              {results.map((property) => (
                <button
                  key={property.name}
                  onClick={() => handleSelect(property.name)}
                  className="w-full text-left p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-accent/5 transition-all duration-200 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <code className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                          {property.name}
                        </code>
                        <div
                          className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${getCategoryColor(property.category)}`}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {property.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {property.values.slice(0, 3).map((value, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs font-mono">
                            {value}
                          </Badge>
                        ))}
                        {property.values.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{property.values.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
