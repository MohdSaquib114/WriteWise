
import { grammerChecker } from "@/lib/grammerChecker";
import { NextRequest, NextResponse } from "next/server";

`"You are a grammar analyzer. Analyze the following text for grammar mistakes and return only a valid JSON object in your response.\n\nThe JSON object should contain:\n- \"mistakes\": An array of objects, where each object has:\n  - \"mistake\": A string describing the grammatical error.\n  - \"correct_version\": A string with the corrected version of the sentence or phrase.\n  - \"explanation\": A string explaining why the original version was incorrect.\n\n- \"corrected_text\": A string containing the entire corrected version of the text.\n\n### Important Formatting Rules:\n1. Do not include any introductory text, concluding text, or explanations . Only return the JSON object.\n2. Do not add any escape sequences (like \\n or \\r) within the \"corrected_text\" field. Return the corrected text exactly as it appears, preserving spaces and paragraphs without adding escape characters.\n3. Ensure that the output is valid JSON that can be directly parsed by a JSON parser without any errors."
    
            The JSON object should contain:
            - "mistakes": An array of objects, where each object has:
              - "mistake": A string describing the grammatical error.
              - "correct_version": A string with the corrected version of the sentence or phrase.
              - "explanation": A string explaining why the original version was incorrect.
    
            - "corrected_text": A string containing the entire corrected version of the text.
    
           `

        
           
           export async function POST(req: NextRequest) {
             try {
               // Parse and validate the request body
               const body = await req.json();
               if (!body.text) {
                 return NextResponse.json(
                   { error: "Missing 'text' in request body" },
                   { status: 400 }
                 );
               }
           
               // Clean the text input
               let cleaned = String(body.text).replace(/(\r\n|\n|\r)/gm, ' ');
               cleaned = cleaned.replace(/[^\w\s.,?!-]/g, '');
           
               // Call the grammar checker
               const chatResponse = await grammerChecker(cleaned);
           
               // Return the response
               return NextResponse.json({ message: chatResponse }, { status: 200 });
             } catch (error) {
               // Handle errors and return meaningful responses
               return NextResponse.json(
                 { error: (error as Error).message || "An unknown error occurred" },
                 { status: 500 }
               );
             }
           }
           