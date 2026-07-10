import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const mailOptions = {
      from: "Athlete Hub <aryankumar911315@gmail.com>",
      to: email,
      subject: "Email verification",
      text: `Your verification link is http://localhost:4000/api/auth/verify-email/${verificationToken}`,
    };
    const result = await transport.sendMail(mailOptions);
    console.log("Email sent:", result);
  } catch (error) {
    console.error(error.message);
  }
};
