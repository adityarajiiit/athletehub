import prisma from "../lib/prisma.js";
const aidController = {
  postInjury: async (req, res) => {
    const userId = req.user.id;
    const {
      type,
      bodyPart,
      tissueType,
      injuryName,
      severity,
      sport,
      activity,
      mechanism,
      isRecovered,
      date,
      trainingStatus,
      personalProgram,
      comments,
    } = req.body;

    try {
      const athlete = await prisma.athlete.findUnique({
        where: { userId },
      });
      if (!athlete) {
        return res.status(404).json({ message: "Athlete profile not found" });
      }
      const athleteId = athlete.id;
      const injury = await prisma.injry.create({
        data: {
          type,
          bodyPart,
          tissueType,
          injuryName,
          severity,
          sport,
          activity,
          mechanism,
          isRecovered,
          date: new Date(date),
          trainingStatus,
          personalProgram,
          comments,
          athlete: {
            connect: { id: athleteId },
          },
        },
      });
      res.status(201).json({ message: "Injury reported", injury });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
  postIllness: async (req, res) => {
    const userId = req.user.id;
    const {
      category,
      illnessName,
      severity,
      isRecovered,
      date,
      trainingStatus,
      personalProgram,
      comments,
    } = req.body;
    try {
      const athlete = await prisma.athlete.findUnique({
        where: { userId },
      });
      if (!athlete) {
        return res.status(404).json({ message: "Athlete profile not found" });
      }
      const athleteId = athlete.id;
      const illness = await prisma.illness.create({
        data: {
          category,
          illnessName,
          severity,
          isRecovered,
          date: new Date(date),
          trainingStatus,
          personalProgram,
          comments,
          athlete: {
            connect: { id: athleteId },
          },
        },
      });
      res.status(201).json({ message: "Illness reported", illness });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
  getInjury: async (req, res) => {
    const userId = req.user.id;
    try {
      const athlete = await prisma.athlete.findUnique({
        where: { userId },
      });
      if (!athlete) {
        return res.status(404).json({ message: "Athlete profile not found" });
      }
      const injuries = await prisma.injry.findMany({
        where: { athleteId: athlete.id },
      });
      res.status(200).json({ injuries });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
  getIllness: async (req, res) => {
    const userId = req.user.id;
    try {
      const athlete = await prisma.athlete.findUnique({
        where: { userId },
      });
      if (!athlete) {
        return res.status(404).json({ message: "Athlete profile not found" });
      }
      const illnesses = await prisma.illness.findMany({
        where: { athleteId: athlete.id },
      });
      res.status(200).json({ illnesses });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
  deleteInjury: async (req, res) => {
    const userId = req.user.id;
    const { injuryId } = req.params;
    try {
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized!" });
      }
      const injury = await prisma.injry.findUnique({
        where: { id: injuryId },
      });
      if (!injury) {
        return res.status(404).json({ message: "Injury not found" });
      }
      await prisma.injry.delete({
        where: { id: injuryId },
      });
      res.status(200).json({ message: "Injury deleted" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
  deleteIllness: async (req, res) => {
    const userId = req.user.id;
    const { illnessId } = req.params;
    try {
      if (!userId) {
        return res.status(404).json({ message: "Unauthorized!" });
      }
      const illness = await prisma.illness.findUnique({
        where: { id: illnessId },
      });
      if (!illness) {
        return res.status(404).json({ message: "Illness not found" });
      }
      await prisma.illness.delete({
        where: { id: illnessId },
      });
      res.status(200).json({ message: "Illness deleted" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
};
export default aidController;
