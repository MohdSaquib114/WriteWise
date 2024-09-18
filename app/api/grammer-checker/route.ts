
import { grammerChecker } from "@/lib/grammerChecker";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req:NextRequest){
    try {
        
        const {text} = await req.json()
      
      
        let cleaned = text.replace(/(\r\n|\n|\r)/gm, ' ');
  

  cleaned = cleaned.replace(/[^\w\s.,?!-]/g, '');
        const chatResponse = await grammerChecker(cleaned)
    //    const response = removeFirstLine(chatResponse as string)
       
        
        return NextResponse.json({message:chatResponse},{status:200})

    } catch (error) {
        console.log(error)
        return NextResponse.json({error:error},{status:404})
        
    }


}


// Analyze the following text for grammar mistakes. For each mistake, provide:
// 1. The mistake.
// 2. The correct version.
// 3. A brief explanation of the error.

// Additionally, return the entire corrected version of the text, preserving the original formatting, indentation, and line breaks.

// Text to analyze: