import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";
const protectRoutes = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        verified: true,
        isOnboarded: true,
        athlete: {
          include: {
            location: true,
          },
        },
        coach: {
          include: {
            availability: true,
            location: true,
          },
        },
        doctor: {
          include: {
            availability: true,
            location: true,
          },
        },
        organization: {
          include: {
            location: true,
          },
        },
        createdAt: true,
      },
    });
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
      console.log("User not found for token:", decoded.userId);
    }
    req.user = user;
    console.log("Authenticated user:", user);
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized", error: error.message });
    console.error("Authentication error:", error);
  }
};

export default protectRoutes;
