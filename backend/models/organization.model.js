import mongoose from 'mongoose'
const organizationSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    address:{
        area:String,
        city:String,
        pincode:Number,
        state:String,
        country:{type:String,default:"India"}
    },
    contact:{
        email:String,
        phone:String
    },
    website:String,
    sports:[String],
    coaches:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Coach"
    }],
    athletes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Athlete"
    }],
    doctors:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor"
    }]
})
export const Organization=mongoose.model("Organization",organizationSchema)
    
