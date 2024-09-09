import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Edit3, Zap, Book, Target, Sparkles, ArrowRight } from "lucide-react"


export default function LearnMore() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
   

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-purple-300">
                Discover the Power of WriteWise
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Elevate your writing with our advanced AI-powered grammar correction and style enhancement tool.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-300">
              Why Choose WriteWise?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CheckCircle className="w-10 h-10 text-green-400 mb-4" />
                  <CardTitle className="text-purple-300">Unparalleled Accuracy</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  Our AI-powered engine provides industry-leading accuracy in grammar correction and style suggestions.
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <Zap className="w-10 h-10 text-yellow-400 mb-4" />
                  <CardTitle className="text-purple-300">Lightning-Fast Analysis</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  Get instant feedback on your writing, allowing you to make improvements in real-time.
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <Book className="w-10 h-10 text-blue-400 mb-4" />
                  <CardTitle className="text-purple-300">Comprehensive Learning</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  Improve your writing skills over time with detailed explanations and suggestions for each correction.
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <Target className="w-10 h-10 text-red-400 mb-4" />
                  <CardTitle className="text-purple-300">Contextual Suggestions</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  Receive style and phrasing recommendations tailored to your specific writing context and goals.
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <Sparkles className="w-10 h-10 text-purple-400 mb-4" />
                  <CardTitle className="text-purple-300">Advanced AI Technology</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  Benefit from cutting-edge natural language processing and machine learning algorithms.
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <Edit3 className="w-10 h-10 text-orange-400 mb-4" />
                  <CardTitle className="text-purple-300">Versatile Writing Support</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  Perfect for various types of writing, from academic papers to business emails and creative projects.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-300">
              How WriteWise Transforms Your Writing
            </h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-purple-300">1. Comprehensive Grammar Check</h3>
                  <p className="text-gray-300">
                    Our AI meticulously scans your text for grammatical errors, including subject-verb agreement,
                    punctuation, and sentence structure issues. It catches even the most subtle mistakes that human
                    proofreaders might miss.
                  </p>
                </div>
                <div className="flex-1 flex justify-center">
                  <CheckCircle className="w-24 h-24 text-green-400" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse items-center gap-6">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-purple-300">2. Style Enhancement</h3>
                  <p className="text-gray-300">
                    WriteWise goes beyond grammar, offering suggestions to enhance your writing style. It helps you
                    avoid repetitive phrases, recommends more impactful word choices, and ensures your tone is
                    consistent and appropriate for your target audience.
                  </p>
                </div>
                <div className="flex-1 flex justify-center">
                  <Sparkles className="w-24 h-24 text-purple-400" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-purple-300">3. Contextual Learning</h3>
                  <p className="text-gray-300">
                    With each suggestion, WriteWise provides clear explanations and examples, helping you understand
                    the reasoning behind the corrections. This educational approach improves your writing skills over
                    time, making you a more confident and proficient writer.
                  </p>
                </div>
                <div className="flex-1 flex justify-center">
                  <Book className="w-24 h-24 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-300">
                Ready to Transform Your Writing?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                Join thousands of satisfied users who have elevated their writing with WriteWise.
                Start your journey to flawless, impactful writing today.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Get Started for Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

     
    </div>
  )
}