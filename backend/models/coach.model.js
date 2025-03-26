import mongoose from 'mongoose'
import {coachSpecializations} from '../constants/injurydata.js'
const CoachSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    specialization:{
        type:String,
        enum:coachSpecializations,
        required:true
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
athletes:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Athlete"
}]
})
export const Coach=mongoose.model("Coach",CoachSchema)