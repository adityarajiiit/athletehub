import prisma from "../lib/prisma.js";
export async function getUserProfile(req, res) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.params.id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        verified: true,
        isOnboarded: true,
        createdAt: true,
        athlete: {
          include: {
            location: true,
            achievements: { orderBy: { date: "desc" } },
          },
        },
        coach: {
          include: { availability: true, location: true },
        },
        doctor: {
          include: { availability: true, location: true },
        },
        organization: {
          include: { location: true },
        },
      },
    });

    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ user });
  } catch (err) {
    console.error("getUserProfile error:", err);
    res.status(500).json({ message: "Failed to fetch profile" });
  }
}
