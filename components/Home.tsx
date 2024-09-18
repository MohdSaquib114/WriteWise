'use client'

import { Input } from "@/components/ui/input"
import { CheckCircle, Edit3, Zap, ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50 text-blue-900">
      <main className="flex-1">
        <section className="w-full py-64 bg-blue-100">
          <div className="container px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center space-y-6 text-center"
            >
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-600 animate-pulse">
                  Perfect Your Writing with WriteWise
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-700 md:text-xl">
                  Instantly improve your text with our AI-powered grammar correction service. Catch mistakes, enhance
                  readability, and elevate your writing.
                </p>
              </div>
              <div className="space-x-4">
                <Link href={"/dashboard"} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded transition-colors duration-300">Try for Free</Link>
                <Link href={'/Learn'} className="text-blue-500 border-blue-500 border px-4 py-3 rounded hover:bg-blue-100 transition-colors duration-300">Learn More</Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="features" className="w-full py-32 bg-white">
          <div className="container px-4 md:px-6">
         
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600">Key Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {[
                { icon: CheckCircle, title: "Grammar Correction", description: "Identify and fix grammar mistakes, including subject-verb agreement and punctuation errors.", color: "text-green-500" },
                { icon: Edit3, title: "Phrase Improvement", description: "Get suggestions for rephrasing to enhance readability and style.", color: "text-blue-500" },
                { icon: Zap, title: "Instant Analysis", description: "Receive immediate feedback on your text with our AI-powered scanning.", color: "text-yellow-500" }
              ].map((feature, index) => (
                <div key={index} className={`flex flex-col items-center space-y-3 text-center transition-all duration-300 transform hover:scale-105 p-6 rounded-lg shadow-lg bg-white`}>
                  <feature.icon className={`w-12 h-12 ${feature.color}`} />
                  <h3 className="text-xl font-bold text-slate-800">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-32 bg-blue-100 text-blue-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-700">How It Works</h2>
            <div className="grid gap-10 lg:grid-cols-2 items-center py-32">
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center space-x-3"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white">1</div>
                  <h3 className="text-xl font-bold text-blue-700">Input Your Text</h3>
                </motion.div>
                <p className="text-blue-600 ml-11">
                  Simply paste or type your text into our user-friendly interface.
                </p>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center space-x-3"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white">2</div>
                  <h3 className="text-xl font-bold text-blue-700">AI Analysis</h3>
                </motion.div>
                <p className="text-blue-600 ml-11">
                  Our advanced AI scans your text for grammar issues and improvement opportunities.
                </p>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center space-x-3"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white">3</div>
                  <h3 className="text-xl font-bold text-blue-700">Review Suggestions</h3>
                </motion.div>
                <p className="text-blue-600 ml-11">
                  Get a detailed list of corrections and suggestions to enhance your writing.
                </p>
              </div>
              <div className="flex justify-center">
                {/* Add an image or illustration here */}
              </div>
            </div>
          </div>
        </section>

        <section id="signin" className="w-full py-64 bg-blue-50">
          <div className="container px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-700">Sign In to WriteWise</h2>
                <p className="mx-auto max-w-[600px] text-blue-600 md:text-xl">
                  Access your account to start perfecting your writing today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-4">
                <form className="flex flex-col space-y-2">
                  <Input type="email" placeholder="Email" className="bg-white border-blue-300 text-blue-900 placeholder-blue-400" />
                  <Link href={"/dashboard"} className="bg-blue-500 hover:bg-blue-600 flex p-2 rounded-[.5rem] text-white justify-center transition-colors duration-300">
                    Sign In
                    <ChevronRight className="ml-2 h-4 w-4 self-center" />
                  </Link>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}