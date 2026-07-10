import prisma from "../lib/prisma.js";
import analyzeBillFromUrl from "../lib/aiScanner.js";
const financeController = {
  addAccount: async (req, res) => {
    const { name, accountNumber, type, balance, status, isDefault } = req.body;
    const userId = req.user.id;
    try {
      const athlete = await prisma.athlete.findUnique({
        where: { userId },
      });
      if (!athlete) {
        return res.status(404).json({ message: "Athlete not found" });
      }
      const athleteId = athlete.id;
      const balanceValue = parseInt(balance);
      const account = await prisma.account.create({
        data: {
          name,
          accountNumber,
          type,
          balance: balanceValue,
          status,
          isDefault,
          athleteId,
        },
      });
      res.status(201).json(account);
    } catch (error) {
      console.error("Error adding account:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  getAccounts: async (req, res) => {
    const userId = req.user.id;
    try {
      const athlete = await prisma.athlete.findUnique({
        where: { userId },
      });
      if (!athlete) {
        return res.status(404).json({ message: "Athlete not found" });
      }
      const athleteId = athlete.id;
      const accounts = await prisma.account.findMany({
        where: { athleteId },
      });
      res.status(200).json(accounts);
    } catch (error) {
      console.error("Error fetching accounts:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  addTransaction: async (req, res) => {
    const userId = req.user.id;
    const { type, status, amount, description, date, category, accountId } =
      req.body;
    try {
      const athlete = await prisma.athlete.findUnique({
        where: { userId },
      });
      if (!athlete) {
        return res.status(404).json({ message: "Athlete not found" });
      }
      const athleteId = athlete.id;
      const transaction = await prisma.transaction.create({
        data: {
          type,
          status,
          amount,
          description,
          date: new Date(date),
          category,
          account: {
            connect: { id: accountId },
          },
          athlete: {
            connect: { id: athleteId },
          },
        },
      });
      res.status(201).json(transaction);
    } catch (error) {
      console.error("Error adding transaction:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  getTransactions: async (req, res) => {
    const userId = req.user.id;
    try {
      const athlete = await prisma.athlete.findUnique({
        where: { userId },
      });
      if (!athlete) {
        return res.status(404).json({ message: "Athlete not found" });
      }
      const athleteId = athlete.id;
      const transactions = await prisma.transaction.findMany({
        where: {
          athleteId: athleteId,
        },
        include: {
          account: true,
        },
      });
      res.status(200).json(transactions);
    } catch (error) {
      console.error("Error fetching transactions:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  deleteAccount: async (req, res) => {
    const { accountId } = req.params;
    try {
      await prisma.account.delete({
        where: { id: accountId },
      });
      res.status(200).json({ message: "Account deleted successfully" });
    } catch (error) {
      console.error("Error deleting account:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  deleteTransaction: async (req, res) => {
    const { transactionId } = req.params;
    try {
      const transaction = await prisma.transaction.delete({
        where: { id: transactionId },
      });
      res.status(200).json({ message: "Transaction deleted successfully" });
    } catch (error) {
      console.error("Error deleting transaction:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  scanBill: async (req, res) => {
    const { imageUrl } = req.body;
    const userId = req.user.id;
    try {
      const transactionDetails = await analyzeBillFromUrl(imageUrl);
      const response = await prisma.user.findUnique({
        where: { id: userId },
        include: { athlete: true },
      });
      const defaultAccount = await prisma.account.findFirst({
        where: {
          athleteId: response.athlete.id,
          isDefault: true,
        },
      });
      if (!defaultAccount) {
        return res.status(404).json({ message: "Default account not found" });
      }
      const athleteId = response.athlete.id;
      await prisma.transaction.create({
        data: {
          type: transactionDetails.type,
          status: transactionDetails.status,
          amount: transactionDetails.amount,
          description: transactionDetails.description,
          date: new Date(transactionDetails.date),
          category: transactionDetails.category,
          athlete: {
            connect: { id: athleteId },
          },
          account: {
            connect: { id: defaultAccount.id },
          },
        },
      });
      res
        .status(200)
        .json({ message: "Transaction created", transactionDetails });
    } catch (error) {
      console.error("Error scanning bill:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
export default financeController;
