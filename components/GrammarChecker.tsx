'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ClipboardCopy } from 'lucide-react'
import { LoaderCircle } from 'lucide-react';
import { useSession } from 'next-auth/react'
import axios from "axios"

type Mistake = {
  mistake:string;
  correct_version:string;
  explanation:string
}




export default function GrammarChecker() {
  const [input, setInput] = useState('')
  const [mistakes, setMistakes] = useState<Mistake[]>([])
  const [correctedText, setCorrectedText] = useState<string>('')
  const [copying,setCopying] = useState(false)
  const [loading,setLoading] = useState(false)
  const session = useSession()
  

   const handleGrammerChecker = async () => {
    try {
      setLoading(true)
      const res = await axios.post(`/api/grammer-checker?userId=${session.data?.user.id}`,{text:input})
     console.log(res)

      const data =  JSON.parse(res.data.message)
      console.log(data.mistakes)
      setCorrectedText(data?.corrected_text)
      setMistakes(data.mistakes)
      
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
      // console.log(data)
  }


  const handleCopy = () => {
    const plainText = correctedText.replace(/<[^>]+>/g, '')
    setCopying(true)
    setTimeout(()=>{
      setCopying(false)
      navigator.clipboard.writeText(plainText)
    },1000)
  }

  return (
    <div className=" p-4 bg-blue-50/20 text-green-900 h-auto ">
          
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-2/3 space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Input Text</h2>
            <Textarea
              placeholder="Enter your text here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-[30vh] bg-white text-green-900 border-green-200 focus:border-green-300 focus:ring-green-300 resize-none mb-2 shadow-lg "
            />
            <Button 
              onClick={handleGrammerChecker} 
              disabled={input.length < 1 }
              className="w-full bg-blue-400 hover:bg-blue-500 text-white shadow-lg"
            >
              Check Grammar
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
              disabled={!correctedText} 
              variant="outline" 
              className="w-full bg-white text-blue-500 hover:bg-blue-50 border-blue-300 shadow-lg"
            >
             { copying ?   <LoaderCircle className="w-4 h-4 mr-2 animate-spin"  /> :<ClipboardCopy className="w-4 h-4 mr-2" />}
              Copy Corrected Text
            </Button>
          </div>
        </div>
        
        <div className="w-full  lg:w-1/3 lg:h-[550px]  overflow-y-scroll">
          <h2 className="text-lg font-semibold mb-2">Grammar Mistakes</h2>
          <div className=" p-4 rounded-md   h-auto ">
            {mistakes.length > 0 ? (
              <ul style={{scrollbarWidth:"none"}} className=" space-y-2 ">
                {mistakes.map((mistake, index) => (
                  <li className='bg-white p-2 shadow-md border' key={index}>
                    <p className='text-red-600 '><span className='text-gray-600 font-semibold'> Mistake:</span> {mistake.mistake}</p>
                    <p className='text-blue-600 '><span className='text-gray-600 font-semibold'> Explanation:</span> {mistake.explanation}</p>
                    <p className='text-green-600 '><span className='text-gray-600 font-semibold'> Correction:</span> {mistake.correct_version}</p>
                  
                  </li>
                ))}
              </ul>
            ) : (
              <p>No mistakes found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}