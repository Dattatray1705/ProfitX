require("dotenv").config();
console.log("JWT_SECRET =", process.env.JWT_SECRET);
const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/userRoutes");
const stockRoutes = require("./routes/stockRoutes");
const fundRoutes = require("./routes/fundRoutes");

const cookieParser = require("cookie-parser");
const app = express();

const PORT = process.env.PORT || 5000;


// MIDDLEWARE

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
    ],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());


// DATABASE

connectDB();


// ROUTES

app.use("/", stockRoutes);
app.use("/", authRoutes);
app.use("/", fundRoutes);

// SERVER

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});