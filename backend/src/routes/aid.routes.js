import aidController from "../controller/aid.controller.js";
import express from "express";
import protectRoutes from "../middleware/authCheck.js";

const router = express.Router();

router.post("/Injury", protectRoutes, aidController.postInjury);
router.post("/Illness", protectRoutes, aidController.postIllness);
router.get("/injuries", protectRoutes, aidController.getInjury);
router.get("/illnesses", protectRoutes, aidController.getIllness);
router.delete("/injuries/:injuryId", protectRoutes, aidController.deleteInjury);
router.delete(
  "/illnesses/:illnessId",
  protectRoutes,
  aidController.deleteIllness,
);

export default router;
