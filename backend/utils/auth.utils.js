import { User } from "../models/user.model.js";
export const getName=async(userId)=>{
    try{
const user=await User.findById(userId)
if(!user){
    return null
}
return user.name
    }
    catch(error){
        console.log(error.message)
    }
}