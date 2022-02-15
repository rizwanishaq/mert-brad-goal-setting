const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

// Database connection
connectDB();

const port = process.env.PORT || 5000;

const app = express();

// Middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

// Routes
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
