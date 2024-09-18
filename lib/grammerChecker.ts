import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function grammerChecker(text:string) {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
        {
            role: "system",
            content: `"You are a grammar analyzer. Analyze the following text for grammar mistakes and return only a valid JSON object in your response.\n\nThe JSON object should contain:\n- \"mistakes\": An array of objects, where each object has:\n  - \"mistake\": A string describing the grammatical error.\n  - \"correct_version\": A string with the corrected version of the sentence or phrase.\n  - \"explanation\": A string explaining why the original version was incorrect.\n\n- \"corrected_text\": A string containing the entire corrected version of the text.\n\n### Important Formatting Rules:\n1. Do not include any introductory text, concluding text, or explanations . Only return the JSON object.\n2. Do not add any escape sequences (like \\n or \\r) within the \"corrected_text\" field. Return the corrected text exactly as it appears, preserving spaces and paragraphs without adding escape characters.\n3. Ensure that the output is valid JSON that can be directly parsed by a JSON parser without any errors."
    
            The JSON object should contain:
            - "mistakes": An array of objects, where each object has:
              - "mistake": A string describing the grammatical error.
              - "correct_version": A string with the corrected version of the sentence or phrase.
              - "explanation": A string explaining why the original version was incorrect.
    
            - "corrected_text": A string containing the entire corrected version of the text.
    
           `
        },
        {
            role: "user",
            content: `Please review the following text for grammar mistakes and provide corrections in valid JSON format . Just a JSON and please include the closing braces at the end also please : ${text}`
        }
    ]
    
      
      
      ,
    model: "llama3-8b-8192",
    temperature: 0,
    stream: false,
   
  });
  

  return chatCompletion.choices[0]?.message?.content
}

