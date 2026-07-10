import express from "express";
import onboardController from "../controller/onBoard.controller.js";
import protectRoutes from "../middleware/authCheck.js";
const router = express.Router();
router.post("/Athlete", protectRoutes, onboardController.onBoardAthlete);
router.post("/Coach", protectRoutes, onboardController.onBoardCoach);
router.post("/Doctor", protectRoutes, onboardController.onBoardDoctor);
router.post(
  "/Organization",
  protectRoutes,
  onboardController.organizationOnboard,
);
export default router;
