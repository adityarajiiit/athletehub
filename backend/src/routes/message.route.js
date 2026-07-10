import express from "express";
import protectRoutes from "../middleware/authCheck.js";
import messageController from "../controller/message.controller.js";
const router = express.Router();

router.post("/send", protectRoutes, messageController.sendMessage);
router.get("/get", protectRoutes, messageController.getMessage);
router.get("/user", protectRoutes, messageController.getUser);
export default router;
