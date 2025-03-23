import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import dotenv from 'dotenv'
dotenv.config()
import path from 'path'
const __dirname__=path.resolve()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType
    },
  };
}

export async function run() {
  
const filepath=path.join(__dirname__,'/backend/constants/bill.jpg');
console.log(filepath)
  const imageParts = [
    fileToGenerativePart(filepath,"image/jpeg")
  ];

  const generatedContent = await model.generateContent([prompt, ...imageParts]);
  
  console.log(generatedContent.response.text());
}

