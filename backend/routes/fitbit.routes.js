import express from "express"
import { verifyToken } from "../middleware/verifyToken.js"
const router=express.Router()
import { initiateAuth,handleCallback,getConnectionStatus,disconnectyourFitbit,getFitbitProfile } from "../controller/fitbit.controller.js"
router.get("/initiate",verifyToken,initiateAuth)
router.get("/callback",verifyToken,handleCallback)
router.get("/status",verifyToken,getConnectionStatus)
router.get("/disconnect",verifyToken,disconnectyourFitbit)
router.get("/profile",verifyToken,getFitbitProfile)
export default router