import * as googleFitService from "../services/googleFit.service.js";
import prisma from "../lib/prisma.js";
import crypto from "crypto";

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

function signState(athleteId) {
  const hmac = crypto
    .createHmac("sha256", process.env.TOKEN_ENCRYPTION_KEY)
    .update(athleteId)
    .digest("hex");
  return `${athleteId}.${hmac}`;
}

function verifyState(state) {
  const [athleteId, hmac] = (state || "").split(".");
  if (!athleteId || !hmac) return null;
  const expected = crypto
    .createHmac("sha256", process.env.TOKEN_ENCRYPTION_KEY)
    .update(athleteId)
    .digest("hex");
  return hmac === expected ? athleteId : null;
}

export async function connectGoogleFit(req, res) {
  try {
    const athlete = await prisma.athlete.findUnique({
      where: { userId: req.user.id },
    });
    if (!athlete)
      return res.status(404).json({ message: "Athlete profile not found" });

    const url = googleFitService.getAuthUrl(signState(athlete.id));
    res.json({ url });
  } catch (err) {
    console.error("connectGoogleFit error:", err);
    res.status(500).json({ message: "Failed to start Google Fit connection" });
  }
}

export async function googleFitCallback(req, res) {
  const { code, state, error } = req.query;

  if (error) {
    return res.redirect(
      `${FRONTEND_URL}/training?fitness_error=${encodeURIComponent(error)}`,
    );
  }

  const athleteId = verifyState(state);
  if (!athleteId) {
    return res.redirect(`${FRONTEND_URL}/training?fitness_error=invalid_state`);
  }

  try {
    await googleFitService.handleCallback(code, athleteId);
    await googleFitService.syncActivity(athleteId, 30); // backfill last 30 days on first connect
    res.redirect(`${FRONTEND_URL}/training?connected=true`);
  } catch (err) {
    console.error("googleFitCallback error:", err);
    res.redirect(`${FRONTEND_URL}/training?fitness_error=connection_failed`);
  }
}

export async function syncNow(req, res) {
  try {
    const athlete = await prisma.athlete.findUnique({
      where: { userId: req.user.id },
    });
    if (!athlete)
      return res.status(404).json({ message: "Athlete profile not found" });

    const results = await googleFitService.syncActivity(athlete.id, 7);
    res.json({ message: "Synced", synced: results.length });
  } catch (err) {
    if (err.code === "NOT_CONNECTED") {
      return res.status(400).json({ message: "Google Fit not connected" });
    }
    console.error("syncNow error:", err);
    res.status(500).json({ message: "Sync failed" });
  }
}

export async function getActivity(req, res) {
  try {
    const athlete = await prisma.athlete.findUnique({
      where: { userId: req.user.id },
    });
    if (!athlete)
      return res.status(404).json({ message: "Athlete profile not found" });

    const days = Math.min(Number(req.query.days) || 30, 90);
    const since = new Date();
    since.setUTCDate(since.getUTCDate() - days);
    since.setUTCHours(0, 0, 0, 0);

    const activity = await prisma.dailyActivity.findMany({
      where: { athleteId: athlete.id, date: { gte: since } },
      orderBy: { date: "asc" },
    });

    res.json({ activity });
  } catch (err) {
    console.error("getActivity error:", err);
    res.status(500).json({ message: "Failed to fetch activity" });
  }
}

export async function getStatus(req, res) {
  try {
    const athlete = await prisma.athlete.findUnique({
      where: { userId: req.user.id },
    });
    if (!athlete)
      return res.status(404).json({ message: "Athlete profile not found" });

    const status = await googleFitService.getConnectionStatus(athlete.id);
    res.json(status);
  } catch (err) {
    console.error("getStatus error:", err);
    res.status(500).json({ message: "Failed to fetch status" });
  }
}

export async function disconnectGoogleFit(req, res) {
  try {
    const athlete = await prisma.athlete.findUnique({
      where: { userId: req.user.id },
    });
    if (!athlete)
      return res.status(404).json({ message: "Athlete profile not found" });

    await googleFitService.disconnect(athlete.id);
    res.json({ message: "Disconnected" });
  } catch (err) {
    console.error("disconnectGoogleFit error:", err);
    res.status(500).json({ message: "Failed to disconnect" });
  }
}
