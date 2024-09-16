import { getUserById } from "@/lib/db";
import { grammerChecker } from "@/lib/grammerChecker";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest){
    try {
        
        const {text} = await req.json()
        const url = new URL(req.url);
        const userId = url.searchParams.get('userId')
        const user = await getUserById(userId as string)
        if(!user){
            return NextResponse.json({message:"User Not found"},{status:404})
        }
        const chatResponse = await grammerChecker(text)
       
        
        return NextResponse.json({message:chatResponse},{status:200})

    } catch (error) {
        return NextResponse.json({error:error},{status:404})
        
    }


}


// Analyze the following text for grammar mistakes. For each mistake, provide:
// 1. The mistake.
// 2. The correct version.
// 3. A brief explanation of the error.

// Additionally, return the entire corrected version of the text, preserving the original formatting, indentation, and line breaks.

// Text to analyze: