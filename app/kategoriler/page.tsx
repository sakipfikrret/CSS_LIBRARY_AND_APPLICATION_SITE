import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cssCategories } from "@/lib/css-data"
import { Header } from "@/components/header"

export default function KategorilerPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container py-12">
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            CSS Kategorileri
          </h1>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl leading-relaxed">
            Tüm CSS özelliklerini kategorilere göre keşfedin. Her kategori, ilgili CSS özelliklerini ve alt kategorileri
            içerir.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(cssCategories).map(([key, category], index) => (
            <Card
              key={key}
              className="border-border bg-card p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} shadow-lg shadow-primary/20`}
                >
                  <div className="h-8 w-8 text-white" />
                </div>

                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>

                  <div className="space-y-2 mb-6">
                    {Object.entries(category.subcategories)
                      .slice(0, 4)
                      .map(([subKey, subTitle]) => (
                        <div
                          key={subKey}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                          <span>{subTitle}</span>
                        </div>
                      ))}
                    {Object.keys(category.subcategories).length > 4 && (
                      <div className="text-sm text-muted-foreground/70 pl-3.5">
                        +{Object.keys(category.subcategories).length - 4} daha fazla
                      </div>
                    )}
                  </div>

                  <Button variant="default" size="lg" asChild className="w-full">
                    <Link href={`/kategori/${key}`}>Kategoriye Git</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
