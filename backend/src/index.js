import "dotenv/config";
import "module-alias/register";
import express from "express";
import authRoutes from "./routes/auth.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import onboardRoutes from "./routes/onboard.routes.js";
import careerroutes from "./routes/career.route.js";
import aidRoutes from "./routes/aid.routes.js";
import financeRoutes from "./routes/finance.routes.js";
import messageRoutes from "./routes/message.route.js";
import appointmentRoutes from "./routes/appointment.routes.js";
import { server, app } from "./lib/socket.js";
const PORT = process.env.PORT || 4000;
app.use(express.json({ limit: "20mb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use("/api/auth", authRoutes);
app.use("/api/onboard", onboardRoutes);
app.use("/api", careerroutes);
app.use("/api/aid", aidRoutes);
app.use("/api/finance", financeRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/appointment", appointmentRoutes);
app.use(
  "/api/notifications",
  (await import("./routes/notification.routes.js")).default,
);
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
