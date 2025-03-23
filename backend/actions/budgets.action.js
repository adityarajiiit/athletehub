import { User } from "../models/user.model.js"
import { Account } from "../models/accounts.model.js"
import {Budget} from "../models/budgets.model.js"
import {Transaction} from "../models/transactions.model.js"
export const getCurrentBudget=async(req,res)=>{
    try{const userId=req.userId;
        const accountid=req.accountId;
    if(!userId){
        return res.status(400).json({error:"no user id"});
    }
    const user=await User.findById(userId);
    if(!user){
        return res.status(400).json({error:"no user found"});
    }
    if(!accountid){
        return res.status(400).json({error:"no account id"})
    }
    const budget=await Budget.findOne({userId})
    const start=new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        1
    )
    const end=new Date(
        new Date().getFullYear(),
        new Date().getMonth()+1,
        0
    )
    const transactions=await Transaction.find({userId,createdAt:{$gte:start,$lt:end},type:"expense",accountId:accountid})
    let total=0;
    transactions.forEach(transaction=>{
        total+=transaction.amount;
    })
    res.json({budget:budget,success:true,expenses:total})
    }
    catch(error){
res.status(500).json({error:error.message})
    }
}

export const updateBudget=async(req,res)=>{
    try{
const userId=req.userId;
const amount=req.body.amount;
if(!userId){
    return res.status(400).json({error:"no user id"});
}
const user=await User.findById(userId);
if(!user){
    return res.status(400).json({error:"no user found"});
}
const budget=await Budget.findOne({userId});
if(!budget){
    await Budget.create({userId,amount})
}
else{
    await Budget.updateOne({userId},{amount});
}
res.json({success:true});
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}