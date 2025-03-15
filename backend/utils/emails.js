import nodemailer from 'nodemailer';

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
            from:'Athlete Hub <noreply@trial-z86org8p00zlew13.mlsender.net>',
            to:email,
            subject:"Email verification",
            text:`Your verification code is ${verificationToken}`
        };
        const result=await transport.sendMail(mailOptions);
        console.log("Email sent:",result);
        return true;
    }  
    catch(error){
        console.error("Email sending error:",error);
        return false;
    }
}