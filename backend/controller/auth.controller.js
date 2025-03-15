import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { generateVerificationToken } from "../utils/generateVerificationToken.js";
import {generateTokenandSetCookie} from "../utils/generateTokenandSetCookie.js";
import { sendVerificationEmail } from "../utils/emails.js";
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
res.status(201).json({message:"User created successfully"});
    }
    catch(error){
        console.error("Signup error:",error);
        res.status(500).json({error:"Server error",details:error.message});
    }
}
export const verifyEmail=async(req,res)=>{
    const {code}=req.body;
    try{
        const user=await User.findOne({
            verificationToken:code,
            verificationTokenExpires:{$gt:Date.now()}
        })
        if(!user){
            return res.status(400).json({error:"Invalid or expired verification token"});
        }
        user.isVerified=true;
        user.verificationToken=undefined;
        user.verificationTokenExpires=undefined;
        await user.save();
    }
    catch(error){
        res.status(400).json({error:"Server error",error});
    }
}
export const login=async(req,res)=>{
    const {email,password}=req.body;
try{
const user=await User.findOne({email});
if(!user){
    return res.status(400).json({error:"Invalid credentials"});
}
const isPasswordValid=await bcryptjs.compare(password,user.password);
if(!isPasswordValid){
    return res.status(400).json({error:"Invalid credentials"}); 
}
generateTokenandSetCookie(res,user._id);
user.lastlogin=Date.now();
await user.save();
console.log(user)
res.status(200).json({message:"Logged in successfully"});
}catch(error){
    res.status(400).json({error:"Server error",error});
}
}
export const logout=async(req,res)=>{
    res.clearCookie("token").json({message:"Logged out successfully"});
}
export const checkAuth=async(req,res)=>{
    try{
const user=await User.findById(req.userId).select("-password");
if(!user){
    return res.status(401).json({error:"Unauthorized"});
}
res.status(200).json({user});
    }
    catch(error){
        res.status(400).json({error:"Server error",error});
    }
}
