import { Router } from "express";
import {
  connectGoogleFit,
  googleFitCallback,
  syncNow,
  getActivity,
  getStatus,
  disconnectGoogleFit,
} from "../controller/fitness.controller.js";
import protectRoutes from "../middleware/authCheck.js";

const router = Router();

router.get("/status", protectRoutes, getStatus);
router.get("/connect", protectRoutes, connectGoogleFit);
router.get("/google/callback", googleFitCallback);
router.post("/sync", protectRoutes, syncNow);
router.get("/activity", protectRoutes, getActivity);
router.delete("/disconnect", protectRoutes, disconnectGoogleFit);

export default router;
