import arcjet, { tokenBucket } from "@arcjet/node";
import dotenv from 'dotenv'
dotenv.config()
const aj=arcjet({
    key:process.env.ARC_JET_KEY,
    characteristics:["userId"],
    rules:[
        tokenBucket({
            mode:"LIVE",
            refillRate:"10",
            interval:3600,
            capacity:10
        })
    ]
})
export default aj;
