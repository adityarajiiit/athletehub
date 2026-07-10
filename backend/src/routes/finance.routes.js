import financeController from "../controller/finance.contoller.js";
import express from "express";
import protectRoutes from "../middleware/authCheck.js";

const router = express.Router();

router.post("/accounts", protectRoutes, financeController.addAccount);
router.get("/accounts", protectRoutes, financeController.getAccounts);
router.post("/transactions", protectRoutes, financeController.addTransaction);
router.get("/transactions", protectRoutes, financeController.getTransactions);
router.delete(
  "/accounts/:accountId",
  protectRoutes,
  financeController.deleteAccount,
);
router.delete(
  "/transactions/:accountId",
  protectRoutes,
  financeController.deleteTransaction,
);
router.post(
  "/transactions/scan-bill",
  protectRoutes,
  financeController.scanBill,
);
export default router;
