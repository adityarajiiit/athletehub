import { Illness } from "../models/illness.model.js";
import { Injury } from "../models/injury.model.js";
import { User } from "../models/user.model.js";

export const createInjury=async(req,res)=>{
    try{
const userId=req.userId;
const injury=await Injury.create({userId,...req.body});

res.json({message:"Injury created successfully"});
}
    
    catch(error){
        res.status(500).json({message:error.message});
    }
}
export const createIllness=async(req,res)=>{
    try{
        const userId=req.userId;
        const illness=await Illness.create({userId,...req.body});
        res.json({message:"Illness created successfully"});
        }
        catch(error){
            res.status(500).json({message:error.message});
        }
    }