import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Sparkles } from "lucide-react"
import { Header } from "@/components/header"

export default function OrneklerPage() {
  const examples = [
    {
      title: "Flexbox Layout",
      description: "Modern flexbox kullanarak responsive layout oluşturma",
      category: "Layout",
      difficulty: "Başlangıç",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Grid Gallery",
      description: "CSS Grid ile fotoğraf galerisi tasarımı",
      category: "Layout",
      difficulty: "Orta",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Animated Button",
      description: "Hover efektleri ve animasyonlu buton tasarımı",
      category: "Animations",
      difficulty: "Başlangıç",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Card Component",
      description: "Modern kart bileşeni tasarımı ve gölge efektleri",
      category: "Components",
      difficulty: "Başlangıç",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Gradient Background",
      description: "Renkli gradient arka planlar ve efektler",
      category: "Colors",
      difficulty: "Başlangıç",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Responsive Navigation",
      description: "Mobil uyumlu navigasyon menüsü",
      category: "Layout",
      difficulty: "Orta",
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Loading Spinner",
      description: "CSS animasyonları ile yükleme göstergesi",
      category: "Animations",
      difficulty: "Orta",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Form Styling",
      description: "Modern form elemanları tasarımı",
      category: "Components",
      difficulty: "Orta",
      color: "from-teal-500 to-cyan-500",
    },
    {
      title: "Glassmorphism",
      description: "Cam efekti (glassmorphism) tasarımı",
      category: "Effects",
      difficulty: "İleri",
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "3D Card Flip",
      description: "3D dönüşüm efektleri ile kart animasyonu",
      category: "Animations",
      difficulty: "İleri",
      color: "from-fuchsia-500 to-pink-500",
    },
    {
      title: "Parallax Scrolling",
      description: "Parallax kaydırma efekti oluşturma",
      category: "Effects",
      difficulty: "İleri",
      color: "from-sky-500 to-blue-500",
    },
    {
      title: "Custom Scrollbar",
      description: "Özel kaydırma çubuğu tasarımı",
      category: "Components",
      difficulty: "Başlangıç",
      color: "from-lime-500 to-green-500",
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Başlangıç":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "Orta":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "İleri":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <main className="container py-12">
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              CSS Örnekleri
            </h1>
          </div>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl leading-relaxed">
            Hazır CSS örnekleri ile öğrenin. Her örnek, detaylı açıklamalar ve canlı önizleme ile birlikte gelir.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <Button size="lg" asChild>
              <Link href="/editor">
                <Play className="mr-2 h-5 w-5" />
                Editörü Aç
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/kategoriler">Kategorilere Dön</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <Card
              key={index}
              className="group border-border bg-card hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 p-6 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`h-2 w-full rounded-full bg-gradient-to-r ${example.color} mb-6 shadow-lg`} />

              <div className="flex items-start justify-between mb-4">
                <Badge variant="secondary" className="text-xs font-semibold">
                  {example.category}
                </Badge>
                <Badge
                  variant="outline"
                  className={`text-xs font-semibold border ${getDifficultyColor(example.difficulty)}`}
                >
                  {example.difficulty}
                </Badge>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{example.title}</h3>

              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{example.description}</p>

              <Button variant="default" size="lg" className="w-full" asChild>
                <Link href="/editor">
                  <Play className="mr-2 h-4 w-4" />
                  Şimdi Dene
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
