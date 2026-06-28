const mongoose = require("mongoose");
const FundSchema = require("../schemas/FundSchema");

const FundModel =
  mongoose.models.Fund ||
  mongoose.model("Fund", FundSchema);

module.exports = FundModel;