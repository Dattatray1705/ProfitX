const mongoose = require("mongoose");
const PositionSchema = require("../schemas/PositionSchema");

const PositionModel =
mongoose.models.Position ||
mongoose.model("Position", PositionSchema);

module.exports = PositionModel;