import prisma from "../lib/prisma.js";

const careerController = {
  getCoach: async (req, res) => {
    const currentUserId = req.user.id;
    try {
      const coaches = await prisma.coach.findMany({
        where: {
          userId: {
            not: currentUserId,
          },
        },
        include: {
          user: true,
          location: true,
        },
      });
      res.json(coaches);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
  getDoctor: async (req, res) => {
    const currentUserId = req.user.id;
    try {
      const doctors = await prisma.doctor.findMany({
        where: {
          userId: {
            not: currentUserId,
          },
        },
        include: {
          user: true,
          location: true,
        },
      });
      res.json(doctors);
    } catch (error) {
      req.status(500).json({ message: "Server error", error: error.message });
    }
  },
  getAthlete: async (req, res) => {
    const currentUserId = req.user.id;
    try {
      const athletes = await prisma.athlete.findMany({
        where: {
          userId: {
            not: currentUserId,
          },
        },
        include: {
          user: true,
          location: true,
        },
      });
      res.json(athletes);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
};

export default careerController;
