import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function grammerChecker(text:string) {
  const chatCompletion = await groq.chat.completions.create({
    messages:[
        {
            role: "system",
            content: "You are a grammar analyzer. Analyze the following text for grammar mistakes and provide the response in JSON format. The JSON object must contain the following properties:\n\n- \"mistakes\": An array of objects, where each object has:\n  - \"mistake\": A string describing the grammatical error.\n  - \"correct_version\": A string with the corrected version of the sentence or phrase.\n  - \"explanation\": A string explaining why the original version was incorrect.\n\n- \"corrected_text\": A string containing the entire corrected version of the text. Use the following identifiers for special characters:\n  - `__NEWLINE__` for newlines\n  - `__TAB__` for tabs\n  - `__SPACE__` for spaces\n\nEnsure that the response contains only the JSON object with no additional introductory or concluding text, and the text should be correctly formatted and escaped."
          },
          {
            role: "user",
            content: `Please review the following text for grammar errors and provide corrections. The response should include a list of mistakes with explanations and the corrected text using the specified identifiers for special characters: ${text}`
          }
      ],
    model: "llama3-8b-8192",
    temperature: 0,
    stream: false,
   
  });
  

  return chatCompletion.choices[0]?.message?.content
}

