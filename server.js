const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("MongoDB was connected");
  }
);

//Middleware
app.use(cors());

//Import routes
const userRoutes = require("./routes/users");

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to my Express Server");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
