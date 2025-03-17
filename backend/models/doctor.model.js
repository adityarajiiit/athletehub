import mongoose from "mongoose";
import { illnessesByCategory } from "../constants/injurydata.js";
const DoctorSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    specialization:{
        type:String,
        enum:Object.keys(illnessesByCategory),
        required:true
    },
    qualification:{
        degree:String,
        college:String,
        year:Number
    },
    experience:{
        type:Number
    },
    organizationId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Organization",
        required:true
    },
    availability:{
        days:[String],
        startTime:String,
        endTime:String
    },
    appointments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Appointment"
    }]
})
export const Doctor=mongoose.model("Doctor",DoctorSchema)