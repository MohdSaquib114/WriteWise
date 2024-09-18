import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const schema = {
    $defs: {
      GrammarMistake: {
        properties: {
          mistake: { title: "Mistake", type: "string" },
          suggestion: { title: "Suggestion", type: "string" },
          start_index: { title: "Start Index", type: "integer" },
          end_index: { title: "End Index", type: "integer" }
        },
        required: ["mistake", "suggestion", "start_index", "end_index"],
        title: "Grammar Mistake",
        type: "object"
      }
    },
    properties: {
      correct_text: { title: "Correct Text", type: "string" },
      grammar_mistakes: {
        items: { $ref: "#/$defs/GrammarMistake" },
        title: "Grammar Mistakes",
        type: "array"
      }
    },
    required: ["correct_text", "grammar_mistakes"],
    title: "Grammar Analysis with Corrected Text",
    type: "object"
  };
  
  

export async function grammerChecker(text:string) {
    const jsonSchema = JSON.stringify(schema)
  const chatCompletion = await groq.chat.completions.create({
    messages: [
        {
          role: "system",
          content: `You are a grammar analysis tool. Your task is to analyze the provided text for grammar mistakes and return a JSON object that follows this schema: ${jsonSchema}. The JSON object should contain:
          - An array of grammar mistakes, each with the fields: "mistake", "suggestion", "start_index", and "end_index".
          - A field "correct_text" with the fully corrected text.`
        },
        {
          role: "user",
          content: `Analyze the following text for grammar mistakes and generate the response according to the schema provided and do not provide any introductory line and outro line. Include the mistakes with their corrections and the corrected text:
          ${text}`
        }
      ]
      
      
      
      
      ,
    model: "llama3-8b-8192",
    temperature: 0,
    stream: false,

   
  });
  

  return chatCompletion.choices[0].message.content 
}

