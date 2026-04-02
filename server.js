const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");

const recordRoutes = require("./routes/recordRoutes");

const dashboardRoutes = require("./routes/dashboardRoutes");


const app = express();
app.use(express.json());

app.use("/users", userRoutes);

app.use("/records", recordRoutes);

app.use("/dashboard", dashboardRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("API is running...");
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});