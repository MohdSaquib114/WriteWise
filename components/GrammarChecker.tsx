'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ClipboardCopy, LoaderCircle } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast';

import axios from "axios"
import GrammarMistakesList from './MistakeList'


type Mistake = {
  mistake: string;
  suggestion: string;
  start_index: number;
  end_index: number
}

export default function GrammarChecker() {
  const [input, setInput] = useState('')
  const [mistakes, setMistakes] = useState<Mistake[]>([])
  const [correctedText, setCorrectedText] = useState<string>('')
  const [copying, setCopying] = useState(false)
  const [loading, setLoading] = useState(false)




  const handleGrammerChecker = async () => {
    try {
      setLoading(true)
      const res = await axios.post(`/api/grammer-checker`, { text: input })
     console.log(res)

      const data = JSON.parse(res.data.message)
      setCorrectedText(data?.correct_text)
      setMistakes(data.grammar_mistakes)
     toast.success("Result Generated")
    } catch (error) {
      console.log(error)
      toast.error("something went wrong")
    
     
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = () => {
    const plainText = correctedText.replace(/<[^>]+>/g, '')
    setCopying(true)
    setTimeout(() => {
      setCopying(false)
      navigator.clipboard.writeText(plainText)
      toast.success("Text Copied")
    }, 1000)
  }

  return (
    <div className="p-4 bg-blue-50/20 text-green-900 h-auto relative ">
   <button type='button' className=' p-1 px-4 rounded-[.5rem] hover:bg-slate-700/50 bg-blue-400 text-white' onClick={()=>{
        setCorrectedText("")
        setMistakes([])
        setInput("")
      }}>Clear All</button>
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white p-6  flex flex-col items-center rounded-xl shadow-inner">
            <LoaderCircle className="w-12 h-12 text-blue-500 animate-spin mb-4" />
            <p className="text-lg font-semibold text-gray-700">Analyzing grammar...</p>
          </div>
        </div>
      )}
      
      <div className="grid lg:grid-cols-3  gap-4 ">
        <div className="w-full space-y-4 col-span-2">
          <div>
            <h2 className="text-lg font-semibold mb-2">Input Text</h2>
            <Textarea
              placeholder="Enter your text here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-[30vh] bg-white text-green-900 border-green-200 focus:border-green-300 focus:ring-green-300 resize-none mb-2 shadow-lg"
            />
            <Button 
              onClick={handleGrammerChecker} 
              disabled={input.length < 1 || loading}
              className="w-full bg-blue-400 hover:bg-blue-500 text-white shadow-lg"
            >
              {loading ? (
                <>
                  <LoaderCircle className="w-4 h-4 mr-2 animate-spin" />
                  Checking...
                </>
              ) : (
                'Check Grammar'
              )}
            </Button>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-2">Corrected Text</h2>
            <div 
              className="bg-white p-4 rounded-md mb-2 h-[30vh] overflow-auto text-green-900 border border-green-200 shadow-lg"
              dangerouslySetInnerHTML={{ __html: correctedText || 'Corrected text will appear here.' }}
            />
            <Button 
              onClick={handleCopy} 
              disabled={!correctedText || copying} 
              variant="outline" 
              className="w-full bg-white text-blue-500 hover:bg-blue-50 border-blue-300 shadow-lg"
            >
              {copying ? <LoaderCircle className="w-4 h-4 mr-2 animate-spin" /> : <ClipboardCopy className="w-4 h-4 mr-2" />}
              {copying ? 'Copying...' : 'Copy Corrected Text'}
            </Button>
          </div>
        </div>
        
        <div className="w-full col-span-2 lg:col-span-1 ">
          {/* <h2 className="text-lg font-semibold mb-2">Grammar Mistakes</h2>
          <div className="p-4 rounded-md h-auto">
            {mistakes.length > 0 ? (
              <ul  className="space-y-2">
                {mistakes.map((mistake, index) => (
                  <li className='bg-white p-2 shadow-md border' key={index}>
                    <p className='text-red-600'><span className='text-gray-600 font-semibold'>Mistake:</span> {mistake.mistake}</p>
                    <p className='text-blue-600'><span className='text-gray-600 font-semibold'>Explanation:</span> {mistake.explanation}</p>
                    <p className='text-green-600'><span className='text-gray-600 font-semibold'>Correction:</span> {mistake.correct_version}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No mistakes found.</p>
            )}
          </div> */}
          <GrammarMistakesList mistakes={mistakes} />
        </div>
      </div>
      <Toaster />
    </div>
  )
}