import jwt from 'jsonwebtoken';
export const  verifyToken=(req,res,next)=>{
   const token=req.cookies.token;
   if(!token){
    return res.json({error:"Unauthorized"});
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.json({error:"Unauthorized"});
        }
        req.userId=decoded.id;
        next()
    }

    catch(error){
return res.status(500).json({error:"Server error",error});
    }
}