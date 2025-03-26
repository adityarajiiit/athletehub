import { Fitbit } from "../models/fitbit.model.js";
import { FitbitSession } from "../models/fitbitsession.model.js";
import { generateCodeVerifier,generateState,getFitbitUrl,exchangeCodeForToken,getFitbitData } from "../utils/fitbit.js";

export const initiateAuth=async(req,res)=>{
    try{
        const userId=req.userId;
        const codeVerifier=generateCodeVerifier();
        const state=generateState();
        await FitbitSession.create({userId,codeVerifier,state});
        const url=await getFitbitUrl(codeVerifier,state);
        res.json({url});
    }
    catch(error){
        console.error("Error in initiating auth:",error);
        res.status(500).json({message:error.message});
    }
}

export const handleCallback=async(req,res)=>{
    try{
        const {code,state}=req.query;
        const userId=req.userId;
        if(!code||!state){
            return res.json({message:"Invalid request"});
        }
        const session=await FitbitSession.findOne({userId,state});
        if(!session){
            return res.json({message:"Invalid or expired"})
        }
        const tokenData=await exchangeCodeForToken(code,session.codeVerifier);
        await Fitbit.findOneAndUpdate(
            {userId},
            {
                userId,
                accessToken:tokenData.accessToken,
                refreshToken:tokenData.refreshToken,
                expiresIn:tokenData.expiresIn,
                scope:tokenData.scope,
                fitbitUserId:tokenData.userId
            },
            {upsert:true,new:true}
        )
        await FitbitSession.deleteOne({_id:session._id});
        res.json({message:"Fitbit connected successfully"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

export const getConnectionStatus=async(req,res)=>{
    try{
        const userId=req.userId;
        const connection=await Fitbit.findOne({userId});
        if(!connection){
            return res.json({connected:false,lastSync:null,scopes:[]});
        }
        res.json({connected:true,lastSync:connection.lastSync,scopes:connection.scope.split(' ')});

    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

export const disconnectyourFitbit=async(req,res)=>{
    try{
        const userId=req.userId;
        await Fitbit.deleteOne({userId});
        res.json({message:"Fitbit disconnected successfully"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

export const getFitbitProfile=async(req,res)=>{
    try{
const userId=req.userId;
const profile=await getFitbitData(userId,'profile.json');
res.json(profile);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}