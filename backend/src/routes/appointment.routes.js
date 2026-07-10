import express from "express";
import protectRoutes from "../middleware/authCheck.js";
import AppointmentController from "../controller/appointment.controller.js";

const router = express.Router();

router.put(
  "/accept/:appointmentId",
  protectRoutes,
  AppointmentController.handleAccept,
);
router.put(
  "/decline/:appointmentId",
  protectRoutes,
  AppointmentController.handleDecline,
);
router.post(
  "/create/:doctorId",
  protectRoutes,
  AppointmentController.createAppointment,
);
router.get(
  "/get/appointments",
  protectRoutes,
  AppointmentController.getAppointments,
);
export default router;
