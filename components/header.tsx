import Link from "next/link"
import { Code2, BookOpen, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { SearchButton } from "@/components/search-button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-gradient-to-br from-primary to-accent p-2 rounded-lg">
              <Code2 className="h-5 w-5 text-primary-foreground" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CSS Akademi
            </span>
            <span className="text-[10px] text-muted-foreground -mt-1">Premium CSS Referansı</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/kategoriler" className="gap-2">
              <BookOpen className="h-4 w-4" />
              Kategoriler
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/referans" className="gap-2">
              <Sparkles className="h-4 w-4" />
              Tüm Özellikler
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/editor" className="gap-2">
              <Code2 className="h-4 w-4" />
              Canlı Editör
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/ogretici" className="gap-2">
              <BookOpen className="h-4 w-4" />
              Öğreticiler
            </Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2">
          <SearchButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
