'use client'

import { useRedirect } from "@/lib/hooks/useRedirect"
import GrammarChecker from "./GrammarChecker"


export default function Dashboard() {
    useRedirect()
  return (
    <GrammarChecker />
  )
}


