import prisma from "../lib/prisma.js";

export async function createAchievement(req, res) {
  try {
    if (req.user.role !== "Athlete") {
      return res
        .status(403)
        .json({ message: "Only athletes can add achievements" });
    }
    const athlete = await prisma.athlete.findUnique({
      where: { userId: req.user.id },
    });
    if (!athlete)
      return res.status(404).json({ message: "Athlete profile not found" });

    const { title, description, date } = req.body;
    if (!title || !description || !date) {
      return res
        .status(400)
        .json({ message: "title, description and date are required" });
    }

    const achievement = await prisma.achievement.create({
      data: {
        title,
        description,
        date: new Date(date),
        athleteId: athlete.id,
      },
    });

    res.status(201).json({ achievement });
  } catch (err) {
    console.error("createAchievement error:", err);
    res.status(500).json({ message: "Failed to create achievement" });
  }
}

export async function getAchievements(req, res) {
  try {
    const { athleteId } = req.params;
    const achievements = await prisma.achievement.findMany({
      where: { athleteId },
      orderBy: { date: "desc" },
    });
    res.json({ achievements });
  } catch (err) {
    console.error("getAchievements error:", err);
    res.status(500).json({ message: "Failed to fetch achievements" });
  }
}

export async function deleteAchievement(req, res) {
  try {
    const athlete = await prisma.athlete.findUnique({
      where: { userId: req.user.id },
    });
    if (!athlete)
      return res.status(404).json({ message: "Athlete profile not found" });

    const existing = await prisma.achievement.findUnique({
      where: { id: req.params.id },
    });
    if (!existing)
      return res.status(404).json({ message: "Achievement not found" });
    if (existing.athleteId !== athlete.id) {
      return res.status(403).json({ message: "Not your achievement" });
    }

    await prisma.achievement.delete({ where: { id: req.params.id } });
    res.json({ message: "Deleted" });
  } catch (err) {
    console.error("deleteAchievement error:", err);
    res.status(500).json({ message: "Failed to delete achievement" });
  }
}
