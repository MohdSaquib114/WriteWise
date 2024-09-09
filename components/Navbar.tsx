import Link from "next/link"
import {Edit3} from "lucide-react"
import { Button } from "@/components/ui/button"

function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-gray-800/80 backdrop-blur-sm">
    <Link className="flex items-center justify-center" href="#">
      <Edit3 className="h-6 w-6 mr-2 text-purple-400" />
      <span className="font-bold text-xl text-purple-300">WriteWise</span>
    </Link>
    <nav className="ml-auto flex items-center gap-4 sm:gap-6">
      <Link className="text-sm font-medium hover:text-purple-300" href="/#features">
        Features
      </Link>
      <Link className="text-sm font-medium hover:text-purple-300" href="/#how-it-works">
        How It Works
      </Link>
      <Button asChild variant="secondary">
        <Link href="#signin">Sign In</Link>
      </Button>
    </nav>
  </header>
  )
}

export default Navbar
