import express from 'express';
import { signup } from '../controller/auth.controller.js';
import { login } from '../controller/auth.controller.js';
import { logout,verifyEmail } from '../controller/auth.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { verify } from 'crypto';
import { checkAuth } from '../controller/auth.controller.js';
const router = express.Router();

router.get("/check-auth",verifyToken,checkAuth);
router.post('/signup',signup);

router.post('/login',login);

router.post('/logout',verifyToken,logout);
router.post("/verify-email",verifyEmail);
export default router;