import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { generateVerificationToken } from "../utils/generateVerificationToken.js";
import {generateTokenandSetCookie} from "../utils/generateTokenandSetCookie.js";
import { sendVerificationEmail } from "../utils/emails.js";
import { Message } from "../models/message.model.js";
import { Room } from "../models/room.model.js";
import { getName,getRole } from "../utils/auth.utils.js";
import { StepOpCode } from "inngest/types";
import {Athlete} from "../models/athlete.model.js"
import { Injury } from "../models/injury.model.js";
export const signup=async(req,res)=>{
    const {email,password,name,role}=req.body;
    try{
        if(!email||!password||!name||!role){
            return res.status(400).json({error:"All fields are required"});
        }
        const user=await User.findOne({email});
        if(user){
            console.log(user)
            return res.status(400).json({error:"User already exists"});
        }
        const hashedPassword=await bcryptjs.hash(password,10);
        const verificationToken=generateVerificationToken();
        const newUser=new User({
            email,
            password:hashedPassword,
            name,
            role,
            verificationToken,
            verificationTokenExpires:Date.now()+3600000
        });await newUser.save();
       generateTokenandSetCookie(res,newUser._id);
       await sendVerificationEmail(newUser.email,verificationToken);
res.status(200).json({message:"User created successfully"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}
export const verifyEmail=async(req,res)=>{
    const {token}=req.params;
    try{
        const user=await User.findOne({
            verificationToken:token,
            verificationTokenExpires:{$gt:Date.now()}
        })

        if(!user){
            return res.status(400).send('<h1>Invalid or expired link</h1>');
        }
        user.isVerified=true;
        user.verificationToken=undefined;
        user.verificationTokenExpires=undefined;
        await user.save();
        return res.status(200).send('<h1>Email verified successfully</h1>');
    }
    catch(error){
        
        res.status(500).json({message:error.message});
    }
}
export const login=async(req,res)=>{
    const {email,password}=req.body;
try{
const user=await User.findOne({email});
if(!user){
    return res.json({error:"Invalid credentials"});
}
if(!user.isVerified){
    return res.json({error:"Please verify your email to login"});
}
const isPasswordValid=await bcryptjs.compare(password,user.password);
if(!isPasswordValid){
    return res.json({error:"Invalid credentials"}); 
}
generateTokenandSetCookie(res,user._id);
user.lastlogin=Date.now();
await user.save();
console.log(user)
res.json({message:"Logged in successfully"});
}catch(error){
    res.status(500).json({message:error.message});
}
}
export const logout=async(req,res)=>{
    res.clearCookie("token").json({message:"Logged out successfully"});
}
export const checkAuth=async(req,res)=>{
    try{
const user=await User.findById(req.userId).select("-password");
if(!user){
    return res.json({error:"Unauthorized"});
}
res.json({user});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}
export const verify=async(req,res)=>{
    try{
        const user=await User.findById(req.userId);
        if(!user){
            return res.json({success:false});
        }
        if(!user.isVerified){
            return res.json({success:false});
        }
        res.json({success:true,name:user.name,category:user.role});
    }
    catch(error){
    res.status(500).json({message:error.message});
}
}
export const getPreviousChats=async(req,res)=>{
    try{
const userId=req.userId;
console.log(userId)
const roomId=req.params.id
console.log(roomId)
if(!userId){
return res.status(400).json({error:"no user id"});
}
const user=await User.findById(userId);
if(!user){
    return res.status(400).json({error:"no user found"});
}
const messages=await Message.find({room:roomId}).sort({createdAt:1});
const allmessages=await Promise.all(messages.map(async message=>({
    message:message.message,
    username:await getName(message.userId),
})))
console.log(allmessages);
res.json({messages:allmessages});
    }
    catch(error){
res.status(500).json({message:error.message});
    }
}
export const getRooms=async(req,res)=>{
    try{
const userid=req.userId;
if(!userid){
   return res.status(400).json({message:"no user id"})
}
const user=await User.findById(userid);
if(!user){
   return res.status(400).json({message:"no user exists"})
}

const rooms=await Room.find({$or:[{userId1:userid},{userId2:userid}]});
console.log("room",rooms)
const allrooms =await Promise.all(rooms.map(async room=>({
    roomId:room.room,
    username:room.userId1.toString()===userid?await getName(room.userId2):await getName(room.userId1),
    role:room.userId1.toString()===userid?await getRole(room.userId2):await getRole(room.userId1),
    myusername:room.userId1.toString()===userid?await getName(room.userId1):await getName(room.userId2)
})));

console.log(allrooms);
res.send(allrooms);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
export const createRooms=async(req,res)=>{
    try{
        const userid=req.userId;
        const userId2=req.body.userid;
        console.log(userId2,"coach")
        if(!userid){
            return res.status(400).json({message:"no user id"})
        }
        if(!userId2){
            return res.status(400).json({message:"no user id"})
        }
        const user1=await User.findById(userid);
        if(!user1){
            return res.status(400).json({message:"no user exists"})
        }
        const user2=await User.findById(userId2);
        if(!user2){
            return res.status(400).json({message:"no user exists"})
        }
        
const room=await Room.findOne({$or:[{userId1:userid,userId2:userId2},{userId1:userId2,userId2:userid}]});

if(room){
    return res.json({roomId:room.room});
}

const newroom =await Room.create({userId1:userid, userId2:userId2, room:generateVerificationToken()});
res.json({roomId:newroom.room});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}
export const getAllCoaches=async(req,res)=>{
try{
const userid=req.userId;
if(!userid){
   return res.status(400).json({message:"no user id"})
}
const user=await User.findById(userid);
if(!user){
   return res.status(400).json({message:"no user exists"})
}
const coaches=await User.find({role:"Coach"});
const allcoaches=coaches.map(coach=>({
    id:coach._id,
    username:coach.name,
    specialization:"Advanced",
    description:"Real Coach",
    sport:"Cricket"
}));
res.send(allcoaches);    
}
catch(error){
    res.status(500).json({message:error.message});
}
}    
export const getAllAthletes=async(req,res)=>{
    try{
const userid=req.userId;
if(!userid){
    return res.status(400).json({message:"no user id"})
}
const user=await User.findById(userid);
if(!user){
    return res.status(400).json({message:"no user exists"})
}
const athletes=await User.find({role:"Athlete"})
const allathletes=athletes.map(athlete=>({
    id:athlete._id,
    username:athlete.name,
    specialization:"Intermediate",
    description:"Real Athlete",
    sport:"Cricket"
}))
res.send(allathletes)
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}
export const getAllDoctors=async(req,res)=>{
    try{
const userid=req.userId;
if(!userid){
    return res.status(400).json({message:"no user id"})
}
const user=await User.findById(userid);
if(!user){
    return res.status(400).json({message:"no user exists"})
}
const doctors=await User.find({role:"Doctor"})
const alldoctors=doctors.map(doctor=>({
    id:doctor._id,
    username:doctor.name,
    specialization:"CardioLogist",
    experience:11
}))
res.send(alldoctors)
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}
