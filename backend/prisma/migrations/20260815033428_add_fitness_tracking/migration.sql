-- CreateEnum
CREATE TYPE "FitnessProvider" AS ENUM ('GoogleFit', 'Fitbit');

-- CreateTable
CREATE TABLE "FitnessAccount" (
    "id" TEXT NOT NULL,
    "athleteId" TEXT NOT NULL,
    "provider" "FitnessProvider" NOT NULL DEFAULT 'GoogleFit',
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "providerEmail" TEXT,
    "connectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSyncedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FitnessAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyActivity" (
    "id" TEXT NOT NULL,
    "athleteId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "steps" INTEGER NOT NULL DEFAULT 0,
    "calories" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "source" "FitnessProvider" NOT NULL DEFAULT 'GoogleFit',
    "syncedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DailyActivity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FitnessAccount_athleteId_key" ON "FitnessAccount"("athleteId");

-- CreateIndex
CREATE INDEX "DailyActivity_athleteId_date_idx" ON "DailyActivity"("athleteId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "DailyActivity_athleteId_date_key" ON "DailyActivity"("athleteId", "date");

-- AddForeignKey
ALTER TABLE "FitnessAccount" ADD CONSTRAINT "FitnessAccount_athleteId_fkey" FOREIGN KEY ("athleteId") REFERENCES "Athlete"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyActivity" ADD CONSTRAINT "DailyActivity_athleteId_fkey" FOREIGN KEY ("athleteId") REFERENCES "Athlete"("id") ON DELETE CASCADE ON UPDATE CASCADE;
