import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  BookOpen,
  Layout,
  Type,
  Palette,
  Box,
  Zap,
  Sparkles,
  Code,
  ArrowRight,
  Clock,
  Target,
  Lightbulb,
} from "lucide-react"

const tutorials = [
  {
    id: "flexbox-temelleri",
    title: "Flexbox Temelleri",
    description: "Modern layout sisteminin temellerini öğrenin",
    icon: Layout,
    difficulty: "Başlangıç",
    duration: "15 dk",
    color: "from-blue-500 to-cyan-500",
    topics: ["display: flex", "justify-content", "align-items", "flex-direction", "gap"],
  },
  {
    id: "grid-layout",
    title: "CSS Grid Layout",
    description: "Güçlü 2D layout sistemi ile karmaşık düzenler oluşturun",
    icon: Box,
    difficulty: "Orta",
    duration: "25 dk",
    color: "from-green-500 to-emerald-500",
    topics: ["grid-template-columns", "grid-template-rows", "grid-area", "gap", "auto-placement"],
  },
  {
    id: "responsive-tasarim",
    title: "Responsive Tasarım",
    description: "Her ekran boyutuna uyum sağlayan siteler yapın",
    icon: Target,
    difficulty: "Orta",
    duration: "30 dk",
    color: "from-purple-500 to-pink-500",
    topics: ["@media queries", "viewport units", "mobile-first", "breakpoints", "fluid typography"],
  },
  {
    id: "animasyonlar",
    title: "CSS Animasyonları",
    description: "Etkileyici animasyonlar ve geçişler oluşturun",
    icon: Zap,
    difficulty: "Orta",
    duration: "20 dk",
    color: "from-orange-500 to-red-500",
    topics: ["transition", "animation", "@keyframes", "transform", "timing-functions"],
  },
  {
    id: "typography",
    title: "Modern Tipografi",
    description: "Profesyonel metin stilleri ve düzenlemeleri",
    icon: Type,
    difficulty: "Başlangıç",
    duration: "15 dk",
    color: "from-indigo-500 to-blue-500",
    topics: ["font-family", "font-size", "line-height", "letter-spacing", "text-decoration"],
  },
  {
    id: "renkler-gradyanlar",
    title: "Renkler ve Gradyanlar",
    description: "Renk sistemleri ve gradient teknikleri",
    icon: Palette,
    difficulty: "Başlangıç",
    duration: "18 dk",
    color: "from-pink-500 to-rose-500",
    topics: ["color", "background", "linear-gradient", "radial-gradient", "conic-gradient"],
  },
  {
    id: "filtreler-efektler",
    title: "Filtreler ve Efektler",
    description: "Görsel efektler ve blend modları",
    icon: Sparkles,
    difficulty: "İleri",
    duration: "22 dk",
    color: "from-yellow-500 to-orange-500",
    topics: ["filter", "backdrop-filter", "mix-blend-mode", "clip-path", "mask"],
  },
  {
    id: "css-degiskenler",
    title: "CSS Değişkenleri",
    description: "Custom properties ile dinamik stiller",
    icon: Code,
    difficulty: "Orta",
    duration: "12 dk",
    color: "from-cyan-500 to-blue-500",
    topics: ["--custom-property", "var()", "calc()", "scope", "inheritance"],
  },
  {
    id: "pseudo-siniflar",
    title: "Pseudo Sınıflar ve Elementler",
    description: "Gelişmiş seçiciler ve pseudo elementler",
    icon: Lightbulb,
    difficulty: "Orta",
    duration: "20 dk",
    color: "from-violet-500 to-purple-500",
    topics: [":hover", ":focus", "::before", "::after", ":nth-child()"],
  },
]

export default function OgreticiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Header />

      <main className="container py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">İnteraktif Öğreticiler</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
            CSS Öğreticileri
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Adım adım rehberler ile CSS'i sıfırdan ileri seviyeye öğrenin. Her öğretici interaktif örnekler ve pratik
            uygulamalar içerir.
          </p>
        </div>

        {/* Difficulty Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Badge
            variant="outline"
            className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Tümü
          </Badge>
          <Badge
            variant="outline"
            className="px-4 py-2 cursor-pointer hover:bg-green-500 hover:text-white transition-colors"
          >
            Başlangıç
          </Badge>
          <Badge
            variant="outline"
            className="px-4 py-2 cursor-pointer hover:bg-yellow-500 hover:text-white transition-colors"
          >
            Orta
          </Badge>
          <Badge
            variant="outline"
            className="px-4 py-2 cursor-pointer hover:bg-red-500 hover:text-white transition-colors"
          >
            İleri
          </Badge>
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => {
            const Icon = tutorial.icon
            return (
              <Card
                key={tutorial.id}
                className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${tutorial.color}`} />
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${tutorial.color} shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <Badge
                        variant="secondary"
                        className={
                          tutorial.difficulty === "Başlangıç"
                            ? "bg-green-500/10 text-green-500 border-green-500/20"
                            : tutorial.difficulty === "Orta"
                              ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                              : "bg-red-500/10 text-red-500 border-red-500/20"
                        }
                      >
                        {tutorial.difficulty}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {tutorial.duration}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{tutorial.title}</CardTitle>
                  <CardDescription className="text-base">{tutorial.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Öğrenecekleriniz:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {tutorial.topics.map((topic) => (
                        <Badge key={topic} variant="outline" className="text-xs font-mono">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full group/btn">
                    <Link href={`/ogretici/${tutorial.id}`}>
                      Öğreticiye Başla
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Learning Path */}
        <div className="mt-20">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Önerilen Öğrenme Yolu</CardTitle>
              <CardDescription className="text-base">
                CSS'i en etkili şekilde öğrenmek için bu sırayı takip edin
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold">
                      1
                    </div>
                    <h3 className="font-semibold">Temel Kavramlar</h3>
                  </div>
                  <ul className="space-y-2 ml-13 text-sm text-muted-foreground">
                    <li>• Flexbox Temelleri</li>
                    <li>• Modern Tipografi</li>
                    <li>• Renkler ve Gradyanlar</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 text-white font-bold">
                      2
                    </div>
                    <h3 className="font-semibold">Orta Seviye</h3>
                  </div>
                  <ul className="space-y-2 ml-13 text-sm text-muted-foreground">
                    <li>• CSS Grid Layout</li>
                    <li>• Responsive Tasarım</li>
                    <li>• CSS Animasyonları</li>
                    <li>• CSS Değişkenleri</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-pink-500 text-white font-bold">
                      3
                    </div>
                    <h3 className="font-semibold">İleri Seviye</h3>
                  </div>
                  <ul className="space-y-2 ml-13 text-sm text-muted-foreground">
                    <li>• Filtreler ve Efektler</li>
                    <li>• Pseudo Sınıflar</li>
                    <li>• İleri Animasyonlar</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
