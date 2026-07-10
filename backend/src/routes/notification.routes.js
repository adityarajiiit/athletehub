import { Router } from "express";
import { notificationController } from "../controller/notification.controller.js";
import protectRoutes from "../middleware/authCheck.js";

const router = Router();

router.get("/", protectRoutes, notificationController.getNotifications);
router.patch("/:notificationId", notificationController.updateNotification);

export default router;
