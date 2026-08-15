import { google } from "googleapis";
import crypto from "crypto";
import prisma from "../lib/prisma.js";

const {
  GOOGLE_FIT_CLIENT_ID,
  GOOGLE_FIT_CLIENT_SECRET,
  GOOGLE_FIT_REDIRECT_URI,
  TOKEN_ENCRYPTION_KEY,
} = process.env;

const SCOPES = [
  "https://www.googleapis.com/auth/fitness.activity.read",
  "https://www.googleapis.com/auth/userinfo.email",
];

function getOAuthClient() {
  return new google.auth.OAuth2(
    GOOGLE_FIT_CLIENT_ID,
    GOOGLE_FIT_CLIENT_SECRET,
    GOOGLE_FIT_REDIRECT_URI,
  );
}

function encrypt(text) {
  const iv = crypto.randomBytes(12);
  const key = Buffer.from(TOKEN_ENCRYPTION_KEY, "hex");
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  const encrypted = Buffer.concat([
    cipher.update(text, "utf8"),
    cipher.final(),
  ]);
  const authTag = cipher.getAuthTag();
  return Buffer.concat([iv, authTag, encrypted]).toString("base64");
}

function decrypt(payload) {
  const raw = Buffer.from(payload, "base64");
  const iv = raw.subarray(0, 12);
  const authTag = raw.subarray(12, 28);
  const encrypted = raw.subarray(28);
  const key = Buffer.from(TOKEN_ENCRYPTION_KEY, "hex");
  const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
  decipher.setAuthTag(authTag);
  return Buffer.concat([decipher.update(encrypted), decipher.final()]).toString(
    "utf8",
  );
}

export function getAuthUrl(athleteId) {
  const oauth2Client = getOAuthClient();
  return oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: SCOPES,
    state: athleteId,
  });
}

export async function handleCallback(code, athleteId) {
  const oauth2Client = getOAuthClient();
  const { tokens } = await oauth2Client.getToken(code);

  oauth2Client.setCredentials(tokens);
  const oauth2 = google.oauth2({ version: "v2", auth: oauth2Client });
  const { data: profile } = await oauth2.userinfo.get();

  await prisma.fitnessAccount.upsert({
    where: { athleteId },
    create: {
      athleteId,
      provider: "GoogleFit",
      accessToken: encrypt(tokens.access_token),
      refreshToken: encrypt(tokens.refresh_token),
      expiresAt: new Date(tokens.expiry_date),
      providerEmail: profile.email,
    },
    update: {
      accessToken: encrypt(tokens.access_token),
      ...(tokens.refresh_token && {
        refreshToken: encrypt(tokens.refresh_token),
      }),
      expiresAt: new Date(tokens.expiry_date),
      providerEmail: profile.email,
    },
  });

  return profile.email;
}

// ── 3. get a valid (auto-refreshed) client for an athlete ──
async function getAuthedClientForAthlete(athleteId) {
  const account = await prisma.fitnessAccount.findUnique({
    where: { athleteId },
  });
  if (!account) {
    const err = new Error("No Google Fit account connected");
    err.code = "NOT_CONNECTED";
    throw err;
  }

  const oauth2Client = getOAuthClient();
  oauth2Client.setCredentials({
    access_token: decrypt(account.accessToken),
    refresh_token: decrypt(account.refreshToken),
    expiry_date: account.expiresAt.getTime(),
  });

  if (account.expiresAt.getTime() <= Date.now()) {
    const { credentials } = await oauth2Client.refreshAccessToken();
    oauth2Client.setCredentials(credentials);
    await prisma.fitnessAccount.update({
      where: { athleteId },
      data: {
        accessToken: encrypt(credentials.access_token),
        expiresAt: new Date(credentials.expiry_date),
      },
    });
  }

  return oauth2Client;
}

export async function syncActivity(athleteId, rangeDays = 7) {
  const auth = await getAuthedClientForAthlete(athleteId);
  const fitness = google.fitness({ version: "v1", auth });

  const endTimeMillis = Date.now();
  const startTimeMillis = endTimeMillis - rangeDays * 24 * 60 * 60 * 1000;

  const { data } = await fitness.users.dataset.aggregate({
    userId: "me",
    requestBody: {
      startTimeMillis,
      endTimeMillis,
      aggregateBy: [
        { dataTypeName: "com.google.step_count.delta" },
        { dataTypeName: "com.google.calories.expended" },
      ],
      bucketByTime: { durationMillis: 24 * 60 * 60 * 1000 }, // 1 bucket per day
    },
  });

  const results = [];
  for (const bucket of data.bucket ?? []) {
    const date = new Date(Number(bucket.startTimeMillis));
    date.setUTCHours(0, 0, 0, 0);

    let steps = 0;
    let calories = 0;
    for (const dataset of bucket.dataset ?? []) {
      for (const point of dataset.point ?? []) {
        for (const value of point.value ?? []) {
          if (value.intVal != null) steps += value.intVal;
          if (value.fpVal != null) calories += value.fpVal;
        }
      }
    }

    const record = await prisma.dailyActivity.upsert({
      where: { athleteId_date: { athleteId, date } },
      create: { athleteId, date, steps, calories, source: "GoogleFit" },
      update: { steps, calories, source: "GoogleFit", syncedAt: new Date() },
    });
    results.push(record);
  }

  await prisma.fitnessAccount.update({
    where: { athleteId },
    data: { lastSyncedAt: new Date() },
  });

  return results;
}

export async function disconnect(athleteId) {
  await prisma.fitnessAccount.delete({ where: { athleteId } }).catch(() => {});
}

export async function getConnectionStatus(athleteId) {
  const account = await prisma.fitnessAccount.findUnique({
    where: { athleteId },
  });
  if (!account) return { connected: false };
  return {
    connected: true,
    email: account.providerEmail,
    lastSyncedAt: account.lastSyncedAt,
  };
}
