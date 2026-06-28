const mongoose = require("mongoose");

const TradeJournalSchema =
require("../schemas/TradeJournalSchema");

const TradeJournalModel =
mongoose.models.TradeJournal ||
mongoose.model(
  "TradeJournal",
  TradeJournalSchema
);

module.exports =
TradeJournalModel;