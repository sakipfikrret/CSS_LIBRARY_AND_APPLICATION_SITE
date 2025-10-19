import Link from "next/link"
import { notFound } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import { cssCategories, cssProperties } from "@/lib/css-data"
import { Header } from "@/components/header"

export function generateStaticParams() {
  return Object.keys(cssCategories).map((category) => ({
    category,
  }))
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryData = cssCategories[params.category as keyof typeof cssCategories]

  if (!categoryData) {
    notFound()
  }

  const categoryProperties = cssProperties.filter((prop) => prop.category === params.category)

  // Group by subcategory
  const groupedProperties = categoryProperties.reduce(
    (acc, prop) => {
      const subcat = prop.subcategory || "other"
      if (!acc[subcat]) {
        acc[subcat] = []
      }
      acc[subcat].push(prop)
      return acc
    },
    {} as Record<string, typeof categoryProperties>,
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <main className="container py-12">
        <div className="mb-12">
          <div
            className={`inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${categoryData.color} mb-6 shadow-lg shadow-primary/20 animate-in fade-in zoom-in duration-500`}
          >
            <div className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {categoryData.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-4">{categoryData.description}</p>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              {categoryProperties.length} CSS Özelliği
            </Badge>
            <Button variant="outline" asChild>
              <Link href="/kategoriler">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Tüm Kategoriler
              </Link>
            </Button>
          </div>
        </div>

        <div className="space-y-16">
          {Object.entries(groupedProperties).map(([subcategory, properties]) => {
            const subcategoryTitle =
              categoryData.subcategories[subcategory as keyof typeof categoryData.subcategories] || subcategory

            return (
              <div key={subcategory} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full" />
                  <h2 className="text-3xl font-bold">{subcategoryTitle}</h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-accent to-transparent rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {properties.map((property, index) => (
                    <Link
                      key={property.name}
                      href={`/ozellik/${property.name}`}
                      className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <Card className="group border-border bg-card hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 p-6 h-full hover:-translate-y-1">
                        <div className="flex items-start justify-between mb-3">
                          <code className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                            {property.name}
                          </code>
                          <Badge variant="secondary" className="text-xs">
                            {property.browserSupport}
                          </Badge>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                          {property.description}
                        </p>

                        <div className="rounded-lg bg-muted/50 p-3 border border-border/50">
                          <code className="text-xs text-foreground/80 break-all">
                            {property.example.split("\n")[0]}
                          </code>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
