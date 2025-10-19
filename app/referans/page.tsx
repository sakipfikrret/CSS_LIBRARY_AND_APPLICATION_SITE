"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from "lucide-react"
import { cssProperties, cssCategories } from "@/lib/css-data"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"

export default function ReferansPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filteredProperties = useMemo(() => {
    let filtered = cssProperties

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((prop) => prop.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter(
        (prop) =>
          prop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          prop.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          prop.values.some((val) => val.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    return filtered
  }, [searchQuery, selectedCategory])

  const getCategoryColor = (category: string) => {
    const categoryData = cssCategories[category as keyof typeof cssCategories]
    return categoryData?.color || "from-gray-500 to-gray-600"
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <main className="container py-12">
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            CSS Referans Kütüphanesi
          </h1>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl leading-relaxed">
            Tüm CSS özelliklerini alfabetik sırayla görüntüleyin. Arama ve filtreleme ile istediğiniz özelliği hızlıca
            bulun.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="CSS özelliği ara... (örn: display, flex, color)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 h-12 text-base"
            />
          </div>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[280px] h-12">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Kategori seç" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tüm Kategoriler</SelectItem>
              {Object.entries(cssCategories).map(([key, category]) => (
                <SelectItem key={key} value={key}>
                  {category.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mb-8 flex items-center gap-3">
          <Badge variant="secondary" className="text-base px-4 py-2">
            {filteredProperties.length} özellik bulundu
          </Badge>
          {selectedCategory !== "all" && (
            <Badge variant="outline" className="text-sm px-3 py-1.5">
              {cssCategories[selectedCategory as keyof typeof cssCategories]?.title}
            </Badge>
          )}
        </div>

        {/* Properties Grid */}
        {filteredProperties.length === 0 ? (
          <Card className="border-border bg-card p-16 text-center animate-in fade-in zoom-in duration-500">
            <div className="max-w-md mx-auto">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-xl font-semibold mb-2">Sonuç bulunamadı</p>
              <p className="text-sm text-muted-foreground">Farklı bir arama terimi veya kategori deneyin</p>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property, index) => (
              <Link
                key={property.name}
                href={`/ozellik/${property.name}`}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <Card className="group border-border bg-card hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 p-6 h-full hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-3">
                    <code className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                      {property.name}
                    </code>
                    <div
                      className={`h-3 w-3 rounded-full bg-gradient-to-r ${getCategoryColor(property.category)} shrink-0 mt-1 shadow-lg`}
                    />
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                    {property.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {property.values.slice(0, 3).map((value, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs font-mono">
                        {value}
                      </Badge>
                    ))}
                    {property.values.length > 3 && (
                      <Badge variant="secondary" className="text-xs font-semibold">
                        +{property.values.length - 3}
                      </Badge>
                    )}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
