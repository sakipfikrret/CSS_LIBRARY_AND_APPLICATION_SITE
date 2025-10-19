import { LiveCodeEditor } from "@/components/live-code-editor"
import { Header } from "@/components/header"

export default function EditorPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Canlı Kod Editörü
            </h1>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl leading-relaxed">
              CSS kodlarınızı yazın ve anında sonuçları görün. HTML ve CSS'i birlikte düzenleyerek öğrenin.
            </p>
          </div>

          <LiveCodeEditor />
        </div>
      </main>
    </div>
  )
}
