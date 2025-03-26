import mongoose from "mongoose";
const BudgetSchema=new mongoose.Schema({
    amount:{
        type:Number,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    lastAlertSentAt:{
        type:Date,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
});
export const Budget=mongoose.model("Budget",BudgetSchema);