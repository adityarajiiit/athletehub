import nodemailer from 'nodemailer';
import dotenv from 'dotenv'
dotenv.config();
var transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });
  
export const sendVerificationEmail=async(email,verificationToken)=>{
    try{
        const mailOptions={
            from:'Athlete Hub <0405.adityaraj@gmail.com>',
            to:email,
            subject:"Email verification",
            text:`Your verification link is http://localhost:5000/api/auth/verify-email/${verificationToken}`
        };
        const result=await transport.sendMail(mailOptions);
        console.log("Email sent:",result);
    }  
    catch(error){
        console.error(error.message);
    }
}

export const sendBudgetReminder=async(data,email)=>{
    try{
        const mailOptions={
            from:'Athlete Hub <0405.adityaraj@gmail.com>',
            to:email,
            subject:"Budget alert",
            data:data
        }

    }
    catch(error){
        console.log(error.message)
    }
}
export const sendMonthlyReport=async(data,email)=>{
    try{
        const mailOptions={
            from:'Athlete Hub <0405.adityaraj@gmail.com>',
            to:email,
            subject:"Your Monthly Report",
            data:data
        }

    }
    catch(error){
        console.log(error.message)
    }
}