import Link from "next/link"
import { notFound } from "next/navigation"
import { BookOpen } from "lucide-react"
import { cssProperties, cssCategories } from "@/lib/css-data"
import { CSSPropertyDemo } from "@/components/css-property-demo"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"

export function generateStaticParams() {
  return cssProperties.map((property) => ({
    property: property.name,
  }))
}

export default function PropertyPage({ params }: { params: { property: string } }) {
  const property = cssProperties.find((prop) => prop.name === params.property)

  if (!property) {
    notFound()
  }

  const categoryData = cssCategories[property.category as keyof typeof cssCategories]
  const relatedProperties = cssProperties
    .filter((prop) => prop.category === property.category && prop.name !== property.name)
    .slice(0, 6)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <main className="container py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link href="/kategoriler" className="hover:text-foreground transition-colors">
              Kategoriler
            </Link>
            <span>/</span>
            <Link href={`/kategori/${property.category}`} className="hover:text-foreground transition-colors">
              {categoryData?.title}
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{property.name}</span>
          </div>

          <CSSPropertyDemo
            propertyName={property.name}
            description={property.description}
            syntax={property.syntax}
            values={property.values}
            example={property.example}
            browserSupport={property.browserSupport}
          />

          {/* Related Properties */}
          {relatedProperties.length > 0 && (
            <div className="mt-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="h-6 w-6 text-primary" />
                <h3 className="text-3xl font-bold">İlgili CSS Özellikleri</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProperties.map((relatedProp, index) => (
                  <Link
                    key={relatedProp.name}
                    href={`/ozellik/${relatedProp.name}`}
                    className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Card className="group border-border bg-card hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 p-5 h-full hover:-translate-y-1">
                      <code className="text-base font-bold text-primary group-hover:text-accent transition-colors block mb-2">
                        {relatedProp.name}
                      </code>
                      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {relatedProp.description}
                      </p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
