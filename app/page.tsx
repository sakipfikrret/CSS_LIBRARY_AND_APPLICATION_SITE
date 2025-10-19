import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Code2, BookOpen, Sparkles, Zap, Layout, Palette, Box, Monitor, MousePointer, Filter } from "lucide-react"
import { Header } from "@/components/header"

export default function HomePage() {
  const categories = [
    {
      title: "Layout & Positioning",
      description: "Flexbox, Grid, Position, Display",
      icon: Layout,
      count: 45,
      color: "from-blue-500 to-cyan-500",
      href: "/kategori/layout",
    },
    {
      title: "Typography",
      description: "Font, Text, Line Height, Letter Spacing",
      icon: BookOpen,
      count: 38,
      color: "from-purple-500 to-pink-500",
      href: "/kategori/typography",
    },
    {
      title: "Colors & Backgrounds",
      description: "Color, Background, Gradient, Opacity",
      icon: Palette,
      count: 52,
      color: "from-orange-500 to-red-500",
      href: "/kategori/colors",
    },
    {
      title: "Box Model",
      description: "Margin, Padding, Width, Height, Box Sizing",
      icon: Box,
      count: 28,
      color: "from-green-500 to-emerald-500",
      href: "/kategori/boxModel",
    },
    {
      title: "Borders & Outlines",
      description: "Border, Shadow, Outline, Border Radius",
      icon: Code2,
      count: 41,
      color: "from-indigo-500 to-blue-500",
      href: "/kategori/borders",
    },
    {
      title: "Animations & Transitions",
      description: "Animation, Transition, Transform, Keyframes",
      icon: Zap,
      count: 34,
      color: "from-pink-500 to-rose-500",
      href: "/kategori/animations",
    },
    {
      title: "Filters & Effects",
      description: "Filter, Backdrop Filter, Blend Modes",
      icon: Filter,
      count: 25,
      color: "from-yellow-500 to-orange-500",
      href: "/kategori/filters",
    },
    {
      title: "Responsive Design",
      description: "Media Queries, Container Queries, Viewport",
      icon: Monitor,
      count: 18,
      color: "from-cyan-500 to-blue-500",
      href: "/kategori/responsive",
    },
    {
      title: "Interactivity",
      description: "Cursor, Pointer Events, User Select, Scroll",
      icon: MousePointer,
      count: 22,
      color: "from-violet-500 to-purple-500",
      href: "/kategori/interactivity",
    },
    {
      title: "Advanced CSS",
      description: "Custom Properties, Calc, Pseudo Classes",
      icon: Sparkles,
      count: 30,
      color: "from-red-500 to-pink-500",
      href: "/kategori/advanced",
    },
  ]

  const features = [
    {
      title: "İnteraktif Örnekler",
      description: "Her CSS özelliği için canlı kod editörü ile anında sonuç görün ve değerleri değiştirerek deneyin",
      icon: Code2,
    },
    {
      title: "Kapsamlı Dokümantasyon",
      description: "300+ CSS özelliği detaylı açıklamalar, sözdizimi ve kullanım senaryoları ile",
      icon: BookOpen,
    },
    {
      title: "Türkçe İçerik",
      description: "Tüm açıklamalar, örnekler ve öğreticiler Türkçe olarak hazırlanmıştır",
      icon: Sparkles,
    },
    {
      title: "Modern CSS",
      description: "CSS Grid, Flexbox, Custom Properties, Container Queries ve en yeni özellikler",
      icon: Zap,
    },
  ]

  const stats = [
    { value: "300+", label: "CSS Özelliği" },
    { value: "10", label: "Kategori" },
    { value: "50+", label: "İnteraktif Örnek" },
    { value: "100%", label: "Türkçe" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Header />

      {/* Hero Section */}
      <section className="container py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span className="font-medium">300+ CSS Özelliği • İnteraktif Örnekler • Türkçe</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
            CSS'i Baştan Sona{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Öğrenin
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
            Tüm CSS özelliklerini interaktif örneklerle keşfedin. Her özellik için detaylı açıklamalar, kullanım
            senaryoları ve canlı kod editörü ile pratik yapın.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8 shadow-lg shadow-primary/25" asChild>
              <Link href="/kategoriler">Öğrenmeye Başla</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent" asChild>
              <Link href="/referans">Tüm Özellikleri Gör</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">CSS Kategorileri</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            CSS özelliklerini kategorilere göre keşfedin ve öğrenin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link key={index} href={category.href}>
                <Card className="group relative overflow-hidden border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 p-6 h-full hover:-translate-y-1">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  <div className="relative">
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{category.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-muted-foreground">{category.count} özellik</span>
                      <span className="text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Keşfet →
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Neden CSS Akademi?</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Modern ve kapsamlı CSS öğrenme deneyimi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Öğreticiler</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Adım adım rehberler ile CSS'i sıfırdan öğrenin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-border/50 p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                <Layout className="h-5 w-5" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexbox Temelleri</h3>
            <p className="text-sm text-muted-foreground mb-4">Modern layout sisteminin temellerini öğrenin</p>
            <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
              <Link href="/ogretici/flexbox-temelleri">Öğreticiye Başla</Link>
            </Button>
          </Card>

          <Card className="border-border/50 p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 text-white">
                <Box className="h-5 w-5" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">CSS Grid Layout</h3>
            <p className="text-sm text-muted-foreground mb-4">Güçlü 2D layout sistemi ile karmaşık düzenler</p>
            <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
              <Link href="/ogretici/grid-layout">Öğreticiye Başla</Link>
            </Button>
          </Card>

          <Card className="border-border/50 p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-white">
                <Zap className="h-5 w-5" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">CSS Animasyonları</h3>
            <p className="text-sm text-muted-foreground mb-4">Etkileyici animasyonlar ve geçişler oluşturun</p>
            <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
              <Link href="/ogretici/animasyonlar">Öğreticiye Başla</Link>
            </Button>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/ogretici">Tüm Öğreticileri Gör</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24">
        <Card className="relative overflow-hidden border-border/50 bg-gradient-to-br from-card to-muted p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">CSS Yolculuğunuza Bugün Başlayın</h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
              300+ CSS özelliğini interaktif örneklerle öğrenin ve ustalaşın. Canlı editör ile hemen pratik yapmaya
              başlayın.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="text-base px-8" asChild>
                <Link href="/kategoriler">Hemen Başla</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 bg-transparent" asChild>
                <Link href="/editor">Canlı Editör</Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                  <Code2 className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-bold">CSS Akademi</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Kapsamlı CSS referans kütüphanesi ve öğrenme platformu. Modern web tasarımı için ihtiyacınız olan her
                şey.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Öğren</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/kategoriler" className="hover:text-foreground transition-colors">
                    Kategoriler
                  </Link>
                </li>
                <li>
                  <Link href="/referans" className="hover:text-foreground transition-colors">
                    Tüm Özellikler
                  </Link>
                </li>
                <li>
                  <Link href="/ogretici" className="hover:text-foreground transition-colors">
                    Öğreticiler
                  </Link>
                </li>
                <li>
                  <Link href="/editor" className="hover:text-foreground transition-colors">
                    Canlı Editör
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Kaynaklar</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/referans" className="hover:text-foreground transition-colors">
                    CSS Referansı
                  </Link>
                </li>
                <li>
                  <Link href="/ogretici" className="hover:text-foreground transition-colors">
                    Başlangıç Rehberi
                  </Link>
                </li>
                <li>
                  <Link href="/editor" className="hover:text-foreground transition-colors">
                    Kod Örnekleri
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <span className="hover:text-foreground transition-colors cursor-pointer">Hakkında</span>
                </li>
                <li>
                  <span className="hover:text-foreground transition-colors cursor-pointer">İletişim</span>
                </li>
                <li>
                  <span className="hover:text-foreground transition-colors cursor-pointer">Geri Bildirim</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 CSS Akademi. Tüm hakları saklıdır. Modern CSS öğrenme platformu.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
