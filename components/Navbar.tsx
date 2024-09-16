'use client'
import Link from "next/link"
import {Edit3} from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation"

function Navbar() {
    const session = useSession()
    const pathname = usePathname()


  return (
    <header className="px-4 lg:px-6 h-16 flex items-center  backdrop-blur-sm shadow">
    <Link className="flex items-center justify-center" href="/">
      <Edit3 className="h-6 w-6 mr-2 text-blue-400" />
      <span className="font-bold text-xl text-blue-400">WriteWise</span>
    </Link>
    <nav className="ml-auto flex items-center gap-4 sm:gap-6">
     {
  !pathname.includes('dashboard') && 
            <>
                <Link className="text-sm font-medium hover:text-purple-300" href="/#features">
                    Features
                </Link>
                <Link className="text-sm font-medium hover:text-purple-300" href="/#how-it-works">
                    How It Works
                </Link>
            </> 
      }
      {/* {pathname.includes('dashboard') && <p>{session.data?.user}</p> } */}
      {session.data?.user && <Button className="bg-white rounded-[7px] border-black/30 border text-black/60  text-md  shadow-none" onClick={() => signOut()}>Logout</Button>}
      {!session.data?.user &&<Button className="bg-white rounded-[7px] border-black/30 border text-black/60  text-md  shadow-none" onClick={() => signIn()}>Sign In</Button>}
    </nav>
  </header>
  )
}

export default Navbar
