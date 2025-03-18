import mongoose from "mongoose"
const fitbitSessionSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    codeVerifier:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    expiresAt:{
        type:Date,
        default:()=>{
            return new Date(Date.now()+10*60*1000)
        }
    }
},{timestamps:true})
fitbitSessionSchema.index({expiresAt:1},{expireAfterSeconds:0});
export const FitbitSession=mongoose.model("FitbitSession",fitbitSessionSchema);