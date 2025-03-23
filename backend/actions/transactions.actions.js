import { Transaction } from "../models/transactions.model.js";
import { Account } from "../models/accounts.model.js";
import { User } from "../models/user.model.js";
import aj from "../utils/arcjet.js";
import request from '@arcjet/node'
export const createTransaction=async(req,res)=>{
    
    try{
     const data=req.body;
     
    const userId=req.userId;
if(!userId){
    return res.status(400).json({error:"no user id"});
}
const reqdata=await request();
const decision=await aj.protect(reqdata,{
    userId,
    requested:1
})
if(decision.isDenied()){
    if(decision.reason.isRateLimit()){
        const {remaining,reset}=decision.reason
        console.error({code:"RATE_LIMIT_EXCEEDED",
            details:{
                remaining,
                resetInSeconds:reset
            }
        })
        return res.status(400).json({error:"too many request try again later"})
    }
    return res.status(400).json({error:"request is blocked"})
}
const user=await User.findById(userId);
if(!user){
    return res.status(400).json({error:"no user found"});
}
const accountId=data.accountId;
const account=await Account.findOne({_id:accountId,userId:userId});

if(!account){
    return res.status(400).json({error:"no account found"})
}

await Transaction.create({
    ...data,
    amount:parseFloat(data.amount),
    accountId:accountId,
    userId:userId,
    nextRecurringDate: data.isRecurring?nextRecurringDate(data.recurringInterval):null
})
await Transaction.save();
let updatedbalance=0
if(data.type==="income"){
updatedbalance=parseFloat(data.amount+account.balance)
}
else{
updatedbalance=parseFloat(account.balance-data.amount)
}
await Account.updateOne({_id:accountId},{balance:updatedbalance})
res.json({success:true}) 
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

const nextRecurringDate=(data)=>{
    const date=new Date();
if(data=="daily"){
const newdate=new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()+1
);

}
else if(data=="weekly"){
const newdata=new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()+7
)
}
else if(data=="monthly"){
const newdate=new Date(
    date.getFullYear(),
    date.getMonth()+1,
    date.getDate()
)
}
else{
const newdate=new Date(
    date.getFullYear()+1 ,
    date.getMonth(),
    date.getDate()
)
}
return newdate;
}
export const getTransaction=async(req,res)=>{
    try{
const userId=req.userId
if(!userId){
    return res.status(400).json({error:"no userid provided"})
}
const user=await User.findById(userId);
if(!user){
    return res.status(400).json({error:"no user found"})
}
const transactionid=req.body.transactionId;
const transaction=await Transaction.findOne({_id:transactionid,userId:userId});
if(!transaction){
    return res.status(400).json({error:"no transaction found"})
}
res.send(transaction);
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}
export const updateTransaction=async(req,res)=>{
    try{
        const userId=req.userId
        const newamount=parseFloat(req.body.amount);
        if(!userId){
            return res.status(400).json({error:"no userid provided"})
        }
        const user=await User.findById(userId);
        if(!user){
           return res.status(400).json({error:"no user found"})
        }
        const transactionid=req.body.transactionId;
        const originaltransaction=await Transaction.findOne({_id:transactionid,userId:userId});
        if(!originaltransaction){
           return res.status(400).json({error:"no transaction found"})
        }
        let oldchange=0;
        let newchange=0;
if(originaltransaction.type==="expense"){
oldchange=-originaltransaction.amount;
newchange=-newamount
}
else {
    oldchange=originaltransaction.amount;
    newchange=newamount
}
const change=newchange-oldchange;
await Transaction.updateOne({_id:transactionid},{amount:newamount});
const account=await Account.updateOne({_id:originaltransaction.accountId,userId:userId},{$inc:{balance:change}});
res.json({success:true});
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}