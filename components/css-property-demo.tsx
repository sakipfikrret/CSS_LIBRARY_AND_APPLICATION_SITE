"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Copy, Check } from "lucide-react"

interface CSSPropertyDemoProps {
  propertyName: string
  description: string
  syntax: string
  values: string[]
  example: string
  browserSupport: string
}

export function CSSPropertyDemo({
  propertyName,
  description,
  syntax,
  values,
  example,
  browserSupport,
}: CSSPropertyDemoProps) {
  const [copied, setCopied] = useState(false)
  const [selectedValue, setSelectedValue] = useState(values[0])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Generate demo styles based on property
  const getDemoStyle = (value: string) => {
    const style: React.CSSProperties = {}

    // Handle different property types
    if (propertyName === "display") {
      return { display: value as any }
    } else if (propertyName === "position") {
      return { position: value as any, top: "10px", left: "10px" }
    } else if (propertyName === "flex-direction") {
      return { display: "flex", flexDirection: value as any }
    } else if (propertyName === "justify-content") {
      return { display: "flex", justifyContent: value as any }
    } else if (propertyName === "align-items") {
      return { display: "flex", alignItems: value as any, minHeight: "150px" }
    } else if (propertyName === "text-align") {
      return { textAlign: value as any }
    } else if (propertyName === "font-weight") {
      return { fontWeight: value as any }
    } else if (propertyName === "font-style") {
      return { fontStyle: value as any }
    } else if (propertyName === "text-decoration") {
      return { textDecoration: value as any }
    } else if (propertyName === "text-transform") {
      return { textTransform: value as any }
    } else if (propertyName === "border-style") {
      return { border: `3px ${value} #3b82f6` }
    } else if (propertyName === "border-radius") {
      return { borderRadius: value, border: "2px solid #3b82f6", padding: "20px" }
    } else if (propertyName === "cursor") {
      return { cursor: value as any }
    } else if (propertyName === "opacity") {
      return { opacity: Number.parseFloat(value) || 1 }
    } else if (propertyName === "overflow") {
      return { overflow: value as any, height: "100px", border: "1px solid #3b82f6" }
    }

    return style
  }

  return (
    <div className="space-y-6">
      {/* Property Info */}
      <Card className="border-border bg-card p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              <code className="text-primary">{propertyName}</code>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
          </div>
          <Badge variant="secondary">{browserSupport}</Badge>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-2">Sözdizimi</h3>
            <div className="rounded-lg bg-muted p-4 relative group">
              <code className="text-sm text-foreground">{syntax}</code>
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => copyToClipboard(syntax)}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-2">Değerler</h3>
            <div className="flex flex-wrap gap-2">
              {values.map((value, index) => (
                <Badge key={index} variant="outline" className="font-mono">
                  {value}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Interactive Demo */}
      <Card className="border-border bg-card p-6">
        <h3 className="text-xl font-semibold mb-4">İnteraktif Demo</h3>

        <Tabs defaultValue="demo" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="demo">Önizleme</TabsTrigger>
            <TabsTrigger value="code">Kod</TabsTrigger>
          </TabsList>

          <TabsContent value="demo" className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Değer Seç:</label>
              <div className="flex flex-wrap gap-2">
                {values.slice(0, 8).map((value) => (
                  <Button
                    key={value}
                    variant={selectedValue === value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedValue(value)}
                    className="font-mono text-xs"
                  >
                    {value}
                  </Button>
                ))}
              </div>
            </div>

            <div className="rounded-lg border-2 border-dashed border-border bg-muted/30 p-8 min-h-[200px] flex items-center justify-center">
              <div style={getDemoStyle(selectedValue)} className="w-full">
                {propertyName.includes("flex") || propertyName.includes("grid") ? (
                  <>
                    <div className="bg-primary/20 border border-primary p-4 m-2">Öğe 1</div>
                    <div className="bg-accent/20 border border-accent p-4 m-2">Öğe 2</div>
                    <div className="bg-primary/20 border border-primary p-4 m-2">Öğe 3</div>
                  </>
                ) : (
                  <div className="text-center">
                    <p className="text-lg">
                      Bu bir örnek metindir. <code className="text-primary">{propertyName}</code> özelliği
                      uygulanmıştır.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-lg bg-muted p-4">
              <code className="text-sm text-foreground">
                {propertyName}: {selectedValue};
              </code>
            </div>
          </TabsContent>

          <TabsContent value="code" className="space-y-4">
            <div className="rounded-lg bg-muted p-4 relative group">
              <pre className="text-sm text-foreground overflow-x-auto">
                <code>{`.element {\n  ${propertyName}: ${selectedValue};\n}`}</code>
              </pre>
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => copyToClipboard(`.element {\n  ${propertyName}: ${selectedValue};\n}`)}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>

            <div className="rounded-lg bg-muted p-4">
              <h4 className="text-sm font-semibold mb-2">HTML</h4>
              <pre className="text-sm text-muted-foreground">
                <code>{`<div class="element">\n  İçerik\n</div>`}</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </Card>

      {/* Example Usage */}
      <Card className="border-border bg-card p-6">
        <h3 className="text-xl font-semibold mb-4">Örnek Kullanım</h3>
        <div className="rounded-lg bg-muted p-4 relative group">
          <pre className="text-sm text-foreground overflow-x-auto">
            <code>{example}</code>
          </pre>
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => copyToClipboard(example)}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </Card>
    </div>
  )
}
