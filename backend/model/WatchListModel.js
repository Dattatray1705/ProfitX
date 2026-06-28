const mongoose = require("mongoose");
const WatchListSchema = require("../schemas/WatchListSchema");

const WatchListModel =
mongoose.models.WatchList ||
mongoose.model("WatchList", WatchListSchema);

module.exports = WatchListModel;