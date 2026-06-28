const express = require("express");
const router = express.Router();

const {
  getBalance,
  addFunds,
  withdrawFunds,
} = require("../controllers/fundController");

const authMiddleware = require("../middleware/authMiddleware");

router.get(
  "/funds",
  authMiddleware,
  getBalance
);

router.post(
  "/funds/add",
  authMiddleware,
  addFunds
);

router.post(
  "/funds/withdraw",
  authMiddleware,
  withdrawFunds
);

module.exports = router;