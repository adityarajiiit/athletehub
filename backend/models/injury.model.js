import mongoose from "mongoose";
import { injuryData,sportActivities } from "../injurydata.js";

const InjurySchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    type:{
        enum:["Acute","Overuse"],
        type:String,
        required
    },
    bodyPart:{
type:String,
enum:Object.keys(injuryData),
required:true
    },
    tissueType:{
        type:String,
        required:true
    },
    InjuryName:{
        type:String,
        required:true
    },
    levelofPain:{
        type:Number,
        min:1,
        max:10,
        required:true
    },
    newInjury:{
        type:Boolean,
        required:true
    },
    Priority:{
        enum:["High","Medium","Low"],
        type:String,
        required:true
    },
    sport:{
        type:String,
        enum:Object.keys(sportActivities),
        required:true
    },
    activity:{
        type:String,
        required:true
    },
    mechanism:{
        type:String,
        required:true
    },
    dateofInjury:{
        type:Date,
        default:Date.now()
    },
    trainingstatus:{
enum:["Full participation","Reduced participation","No participation"],
type:String,
    },
    healthproblemresolved:{
        type:Date,
        default:Date.now()
    },
    trainingrestriction:{
        type:String
    },
    details:{
        type:String
    },
    personnalprogram:{
        type:String
    },
    additionalinformation:{
        type:String
    },
})


export const Injury=mongoose.model("Injury",InjurySchema);

