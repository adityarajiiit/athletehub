-- CreateTable
CREATE TABLE "Achievement" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "athleteId" TEXT NOT NULL,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Injry" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "bodyPart" TEXT NOT NULL,
    "tissueType" TEXT NOT NULL,
    "injuryName" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "sport" TEXT NOT NULL,
    "activity" TEXT NOT NULL,
    "mechanism" TEXT NOT NULL,
    "isRecovered" BOOLEAN NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "trainingStatus" TEXT NOT NULL,
    "personalProgram" TEXT NOT NULL,
    "comments" TEXT NOT NULL,
    "athleteId" TEXT NOT NULL,

    CONSTRAINT "Injry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Illness" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "illnessName" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "isRecovered" BOOLEAN NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "trainingStatus" TEXT NOT NULL,
    "personalProgram" TEXT NOT NULL,
    "comments" TEXT NOT NULL,
    "athleteId" TEXT NOT NULL,

    CONSTRAINT "Illness_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "note" TEXT NOT NULL,
    "status" TEXT,
    "athleteId" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Achievement" ADD CONSTRAINT "Achievement_athleteId_fkey" FOREIGN KEY ("athleteId") REFERENCES "Athlete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Injry" ADD CONSTRAINT "Injry_athleteId_fkey" FOREIGN KEY ("athleteId") REFERENCES "Athlete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Illness" ADD CONSTRAINT "Illness_athleteId_fkey" FOREIGN KEY ("athleteId") REFERENCES "Athlete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_athleteId_fkey" FOREIGN KEY ("athleteId") REFERENCES "Athlete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
