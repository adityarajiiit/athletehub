import express from "express";
import authController from "../controller/authController.js";
import protectRoutes from "../middleware/authCheck.js";
const router = express.Router();
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.get("/check", protectRoutes, authController.checkAuth);
export default router;
