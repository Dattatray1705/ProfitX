const FundModel = require("../model/FundModel");

// Get Balance
const getBalance = async (req, res) => {
  try {
    const fund = await FundModel.findOne({
      userId: req.user.userId,
    });

    if (!fund) {
      return res.status(404).json({
        message: "Fund account not found",
      });
    }

    res.status(200).json({
      balance: fund.balance,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Add Funds
const addFunds = async (req, res) => {
  try {
    const { amount } = req.body;

    const fund = await FundModel.findOne({
      userId: req.user.userId,
    });

    if (!fund) {
      return res.status(404).json({
        message: "Fund account not found",
      });
    }

    fund.balance += Number(amount);

    await fund.save();

    res.status(200).json({
      message: "Funds Added Successfully",
      balance: fund.balance,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Withdraw Funds
const withdrawFunds = async (req, res) => {
  try {
    const { amount } = req.body;

    const fund = await FundModel.findOne({
      userId: req.user.userId,
    });

    if (!fund) {
      return res.status(404).json({
        message: "Fund account not found",
      });
    }

    if (fund.balance < Number(amount)) {
      return res.status(400).json({
        message: "Insufficient Balance",
      });
    }

    fund.balance -= Number(amount);

    await fund.save();

    res.status(200).json({
      message: "Amount Withdrawn Successfully",
      balance: fund.balance,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getBalance,
  addFunds,
  withdrawFunds,
};