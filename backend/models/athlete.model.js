import mongoose from 'mongoose'
import {coachSpecializations} from '../constants/injurydata.js'
const AthleteSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    height:{
        type:Number,
        required:true
    },
    weight:{
        type:Number,
        required:true
    },
    dateofbirth:{
        type:Date,
        required:true
    },
achievements:[{
    competition:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    medal:{
        type:String,
        enum:["Gold","Silver","Bronze"],
        required:true
    }
}],
    sports:{
        type:[String],
        enum: coachSpecializations,
        required:true
    },
    injuries:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"Injury"
    },
    illnesses:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"Illness"
    },
    coachId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Coach"
    },
    organizationId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Organization"
    }
})
export const Athlete=mongoose.model("Athlete",AthleteSchema)

