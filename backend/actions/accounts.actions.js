import {User} from'../models/user.model.js'
import { Account } from '../models/accounts.model.js';
import { Transaction } from '../models/transactions.model.js';
export const createAccount=async(req,res)=>{
    try{
const userId=req.userId;
const data=req.body;
if(!userId){
return res.status(400).json({error:"no user id"});
}
const user=await User.findById(userId);
if(!user){
    return res.status(400).json({error:"no user found"});
}
const existingaccount=await Account.find({userId});
let shouldbedefault=true;
if(existingaccount.length>0){
    shouldbedefault=data.isDefault;
}
if(shouldbedefault){
    await Account.updateMany({userId},{isDefault:false});

}
const account=new Account({
    ...data,
    balance:parseFloat(data.balance),
    userId:userId,
isDefault:shouldbedefault
});
await account.save();
res.json({account:account,success:true})
    }
    catch{
res.status(500).json({error:error.message})
    }
}
export const getAccounts=async(req,res)=>{
try{
const userId=req.userId;
if(!userId){
    return res.status(400).json({error:"no user id"});
}
const user=await User.findById(userId);
if(!user){
    return res.status(400).json({error:"no user found"});
}
const accounts=await Account.find({userId});

res.json({accounts:accounts,success:true})
}
catch(error){
    res.status(500).json({error:error.message})
} 
}
export const setDefaultAccount=async(req,res)=>{
    try{
const userId=req.userId;
const accountid=req.accountId;
if(!userId){
    return res.status(400).json({error:"no user id"})
}
const user=await User.findById(userId);
if(!user){
    return res.status(400).json({error:"no user found"})
}
const accounts=await Account.find({userId})
await Account.updateMany({userId},{isDefault:false})
await Account.updateOne({_id:accountid},{isDefault:true})
res.json({success:true})

    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}
export const getAccountsTransactions=async(req,res)=>{
    try{
const userId=req.userId;
const accountId=req.accountId
if(!userId){
    return res.status(400).json({error:"no user id"})
}
const user=await User.findById(userId);
if(!user){
    return res.status(400).json({error:"no user found"})
}

const account=await Account.findOne({_id:accountId,userId:userId});
if(!account){
    return res.status(400).json({error:"no account found"})
    }

    const transactions=await Transaction.find({accountId:accountId}).sort({createdAt:-1});
    
     res.json({transactions:transactions,success:true})
}
    catch(error){
        res.status(500).json({error:error.message})
    }
}
export const bulkTransactionsDelete=async(req,res)=>{
    try{
const userId=req.userId;
const accountId=req.accountId;
const transactionIds=req.body.transactionIds;
if(!userId){
    return res.status(400).json({error:"no user id"})
}
const user=await User.findById(userId);
if(!user){
    return res.status(400).json({error:"no user found"})
}
const account=await Account.findOne({_id:accountId,userId:userId});
if(!account){
    return res.status(400).json({error:"no account found"})
}
const transactions=await Transaction.find({_id:{$in:transactionIds},accountId:accountId});
if(transactions.length>0){
    await Transaction.deleteMany({_id:{$in:transactionIds},accountId:accountId,});
    const balanceafterreducing=transactions.reduce((acc,transaction)=>{
        if(transaction.type==="income"){
            return acc-transaction.amount;
        }
        else {
            return acc+transaction.amount;
        }
    },0)
    const newbalance=account.balance+balanceafterreducing
    await Account.updateOne({_id:accountId},{balance:newbalance});
    res.json({success:true})
}
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}