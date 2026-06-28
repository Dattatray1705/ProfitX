const mongoose = require("mongoose");

const TradeJournalSchema =
new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  stockName: {
    type: String,
    required: true,
  },

  reason: {
    type: String,
    required: true,
  },

  analysis: {
    type: String,
  },

  targetPrice: {
    type: Number,
  },

  holdingPeriod: {
    type: String,
  },

}, {
  timestamps: true,
});

module.exports = TradeJournalSchema;