'use client'
import Link from "next/link"
import {Edit3} from "lucide-react"
import { HouseIcon } from "lucide-react"
function Navbar() {
    
    


  return (
    <header className="px-4 lg:px-6 h-16 flex items-center  backdrop-blur-sm shadow">
    <Link className="flex items-center justify-center" href="/">
      <Edit3 className="h-6 w-6 mr-2 text-blue-400" />
      <span className="font-bold text-xl text-blue-400">WriteWise</span>
    </Link>
    <nav className="ml-auto flex items-center gap-4 sm:gap-6">
     {
 
            <>
                <Link className="text-sm  hover:text-blue-300 " href="/">
                  <HouseIcon />
                </Link>
                <Link className="text-sm  hover:text-blue-300 hidden sm:block" href="/#features">
                    Features
                </Link>
                <Link className="text-sm  hover:text-blue-300 hidden sm:block" href="/#how-it-works">
                    How It Works
                </Link>
                <Link className="text-sm  hover:text-blue-300" href="/dashboard">
                    Dashboard
                </Link>
            </> 
      }
      </nav>
  </header>
  )
}

export default Navbar
