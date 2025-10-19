import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2, Code2, Lightbulb } from "lucide-react"
import { notFound } from "next/navigation"

const tutorialContent: Record<
  string,
  {
    title: string
    description: string
    difficulty: string
    duration: string
    sections: Array<{
      title: string
      content: string
      code?: string
      demo?: string
      tips?: string[]
    }>
  }
> = {
  "flexbox-temelleri": {
    title: "Flexbox Temelleri",
    description: "Modern layout sisteminin temellerini öğrenin",
    difficulty: "Başlangıç",
    duration: "15 dk",
    sections: [
      {
        title: "Flexbox Nedir?",
        content:
          "Flexbox (Flexible Box Layout), CSS'de tek boyutlu (bir satır veya bir sütun) layout oluşturmak için tasarlanmış güçlü bir modüldür. Elementleri hizalamak, dağıtmak ve aralarındaki boşluğu yönetmek için mükemmel bir çözümdür.",
        tips: [
          "Flexbox tek boyutludur - ya satır ya da sütun",
          "Parent element'e display: flex uygulanır",
          "Child elementler otomatik olarak flex item olur",
        ],
      },
      {
        title: "Display Flex",
        content:
          "Bir container'ı flex container yapmak için display: flex kullanırız. Bu, içindeki tüm direkt child elementleri flex item haline getirir.",
        code: `.container {
  display: flex;
}`,
        demo: "flex",
      },
      {
        title: "Flex Direction",
        content:
          "flex-direction özelliği, flex item'ların hangi yönde dizileceğini belirler. Varsayılan değer row'dur (yatay).",
        code: `.container {
  display: flex;
  flex-direction: row; /* row | row-reverse | column | column-reverse */
}`,
        demo: "flex-direction",
        tips: ["row: Soldan sağa (varsayılan)", "column: Yukarıdan aşağıya", "reverse: Ters yönde"],
      },
      {
        title: "Justify Content",
        content:
          "justify-content, flex item'ların ana eksen (main axis) boyunca nasıl hizalanacağını kontrol eder. Bu, elementler arasındaki boşluğu dağıtmak için kullanılır.",
        code: `.container {
  display: flex;
  justify-content: center; /* flex-start | flex-end | center | space-between | space-around | space-evenly */
}`,
        demo: "justify-content",
        tips: [
          "flex-start: Başlangıca hizala",
          "center: Ortala",
          "space-between: Araya eşit boşluk",
          "space-evenly: Her yere eşit boşluk",
        ],
      },
      {
        title: "Align Items",
        content:
          "align-items, flex item'ların çapraz eksen (cross axis) boyunca nasıl hizalanacağını kontrol eder. Dikey hizalama için kullanılır.",
        code: `.container {
  display: flex;
  align-items: center; /* stretch | flex-start | flex-end | center | baseline */
}`,
        demo: "align-items",
        tips: ["stretch: Tam yüksekliğe uzat (varsayılan)", "center: Dikey ortala", "flex-start: Üste hizala"],
      },
      {
        title: "Gap",
        content: "gap özelliği, flex item'lar arasında boşluk oluşturur. Margin kullanmaya göre çok daha pratiktir.",
        code: `.container {
  display: flex;
  gap: 1rem; /* Tüm item'lar arası boşluk */
  /* veya */
  gap: 1rem 2rem; /* row-gap column-gap */
}`,
        demo: "gap",
        tips: ["Tek değer: Hem yatay hem dikey", "İki değer: İlk satır arası, ikinci sütun arası"],
      },
    ],
  },
  "grid-layout": {
    title: "CSS Grid Layout",
    description: "Güçlü 2D layout sistemi ile karmaşık düzenler oluşturun",
    difficulty: "Orta",
    duration: "25 dk",
    sections: [
      {
        title: "Grid Nedir?",
        content:
          "CSS Grid, iki boyutlu (satır ve sütun) layout oluşturmak için tasarlanmış güçlü bir sistemdir. Flexbox'tan farklı olarak hem yatay hem dikey düzenleme yapabilir.",
        tips: [
          "Grid iki boyutludur - hem satır hem sütun",
          "Karmaşık layoutlar için idealdir",
          "Responsive tasarım için mükemmeldir",
        ],
      },
      {
        title: "Display Grid",
        content: "Bir container'ı grid container yapmak için display: grid kullanırız.",
        code: `.container {
  display: grid;
}`,
        demo: "grid",
      },
      {
        title: "Grid Template Columns",
        content: "grid-template-columns ile sütun sayısını ve boyutlarını belirleriz.",
        code: `.container {
  display: grid;
  grid-template-columns: 200px 200px 200px; /* 3 sütun, her biri 200px */
  /* veya */
  grid-template-columns: 1fr 1fr 1fr; /* 3 eşit sütun */
  /* veya */
  grid-template-columns: repeat(3, 1fr); /* Kısa yol */
}`,
        demo: "grid-template-columns",
        tips: ["fr: Fraction unit, kalan alanı böler", "repeat(): Tekrar eden değerler için kısayol"],
      },
      {
        title: "Grid Gap",
        content: "gap ile grid item'lar arasında boşluk oluştururuz.",
        code: `.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem; /* Hem satır hem sütun arası */
}`,
        demo: "grid-gap",
      },
      {
        title: "Grid Area",
        content: "grid-area ile bir item'ın hangi alanda yer alacağını belirleriz.",
        code: `.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }`,
        demo: "grid-area",
        tips: [
          "İsimlendirilmiş alanlar kullanarak layout oluşturun",
          "Responsive tasarım için alanları yeniden düzenleyin",
        ],
      },
    ],
  },
}

export default function TutorialDetailPage({ params }: { params: { id: string } }) {
  const tutorial = tutorialContent[params.id]

  if (!tutorial) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Header />

      <main className="container py-12 max-w-4xl">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/ogretici">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Öğreticilere Dön
          </Link>
        </Button>

        {/* Tutorial Header */}
        <div className="mb-12 space-y-4">
          <div className="flex items-center gap-3">
            <Badge variant="secondary">{tutorial.difficulty}</Badge>
            <Badge variant="outline">{tutorial.duration}</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {tutorial.title}
          </h1>
          <p className="text-xl text-muted-foreground">{tutorial.description}</p>
        </div>

        {/* Tutorial Sections */}
        <div className="space-y-8">
          {tutorial.sections.map((section, index) => (
            <Card key={index} className="border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                  <CardTitle className="text-2xl">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>

                {section.code && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Code2 className="h-4 w-4 text-primary" />
                      Kod Örneği
                    </div>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto border border-border">
                      <code className="text-sm font-mono">{section.code}</code>
                    </pre>
                  </div>
                )}

                {section.tips && section.tips.length > 0 && (
                  <div className="space-y-3 bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <Lightbulb className="h-4 w-4" />
                      İpuçları
                    </div>
                    <ul className="space-y-2">
                      {section.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/ogretici">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Öğreticilere Dön
            </Link>
          </Button>
          <Button asChild>
            <Link href="/editor">
              Canlı Editörde Dene
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
