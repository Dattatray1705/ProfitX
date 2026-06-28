const mongoose = require("mongoose");

const PositionSchema = new mongoose.Schema({
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    },
product: String,
name: String,
qty: Number,
avg: Number,
price: Number,
net: String,
day: String,
isLoss: Boolean,
});

module.exports = PositionSchema;