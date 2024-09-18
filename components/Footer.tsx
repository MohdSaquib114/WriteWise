"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from 'react'

function Footer() {
    const pathname = usePathname()
    if(pathname.includes("dashboard")) return <></>
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700 bg-gray-800">
    <p className="text-xs text-gray-400">
      © 2024 WriteWise. All rights reserved.
    </p>
    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
      
      <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-purple-300" href="mohdsaquibmansoori@gmail.com">
        Contact Us
      </Link>
    </nav>
  </footer>
  )
}

export default Footer
