"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, RotateCcw, Copy, Check } from "lucide-react"

const defaultHTML = `<div class="container">
  <h1>Merhaba CSS!</h1>
  <p>Bu bir örnek paragraftır.</p>
  <button class="btn">Tıkla</button>
</div>`

const defaultCSS = `.container {
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.btn {
  padding: 0.75rem 1.5rem;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.btn:hover {
  transform: scale(1.05);
}`

export function LiveCodeEditor() {
  const [html, setHtml] = useState(defaultHTML)
  const [css, setCSS] = useState(defaultCSS)
  const [copied, setCopied] = useState(false)

  const handleReset = () => {
    setHtml(defaultHTML)
    setCSS(defaultCSS)
  }

  const copyCode = () => {
    const fullCode = `<!-- HTML -->\n${html}\n\n/* CSS */\n${css}`
    navigator.clipboard.writeText(fullCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const renderPreview = () => {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <style>${css}</style>
          ${html}
        `,
        }}
      />
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Canlı Kod Editörü</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleReset}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Sıfırla
          </Button>
          <Button variant="outline" size="sm" onClick={copyCode}>
            {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
            Kopyala
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Code Editor */}
        <Card className="border-border bg-card p-4">
          <Tabs defaultValue="html" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="html">HTML</TabsTrigger>
              <TabsTrigger value="css">CSS</TabsTrigger>
            </TabsList>

            <TabsContent value="html" className="mt-0">
              <textarea
                value={html}
                onChange={(e) => setHtml(e.target.value)}
                className="w-full h-[400px] p-4 bg-muted rounded-lg font-mono text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                spellCheck={false}
              />
            </TabsContent>

            <TabsContent value="css" className="mt-0">
              <textarea
                value={css}
                onChange={(e) => setCSS(e.target.value)}
                className="w-full h-[400px] p-4 bg-muted rounded-lg font-mono text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                spellCheck={false}
              />
            </TabsContent>
          </Tabs>
        </Card>

        {/* Preview */}
        <Card className="border-border bg-card p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-muted-foreground">Önizleme</h3>
            <Play className="h-4 w-4 text-primary" />
          </div>

          <div className="w-full h-[400px] bg-background rounded-lg overflow-auto p-4 border border-border">
            {renderPreview()}
          </div>
        </Card>
      </div>

      <Card className="border-border bg-muted/50 p-4">
        <p className="text-sm text-muted-foreground">
          <strong>İpucu:</strong> HTML ve CSS kodlarınızı yukarıdaki editörlerde düzenleyin. Değişiklikler anında
          önizlemede görünecektir.
        </p>
      </Card>
    </div>
  )
}
