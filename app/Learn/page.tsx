'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Edit3, Zap, Book, Target, Sparkles, ArrowRight } from "lucide-react"

export default function LearnMore() {
  
  const [ ,setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-100 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-600 animate-color-change">
                Discover the Power of WriteWise
              </h1>
              <p className="mx-auto max-w-[700px] text-slate-700 md:text-xl animate-fade-in opacity-0" style={{animationDelay: '0.5s'}}>
                Elevate your writing with our advanced AI-powered grammar correction and style enhancement tool.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-600">
              Why Choose WriteWise?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: CheckCircle, title: "Unparalleled Accuracy", content: "Our AI-powered engine provides industry-leading accuracy in grammar correction and style suggestions.", color: "text-green-500" },
                { icon: Zap, title: "Lightning-Fast Analysis", content: "Get instant feedback on your writing, allowing you to make improvements in real-time.", color: "text-yellow-500" },
                { icon: Book, title: "Comprehensive Learning", content: "Improve your writing skills over time with detailed explanations and suggestions for each correction.", color: "text-blue-500" },
                { icon: Target, title: "Contextual Suggestions", content: "Receive style and phrasing recommendations tailored to your specific writing context and goals.", color: "text-red-500" },
                { icon: Sparkles, title: "Advanced AI Technology", content: "Benefit from cutting-edge natural language processing and machine learning algorithms.", color: "text-purple-500" },
                { icon: Edit3, title: "Versatile Writing Support", content: "Perfect for various types of writing, from academic papers to business emails and creative projects.", color: "text-orange-500" }
              ].map((feature, index) => (
                <Card key={index} className="bg-white border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader>
                    <feature.icon className={`w-10 h-10 ${feature.color} mb-4`} />
                    <CardTitle className="text-slate-800">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600">
                    {feature.content}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-600">
              How WriteWise Transforms Your Writing
            </h2>
            <div className="space-y-16">
              {[
                { icon: CheckCircle, title: "Comprehensive Grammar Check", content: "Our AI meticulously scans your text for grammatical errors, including subject-verb agreement, punctuation, and sentence structure issues. It catches even the most subtle mistakes that human proofreaders might miss.", color: "text-green-500" },
                { icon: Sparkles, title: "Style Enhancement", content: "WriteWise goes beyond grammar, offering suggestions to enhance your writing style. It helps you avoid repetitive phrases, recommends more impactful word choices, and ensures your tone is consistent and appropriate for your target audience.", color: "text-purple-500" },
                { icon: Book, title: "Contextual Learning", content: "With each suggestion, WriteWise provides clear explanations and examples, helping you understand the reasoning behind the corrections. This educational approach improves your writing skills over time, making you a more confident and proficient writer.", color: "text-blue-500" }
              ].map((feature, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 animate-fade-in opacity-0`} style={{animationDelay: `${index * 0.3}s`}}>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold text-blue-600">{`${index + 1}. ${feature.title}`}</h3>
                    <p className="text-slate-700">{feature.content}</p>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <feature.icon className={`w-24 h-24 ${feature.color}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-600">
                Ready to Transform Your Writing?
              </h2>
              <p className="mx-auto max-w-[600px] text-slate-700 md:text-xl">
                Join thousands of satisfied users who have elevated their writing with WriteWise.
                Start your journey to flawless, impactful writing today.
              </p>
              <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors duration-300 inline-flex items-center group">
                Get Started for Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes colorChange {
          0% { color: #2563eb; }
          50% { color: #4f46e5; }
          100% { color: #2563eb; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-color-change {
          animation: colorChange 4s infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}