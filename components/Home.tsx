import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, Edit3, Zap, ChevronRight } from "lucide-react"
// import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
     
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-purple-300">
                  Perfect Your Writing with WriteWise
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Instantly improve your text with our AI-powered grammar correction service. Catch mistakes, enhance
                  readability, and elevate your writing.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Try for Free</Button>
                <Link href={'/Learn'} className="text-purple-300 border-purple-600 outline p-2 rounded-md hover:bg-purple-900">Learn More</Link>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-300">Key Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <CheckCircle className="w-12 h-12 text-green-400" />
                <h3 className="text-xl font-bold text-purple-300">Grammar Correction</h3>
                <p className="text-gray-300">
                  Identify and fix grammar mistakes, including subject-verb agreement and punctuation errors.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Edit3 className="w-12 h-12 text-blue-400" />
                <h3 className="text-xl font-bold text-purple-300">Phrase Improvement</h3>
                <p className="text-gray-300">
                  Get suggestions for rephrasing to enhance readability and style.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Zap className="w-12 h-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-purple-300">Instant Analysis</h3>
                <p className="text-gray-300">
                  Receive immediate feedback on your text with our AI-powered scanning.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-300">How It Works</h2>
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white">1</div>
                  <h3 className="text-xl font-bold text-purple-300">Input Your Text</h3>
                </div>
                <p className="text-gray-300 ml-11">
                  Simply paste or type your text into our user-friendly interface.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white">2</div>
                  <h3 className="text-xl font-bold text-purple-300">AI Analysis</h3>
                </div>
                <p className="text-gray-300 ml-11">
                  Our advanced AI scans your text for grammar issues and improvement opportunities.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white">3</div>
                  <h3 className="text-xl font-bold text-purple-300">Review Suggestions</h3>
                </div>
                <p className="text-gray-300 ml-11">
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
        <section id="signin" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-300">Sign In to WriteWise</h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                  Access your account to start perfecting your writing today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-2">
                  <Input type="email" placeholder="Email" className="bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400" />
                  <Input type="password" placeholder="Password" className="bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400" />
                  <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">
                    Sign In
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-sm text-gray-400">
                  Dont have an account? <Link href="#" className="text-purple-400 hover:underline">Sign up</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}