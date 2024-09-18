'use client'

import { Input } from "@/components/ui/input"
import { CheckCircle, Edit3, Zap, ChevronRight } from "lucide-react"


// import Image from "next/image"
import Link from "next/link"



export default function Home() {
 
  return (
    <div className="flex flex-col min-h-screen bg-green-50 text-green-900 ">
     
      <main className="flex-1">
        <section className="w-full py-64 bg-indigo-100">
          <div className="">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <div>
               
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-purple-300 animate-color-change">
                  Perfect Your Writing with WriteWise
                </h1>
                </div>
                <p className="mx-auto max-w-[700px]  md:text-xl animate-fade-in">
                  Instantly improve your text with our AI-powered grammar correction service. Catch mistakes, enhance
                  readability, and elevate your writing.
                </p>
              </div>
              <div className="space-x-4">
                <Link href={"/dashboard"}  className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-3">Try for Free</Link>
                <Link href={'/Learn'} className="text-blue-400 border-blue-400 outline p-2 rounded-md hover:bg-blue-500 hover:text-slate-50">Learn More</Link>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-300">Key Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 py-32">
              <div className="flex flex-col items-center space-y-3 text-center transition-colors cursor-pointer hover:bg-slate-500 p-5 rounded-md">
                <CheckCircle className="w-12 h-12 text-green-400" />
                <h3 className="text-xl font-bold text-purple-300">Grammar Correction</h3>
                <p className="text-gray-300">
                  Identify and fix grammar mistakes, including subject-verb agreement and punctuation errors.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center transition-colors cursor-pointer hover:bg-slate-500 p-5 rounded-md">
                <Edit3 className="w-12 h-12 text-blue-400" />
                <h3 className="text-xl font-bold text-purple-300">Phrase Improvement</h3>
                <p className="text-gray-300">
                  Get suggestions for rephrasing to enhance readability and style.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center transition-colors cursor-pointer hover:bg-slate-500 p-5 rounded-md">
                <Zap className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-purple-300">Instant Analysis</h3>
                <p className="text-gray-300">
                  Receive immediate feedback on your text with our AI-powered scanning.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-32 bg-blue-200/50 text-blue-400 animate-fade-in">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 ">How It Works</h2>
            <div className="grid gap-10 lg:grid-cols-2 items-center py-32">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white">1</div>
                  <h3 className="text-xl font-bold text-blue-300">Input Your Text</h3>
                </div>
                <p className="text-gray-600 ml-11">
                  Simply paste or type your text into our user-friendly interface.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white">2</div>
                  <h3 className="text-xl font-bold text-blue-300">AI Analysis</h3>
                </div>
                <p className="text-gray-600 ml-11">
                  Our advanced AI scans your text for grammar issues and improvement opportunities.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white">3</div>
                  <h3 className="text-xl font-bold text-blue-300">Review Suggestions</h3>
                </div>
                <p className="text-gray-600 ml-11">
                  Get a detailed list of corrections and suggestions to enhance your writing.
                </p>
              </div>
              <div className="flex justify-center">
                {/* <Image
                  src="https://ik.imagekit.io/ably/ghost/prod/2023/05/AI-writing-assistant.jpg?tr=w-1200,h-630,fo-auto"
                  alt="AI Writing Assistant"
                  width={500}
                  height={375}
                  className="rounded-lg object-cover shadow-lg"
                /> */}
              </div>
            </div>
          </div>
        </section>
        <section id="signin" className="w-full py-64 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-300">Sign In to WriteWise</h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                  Access your account to start perfecting your writing today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-4">
                <form className="flex flex-col space-y-2">
                  <Input type="email" placeholder="Email" className="bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400" />
                 
                  <Link href={"/dashboard"}   className="bg-purple-600 hover:bg-purple-700 flex p-2 rounded-[.5rem] text-white justify-center" >
                    Sign In
                    <ChevronRight className="ml-2 h-4 w-4 self-center" />
                  </Link>
                </form>
               
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}