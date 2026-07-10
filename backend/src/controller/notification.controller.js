import prisma from "../lib/prisma.js";

export const notificationController = {
  getNotifications: async (req, res) => {
    const userId = req.user.id;
    try {
      const notifications = await prisma.notifications.findMany({
        where: { userId },
        select: {
          id: true,
          title: true,
          message: true,
          type: true,
          isRead: true,
          note: {
            select: {
              id: true,
              task: true,
              subjective: true,
              objective: true,
              plan: true,
              assessment: true,
              appointment: {
                select: {
                  id: true,
                  status: true,
                  date: true,
                  startTime: true,
                  endTime: true,
                },
              },
            },
          },
          createdAt: true,
          updatedAt: true,
        },
        orderBy: { createdAt: "desc" },
      });
      res.status(200).json(notifications);
    } catch (error) {
      console.error("Error fetching notifications:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  updateNotification: async (req, res) => {
    const { notificationId } = req.params;
    try {
      const updatedNotification = await prisma.notifications.update({
        where: { id: notificationId },
        data: { isRead: true },
      });
      res.status(200).json(updatedNotification);
    } catch (error) {
      console.error("Error updating notification:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
