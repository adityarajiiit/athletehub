import { User } from "../models/user.model.js";
import {Athlete} from "../models/athlete.model.js";
import {Coach} from "../models/coach.model.js";
import {Doctor} from "../models/doctor.model.js";
import {Organization} from "../models/organization.model.js";
export const isOnboarded=async(req,res)=>{
    try{
        const userId=req.userId;
        const user=await User.findById(userId);
        if(!user){
            return res.json({message:"User not found"});
        }
        return res.json({isOnboarded:user.isOnboarded,role:user.role});

    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}
export const athleteOnboarding=async(req,res)=>{
    try{
const userId=req.userId;
const user=await User.findById(userId);
if(!user){
    return res.json({message:"USer not found"});
}
if(user.role!=="Athlete"){
    return res.json({message:"User is not an athlete"});
    }
    if(user.isOnboarded){
        return res.json({message:"User is already onboarded"});
    } 
    const athlete=new Athlete({
        userId:userId,
        height:req.body.height,
        weight:req.body.weight,
        dateofbirth:req.body.dateofbirth,
        achievements:req.body.achievements,
        sports:req.body.sports,
        coachId:req.body.coachId,
        organizationId:req.body.organizationId
    });
    await athlete.save();
    
        const organization=await Organization.findById(req.body.organizationId);
if(!organization){
    return res.json({message:"Organization not found"});
}
organization.athletes.push(athlete._id);
await organization.save();
    const coach=await Coach.findById(req.body.coachId);
    if(!coach){
        return res.json({message:"Coach not found"});
    }
    coach.athletes.push(athlete._id);
    await coach.save();
    user.isOnboarded=true;
    await user.save();
    return res.json({message:"Athlete onboarded successfully"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}
export const coachOnboarding=async(req,res)=>{
    try{
const userId=req.userId;
const user=await User.findById(userId);
if(!user){
    return res.json({message:"User not found"});
}
if(user.role!=="Coach"){
    return res.json({message:"User is not a coach"});
    }
    if(user.isOnboarded){
        return res.json({message:"User is already onboarded"});
    }
    const coach=new Coach({
        userId:userId,
specialization:req.body.specialization,
experience:req.body.experience,
organizationId:req.body.organizationId,
availability:req.body.availability
    })
    await coach.save();
    user.isOnboarded=true;
    await user.save();
    const organization=await Organization.findById(req.body.organizationId);
    if(!organization){
        return res.json({message:"Organization not found"});
    }
    organization.coaches.push(coach._id);
    await organization.save();
    return res.json({message:"Coach onboarded successfully"});
    }

    catch(error){
        res.status(500).json({message:error.message});
    }
}
export const doctorOnboarding=async(req,res)=>{
    try{
const userId=req.userId;
const user=await User.findById(userId);
if(!user){
    return res.json({message:"User not found"});
}
if(user.role!=="Doctor"){
    return res.json({message:"User is not a doctor"});
}
if(user.isOnboarded){
    return res.json({message:"User is already onboarded"});
}
const doctor=new Doctor({
userId:userId,
specialization:req.body.specialization,
qualification:req.body.qualification,
experience:req.body.experience,
organizationId:req.body.organizationId,
availability:req.body.availability,
    })
    await doctor.save();
    const organization=await Organization.findById(req.body.organizationId);
    if(!organization){
        return res.json({message:"Organization not found"});
    }
    organization.doctors.push(doctor._id);
    await organization.save();
    user.isOnboarded=true;

    await user.save();
    return res.json({message:"Doctor onboarded successfully"});
}
    catch(error){
        res.status(500).json({message:error.message});
    }
}
export const organizationOnboarding=async(req,res)=>{
    try{
const userId=req.userId;
const user=await User.findById(userId);
if(!user){
    return res.json({message:"User not found"});
}
if(user.role!=="Organization"){
    return res.json({message:"User is not an organization"});
    }
    if(user.isOnboarded){
        return res.json({message:"User is already onboarded"});
    }
    const organization=new Organization({
        userId:userId,
        name:req.body.name,
        description:req.body.description,
        address:{
            area:req.body.area,
            city:req.body.city,
            pincode:req.body.pincode,
            state:req.body.state,
            country:req.body.country
        },
        contact:{
            email:req.body.email,
            phone:req.body.phone
        },
        website:req.body.website,
        sports:req.body.sports,

    })
    await organization.save();
    user.isOnboarded=true;
    await user.save();
    return res.json({message:"Organization onboarded successfully"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}