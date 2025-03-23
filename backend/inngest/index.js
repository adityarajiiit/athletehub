import { Inngest } from "inngest";
import { Budget } from "../models/budgets.model.js";
import { User } from "../models/user.model.js";
import { Transaction } from "../models/transactions.model.js";
import { Account } from "../models/accounts.model.js";
import { sendBudgetReminder,sendMonthlyReport } from "../utils/emails.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import e from "express";
import dotenv from "dotenv";
dotenv.config();
export const inngest=new Inngest({id:"athlete",name:"Athlete",retryFunction:async(attempt)=>({
delay:Math.pow(2,attempt)*1000,
maxAttempts:52
})
})
const budgetReminder=inngest.createFunction(
    {name:"Check Budget Reminder"},
    {cron:"0 */6 * * *"},
    async({step})=>{
        const allbudgets=await step.run("fetch-budget",async()=>{
            const budgets=await Budget.find();
            return budgets;
        });
for(const budget of allbudgets){
    const user=await User.findById(budget.userId);
    const email=user.email;
    const account=await Account.findOne({userId:budget.userId,isDefault:true});
    await step.run(`check-budget-${budget.id}`,async()=>{
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
const expenses=await Transaction.find({userId:budget.userId,createdAt:{$gte:start,$lte:end},type:"expense",accountId:account._id});
let total=0;
expenses.forEach((expense)=>{
if(expense.amount){
    total+=expense.amount;
}})

const percentageused=(total/budget.amount)*100;
if(percentageused>80&&(!budget.lastAlertSentAt||isnewmonth(new Date(budget.lastAlertSentAt),new Date()))){
await Budget.updateOne({_id:budget._id},{lastAlertSentAt:new Date()}
);
const data={
    budget:budget.amount,
    expenses:total,
    percentage:percentageused
}
await sendBudgetReminder(data,email);

        }
    });
    
    }
}
            )
        
    


const isnewmonth=(last,current)=>{
    if(last.getFullYear()!==current.getFullYear()||last.getMonth()!==current.getMonth()){
        return true;
    }
    return false
}
export const triggerRecurringTransaction=inngest.createFunction(
    {name:"Recurring Transaction",id:"trigger recurring transaction"},
    {cron:"0 0 * * *"},
    async({step})=>{
        const recurringtransactions=await step.run("fetch-recurring-transactions",
            async()=>{
                await Transaction.find({isRecurring:true,status:"completed",$or:[{nextRecurringDate:{$lte:new Date()}},{lastProcessed:null}]})
                return recurringtransactions;
            }
        )
        if(recurringtransactions.length>0){
            const events=recurringtransactions.map((transaction)=>({
                name:"transaction.recurring.process",
                data:{transactionId:transaction.id,userId:transaction.userId},
            }))
            await inngest.send(events);
        }
        return {triggered:recurringtransactions.length};
    }

)

export const processingRecurringTransaction=inngest.createFunction({
    id:"process-recurring-transaction",
    throttle:{
        limit:10,
        period:"1m",
        key:"event.data.userId"
    },
},{
        event:"transaction.recurring.process"
    },
async({event,step})=>{
    if(!event?.data?.transactionId||!event?.data?.userId){
        console.error("Invalid event data:",event);
        return {error:"Missing event data"};
    }
    await step.run("process-transaction",async()=>{
        const transaction=await Transaction.findOne({_id:event.data.transactionId,userId:event.data.userId,})
        if(!transaction||!isTransactionDue(transaction)){
            return;
        }
        await Transaction.create({userId:transaction.userId,accountId:transaction.accountId,type:transaction.type,amount:transaction.amount,description:`${transaction.description} (Recurring)`,
        date:new Date(),category:transaction.category,isRecurring:false})
        let newbalance=0
    if(transaction.type==="expense"){
        newbalance=-transaction.amount
    }
    else {
        newbalance=transaction.amount
    }
    await Account.updateOne({
        _id: transaction.accountId
    }, {$inc:{balance:newbalance}});
    await Transaction.updateOne({_id:transaction.id},{lastProcessed:new Date(),nextRecurringDate:calculatenextrecurringDate(new Date(),transaction.recurringInterval)})
    })
    
}
)
const isTransactionDue=(transaction)=>{
    if(!transaction.lastProcessed){
        return true;
    }
    const today=new Date()
    const nextdue=new Date(transaction.nextRecurringDate);
    return nextdue<=today;
}
const calculatenextrecurringDate=(start,interval)=>{
    const date=new Date(start);
    if(interval=="daily"){
    const newdate=new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()+1
    );
    
    }
    else if(interval=="weekly"){
    const newdata=new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()+7
    )
    }
    else if(interval=="monthly"){
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

export const generateMonthlyReports=inngest.createFunction(
{id:"generate-monthly-reports",name:"Generate Monthly Reports"},
{cron:"0 0 1 * *"},
async({step})=>{
const users=await step.run("fetch-users",async()=>{
    return await User.find();
})
for(const user of users){
    await step.run(`generate-report-${user.id}`,async()=>{
        const lastmonth=new Date()
        lastmonth.setMonth(lastmonth.getMonth-1)
        const stats=await getmonthlyStats(user.id,lastmonth)
        const monthname=lastmonth.toLocaleString("default",{
            month:"long"
        })
const analysis=await getfinancialanalysis(stats,monthname)
const data={stats,analysis,monthname}

await sendMonthlyReport(user.email,data);
    })

}
}
);
const getmonthlyStats=async(userId,date)=>{
    const start=new Date(date.getFullYear(),date.getMonth(),1);
    const end=new Date(date.getFullYear(),date.getMonth()+1,0);
    const transactions=await Transaction.find({userId,date:{$gte:start,$lte:end}})
    const monthlyinsight=transactions.reduce((acc,transaction)=>{
        if(transaction.type=="expense"){
        if(!acc.category[transaction.category]){
            acc.category[transaction.category]={expense:transaction.amount}
        }
        else {
            acc.category[transaction.category].expense+=transaction.amount
            acc.expense+=transaction.amount
        }
        }
        else {
            acc.income+=transaction.amount
        }
       return acc;
    },{
        expense:0,
        income:0,
        category:{},
        transactions:transactions.length,
    })
    return monthlyinsight;
}
const getfinancialanalysis=async(stats,monthname)=>{
    try{
const genAI=new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model=genAI.getGenerativeModel({model:"gemini-2.0-flash"});
const prompt=`
{
"expense": 2260,
"income": 5000,
"category": {
"Housing": {
"expense": 1200
},
"Groceries": {
"expense": 550
},
"Dining": {
"expense": 85
},
"Transport": {
"expense": 60
},
"Utilities": {
"expense": 120
},
"Entertainment": {
"expense": 45
},
"Clothing": {
"expense": 200
}
},
"transactions": 10
} this is the example of stats that you will be receiving from my side your task is to generate a monthly analysis and return as 5 strings in a json array ["string1","string2","string3","string4","string5"] if data sent to you is empty object then return a  empty array i have gitven you a return format you have to give output in that format only you have to just output me 5 strings array and nothing else`;
const result=await model.generateContent([
    {
        inlineData: {
            data:stats,
            mimeType:"application/json",
        },
    },
    prompt,
],{
    generationConfig: {
        temperature:1,
        top_p:0.95,
        top_k:40,
        max_output_tokens:8192,
        response_mime_type:"application/json"
    }
});

return result.response.text();
    }
    catch{
        console.log(error.message)
    }
}
export const functions=[budgetReminder,triggerRecurringTransaction,processingRecurringTransaction,generateMonthlyReports]