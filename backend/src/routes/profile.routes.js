import { Router } from "express";
import protectRoutes from "../middleware/authCheck.js";
import { getUserProfile } from "../controller/user.controller.js";
import {
  createAchievement,
  getAchievements,
  deleteAchievement,
} from "../controller/achievement.controller.js";

const router = Router();

router.get("/users/:id", protectRoutes, getUserProfile);

router.post("/achievements", protectRoutes, createAchievement);
router.get("/achievements/:athleteId", protectRoutes, getAchievements);
router.delete("/achievements/:id", protectRoutes, deleteAchievement);

export default router;
