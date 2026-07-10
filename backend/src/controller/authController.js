import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import { generateTokens } from "../lib/utils.js";

const authController = {
  register: async (req, res) => {
    const { username, email, password, role } = req.body;
    if (!username || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }
    try {
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: {
          name: username,
          email,
          password: hashedPassword,
          role,
          verified: true,
        },
      });
      res.status(201).json({
        message: "User registered successfully.",
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
      console.error("Registration error:", error);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    try {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      generateTokens(user.id, res);
      res.json({
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
      console.error("Login error:", error);
    }
  },
  logout: (req, res) => {
    try {
      res.clearCookie("jwt", {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
      });
      res.json({ message: "Logout successful" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
      console.error("Logout error:", error);
    }
  },
  checkAuth: (req, res) => {
    try {
      const user = req.user;
      if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      res.json({
        user,
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
      console.error("Auth check error:", error);
    }
  },
};

export default authController;
