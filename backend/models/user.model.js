import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["Athlete","Coach","Organization","Doctor"],
        default:"Athlete"
    },
    lastlogin:{
        type:Date,
        default:Date.now
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isOnboarded:{
        type:Boolean,
        default:false
    },
    verificationToken:{
        type:String
    },
    verificationTokenExpires:{
        type:Date
    },
    
});

export const User=mongoose.model("User",userSchema);
