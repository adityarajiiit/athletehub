import { GoogleGenerativeAI } from "@google/generative-ai";
export const billScan=async(req,res)=>{
    console.log(req.body.image)
    const image=req.body.image;
    const mimeType=req.body.mimetype
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const prompt = `You will be given a receipt your task is to respond with just a json containing type:{
type:String,
enum:["income","expense"],
required:true
},amount:{
type:Number,
required:true
},description:{
type:String
},date:{
type:Date,
required:true
},
category:{
type:String,
enum:["Contract","Sponsorship","Prize","Merchandise","Appearance Fee","Training","Equipment","Competition Fees","Travel","Accommodation","Nutrition","Medical","Therapy","Coaching Fees","Management Fees","Insurance","Transport","Uniform","Other Income","Other Expense"]
},
isRecurring:{
type:Boolean,
default:false
},
recurringInterval:{
type:String,
enum:["daily","weekly","monthly","yearly"]
},
status:{
type:String,
enum:["pending","completed"],
default:"completed"
},
you have to respond a json with these keys type, amount, description, date, category, isRecurring, recurringInterval,
status, if you cant find any required field you can pass null if the image provided to you doesnt have anything clearly then give empty json as response  
just json nothing else`;
    const result = await model.generateContent([
        {
            inlineData: {
                data:image,
                mimeType:mimeType,
            },
        },
        prompt,
    ],{
        generationConfig:{
            temperature:1,
            top_p:0.95,
            top_k:40,
            max_output_tokens:8192,
            response_mime_type:"application/json"
        }
    });
    console.log(result.response.text());
    res.send(result.response.text())
}
