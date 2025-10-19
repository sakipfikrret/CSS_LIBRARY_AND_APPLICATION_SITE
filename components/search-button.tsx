"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { SearchDialog } from "./search-dialog"

export function SearchButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
        <Search className="h-5 w-5" />
      </Button>
      <SearchDialog open={open} onOpenChange={setOpen} />
    </>
  )
}
