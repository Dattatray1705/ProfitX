const mongoose = require("mongoose");

const WatchListSchema = new mongoose.Schema({
name: String,
price: Number,
percent: Number,
isDown: Boolean,
});

module.exports = WatchListSchema;