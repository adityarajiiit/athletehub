import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function analyzeBillFromUrl(imageUrl) {
  const response = await groq.chat.completions.create({
    model: "meta-llama/llama-4-scout-17b-16e-instruct",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image_url",
            image_url: { url: imageUrl },
          },
          {
            type: "text",
            text: `Extract transaction details and return ONLY JSON:
            {
              "type": "debit or credit",
              "amount": "numeric string e.g. 250.00 , must be a string as per model's response format",
              "description": "brief description",
              "date": "ISO 8601 format",
              "category": "Food | Transport | Shopping | Entertainment | Health | Utilities | Other",
              "status": "completed or pending"
            }`,
          },
        ],
      },
    ],
    max_tokens: 500,
  });

  const text = response.choices[0].message.content;
  const cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
  return JSON.parse(cleaned);
}

export default analyzeBillFromUrl;
