import prisma from "../lib/prisma.js";
import { getRecieverId, io } from "../lib/socket.js";
const AppointmentController = {
  createAppointment: async (req, res) => {
    const athleteId = req.user.athlete.id;
    const { doctorId } = req.params;
    const {
      date,
      type,
      startTime,
      endTime,
      note,
      bodyPart,
      tissueType,
      injuryName,
      category,
      illnessName,
    } = req.body;
    const updatedStartTime = new Date(`1970-01-01T${startTime}Z`);
    const updatedEndTime = new Date(`1970-01-01T${endTime}Z`);
    try {
      const appointment = await prisma.appointment.create({
        data: {
          athlete: { connect: { id: athleteId } },
          doctor: { connect: { id: doctorId } },
          date: new Date(date),
          type,
          startTime: updatedStartTime,
          endTime: updatedEndTime,
          note,
          status: "pending",
          bodyPart,
          tissueType,
          injuryName,
          category,
          illnessName,
        },
        include: {
          doctor: { select: { userId: true } },
        },
      });
      const notifications = await prisma.notifications.create({
        data: {
          title: "New Appointment Request",
          message: `You have a new appointment request from ${req.user.name}`,
          type: "Appointment",
          userId: appointment.doctor.userId,
        },
      });
      const receiverSocket = getRecieverId(appointment.doctor.userId);
      if (receiverSocket) {
        io.to(receiverSocket).emit("notification", notifications);
      }
      res.json(appointment);
    } catch (error) {
      console.error("Error creating appointment:", error);
      res.status(500).json({ error: "Failed to create appointment" });
    }
  },
  getAppointments: async (req, res) => {
    const userId = req.user.doctor.id;
    try {
      const appointments = await prisma.appointment.findMany({
        where: {
          doctorId: userId,
        },
        select: {
          athlete: {
            select: { user: { select: { id: true, name: true, email: true } } },
          },
          doctor: {
            select: { user: { select: { id: true, name: true, email: true } } },
          },
          date: true,
          athleteId: true,
          doctorId: true,
          endTime: true,
          id: true,
          note: true,
          startTime: true,
          status: true,
          type: true,
          bodyPart: true,
          tissueType: true,
          injuryName: true,
          category: true,
          illnessName: true,
        },
      });
      res.json(appointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      res.status(500).json({ error: "Failed to fetch appointments" });
    }
  },
  handleAccept: async (req, res) => {
    const { appointmentId } = req.params;
    const { task, subjective, objective, plan, assessment } = req.body;
    if (!task || !subjective || !objective || !plan || !assessment) {
      return res.status(400).json({ error: "All fields are required" });
    }
    try {
      const appointment = await prisma.appointment.update({
        where: { id: appointmentId },
        data: { status: "accepted" },
        include: {
          athlete: { select: { id: true, userId: true } },
          doctor: { select: { user: { select: { name: true } } } },
        },
      });
      if (!appointment) {
        return res.status(404).json({ error: "Appointment not found" });
      }
      const notes = await prisma.notes.create({
        data: {
          task,
          subjective,
          objective,
          plan,
          assessment,
          appointment: { connect: { id: appointmentId } },
        },
      });
      const notifications = await prisma.notifications.create({
        data: {
          title: "Appointment Accepted",
          message: `Your appointment has been accepted by ${appointment.doctor.user.name}.`,
          type: "Appointment",
          userId: appointment.athlete.userId,
          note: { connect: { id: notes.id } },
        },
      });
      const receiverSocket = getRecieverId(appointment.athlete.userId);
      if (receiverSocket) {
        io.to(receiverSocket).emit("notification", notifications);
      }
      res.json({ appointment, notes });
    } catch (error) {
      console.error("Error accepting appointment:", error);
      res.status(500).json({ error: "Failed to accept appointment" });
    }
  },
  handleDecline: async (req, res) => {
    const { appointmentId } = req.params;
    if (!appointmentId) {
      return res.status(400).json({ error: "Appointment ID is required" });
    }
    try {
      const appointment = await prisma.appointment.update({
        where: { id: appointmentId },
        data: { status: "declined" },
        include: {
          athlete: { select: { id: true, userId: true } },
          doctor: { select: { user: { select: { name: true } } } },
        },
      });
      if (!appointment) {
        return res.status(404).json({ error: "Appointment not found" });
      }
      const notifications = await prisma.notifications.create({
        data: {
          title: "Appointment Declined",
          message: `Your appointment has been declined by ${appointment.doctor.user.name}.`,
          type: "Appointment",
          userId: appointment.athlete.userId,
        },
      });
      const receiverSocket = getRecieverId(appointment.athlete.userId);
      if (receiverSocket) {
        io.to(receiverSocket).emit("notification", notifications);
      }
      res.json(appointment);
    } catch (error) {
      console.error("Error declining appointment:", error);
      res.status(500).json({ error: "Failed to decline appointment" });
    }
  },
};
export default AppointmentController;
