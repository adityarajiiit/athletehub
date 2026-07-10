import prisma from "../lib/prisma.js";
import cloudinary from "../lib/cloudinary.js";
const onboardController = {
  onBoardAthlete: async (req, res) => {
    const {
      image,
      dateOfBirth,
      sport,
      gender,
      height,
      weight,
      state,
      country,
    } = req.body;
    const userId = req.user.id;
    const existingAthlete = await prisma.athlete.findUnique({
      where: { userId },
    });
    if (existingAthlete) {
      return res
        .status(400)
        .json({ message: "Athlete profile already exists" });
    }
    try {
      const updatedWeight = parseFloat(weight);
      const athlete = await prisma.athlete.create({
        data: {
          image,
          dateOfBirth: new Date(dateOfBirth),
          sport,
          gender,
          height,
          weight: updatedWeight,
          user: {
            connect: { id: userId },
          },
          location: {
            create: {
              state,
              country,
            },
          },
        },
      });
      await prisma.user.update({
        where: { id: userId },
        data: {
          isOnboarded: true,
        },
      });
      res.status(201).json({ message: "Athlete profile created", athlete });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
  onBoardCoach: async (req, res) => {
    const {
      image,
      specialization,
      experienceYears,
      gender,
      sport,
      day,
      startTime,
      endTime,
      state,
      country,
    } = req.body;
    const userId = req.user.id;
    try {
      const existingCoach = await prisma.coach.findUnique({
        where: { userId },
      });
      if (existingCoach) {
        return res
          .status(400)
          .json({ message: "Coach profile already exists" });
      }
      const updatedExperienceYears = parseInt(experienceYears);
      const updatedStartTime = new Date(`1970-01-01T${startTime}Z`);
      const updatedEndTime = new Date(`1970-01-01T${endTime}Z`);
      const newDay = parseInt(day);
      const coach = await prisma.coach.create({
        data: {
          image,
          specialization,
          experienceYears: updatedExperienceYears,
          gender,
          sport,
          user: {
            connect: { id: userId },
          },
          availability: {
            create: {
              day: newDay,
              startTime: updatedStartTime,
              endTime: updatedEndTime,
            },
          },
          location: {
            create: {
              state,
              country,
            },
          },
        },
      });
      await prisma.user.update({
        where: { id: userId },
        data: {
          isOnboarded: true,
        },
      });
      res.status(201).json({ message: "Coach profile created", coach });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
  onBoardDoctor: async (req, res) => {
    const {
      image,
      specialization,
      experienceYears,
      gender,
      college,
      year,
      degree,
      day,
      startTime,
      endTime,
      state,
      country,
    } = req.body;
    const userId = req.user.id;
    try {
      const existingDoctor = await prisma.doctor.findUnique({
        where: { userId },
      });

      const updatedExperienceYears = parseInt(experienceYears);
      const updatedStartTime = new Date(`1970-01-01T${startTime}Z`);
      const updatedEndTime = new Date(`1970-01-01T${endTime}Z`);
      const newDay = parseInt(day);
      const updatedYear = parseInt(year);
      const doctor = await prisma.doctor.create({
        data: {
          image,
          specialization,
          experienceYears: updatedExperienceYears,
          gender,
          college,
          year: updatedYear,
          degree,
          user: {
            connect: { id: userId },
          },
          availability: {
            create: {
              day: newDay,
              startTime: updatedStartTime,
              endTime: updatedEndTime,
            },
          },
          location: {
            create: {
              state,
              country,
            },
          },
        },
      });
      await prisma.user.update({
        where: { id: userId },
        data: {
          isOnboarded: true,
        },
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
  organizationOnboard: async (req, res) => {
    const {
      image,
      description,
      phone,
      website,
      city,
      pincode,
      state,
      country,
    } = req.body();
    const userId = req.user.id;
    try {
      const existingOrganization = await prisma.organization.findUnique({
        where: { userId },
      });
      if (existingOrganization) {
        return res
          .status(400)
          .json({ message: "Organization profile already exists" });
      }
      const organization = await prisma.organization.create({
        data: {
          image,
          description,
          phone,
          website,
          user: {
            connect: { id: userId },
          },
          location: {
            create: {
              city,
              state,
              country,
              pincode,
            },
          },
        },
      });
      await prisma.user.update({
        where: { id: userId },
        data: {
          isOnboarded: true,
        },
      });
      res
        .status(201)
        .json({ message: "Organization profile created", organization });
    } catch (error) {}
  },
};

export default onboardController;
