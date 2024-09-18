"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from 'react'

function Footer() {
    const pathname = usePathname()
    if(pathname.includes("dashboard")) return <></>
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t shadow-lg bg-white">
    <p className="text-xs text-gray-700">
      © 2024 WriteWise. All rights reserved.
    </p>
    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
      
      <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-blue-300" href="#">
        Contact Us
      </Link>
    </nav>
  </footer>
  )
}

export default Footer
