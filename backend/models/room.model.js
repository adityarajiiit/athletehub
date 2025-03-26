import mongoose from "mongoose";
const RoomSchema=new mongoose.Schema({
    userId1:{
        type:mongoose.Schema.Types.ObjectId,
                ref:"User",
                required:true
    },
    userId2:{
        type:mongoose.Schema.Types.ObjectId,
                ref:"User",
                required:true
    },
    room:{
        type:String,
        required:true
    }

})
export const Room=mongoose.model("Room",RoomSchema)