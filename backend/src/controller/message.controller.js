import prisma from "../lib/prisma.js";
import { getRecieverId } from "../lib/socket.js";
import { io } from "../lib/socket.js";
const messageController = {
  sendMessage: async (req, res) => {
    const { content, recieverId, image } = req.body;
    const senderId = req.user.id;
    try {
      const message = await prisma.message.create({
        data: {
          content,
          image,
          sender: {
            connect: { id: senderId },
          },
          receiver: {
            connect: { id: recieverId },
          },
        },
      });
      res.status(201).json(message);
      const receiverSocket = getRecieverId(recieverId);
      if (receiverSocket) {
        io.to(receiverSocket).emit("newMessage", message);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  getMessage: async (req, res) => {
    const { userId2 } = req.query;
    const userId1 = req.user.id;
    try {
      const messages = await prisma.message.findMany({
        where: {
          OR: [
            { senderId: userId1, receiverId: userId2 },
            { senderId: userId2, receiverId: userId1 },
          ],
        },
        orderBy: {
          timestamp: "asc",
        },
      });
      res.status(200).json(messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          role: true,
          athlete: {
            select: { image: true },
          },
          coach: {
            select: { image: true },
          },
          doctor: {
            select: { image: true },
          },
          organization: {
            select: { image: true },
          },
        },
      });
      res.status(200).json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
export default messageController;
