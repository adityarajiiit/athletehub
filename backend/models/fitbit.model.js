import mongoose from "mongoose"

const fitbitSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    accessToken:{
        type:String,
        required:true
    },
    refreshToken:{
        type:String,
        required:true
    },
    expiresIn:{
        type:Date,
        required:true
    },
    lastSync:{
        type:Date,
        default:Date.now()
    },
    scope:{
        type:String,
        required:true
    },
    fitbitUserId:{
        type:String,
        required:true
    }

})

export const Fitbit=mongoose.model("Fitbit",fitbitSchema);