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
    export const getInjury=async(req,res)=>{
        try{
    const userid=req.userId
    const injury=req.body.injuryId
    if(!userid){
        return res.status(400).json({message:"no user id"})
    }
    const user=await User.findById(userid)

    if(!user){
        return res.status(400).json({message:"no user exists"})
    }
    const injuries=await Injury.findById(injury)
res.send(injuries)
        }
        catch(error){
            res.status(500).json({message:error.message})
        }
    } 
export const getIllness=async(req,res)=>{
    try{
        const userid=req.userId
        const illnessid=req.body.illnessId
        if(!userid){
            return res.status(400).json({message:"no user id"})
        }
        const user=await User.findById(userid)
        if(!user){
            return res.status(400).json({message:"no user exists"})
        }
const illness=await Illness.findById(illnessid)
res.send(illness)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}       
