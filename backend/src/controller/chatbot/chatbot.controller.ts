import type { Request, Response } from "express";
import {GoogleGenerativeAI} from "@google/generative-ai"
import Envconfig from "../../config/Envconfig.ts";

class ChatController {
    async prompt(
        req: Request,
        res: Response
    ){

        try{
            const {prompt }= req.body;
            const userId = req.user?.id;

            if(!userId){
                throw new Error("User not found")
            }
            if(!prompt){
                throw new Error("Post not found")
            }

            const genai = new GoogleGenerativeAI(Envconfig.GOOGLE_API_KEY!);
            const model = genai.getGenerativeModel({model:"gemini-1.5-flash"});

            const generationConfig ={
                temperature: 0.7,
                topP: 0.9,
                topK: 40,
                maxOutputTokens: 8192,
                responseMimeType: "text/plain"
            };

            const generateText = async (req: any, res: any  )=>{
 
            }


        }catch(err){
            console.log(err)
        }

    }
}
 export default new ChatController();