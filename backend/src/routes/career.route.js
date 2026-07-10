import express from "express";
import careerController from "../controller/career.controller.js";
import protectRoutes from "../middleware/authCheck.js";

const router = express.Router();

router.get("/coaches", protectRoutes, careerController.getCoach);
router.get("/doctors", protectRoutes, careerController.getDoctor);
router.get("/athletes", protectRoutes, careerController.getAthlete);

export default router;
