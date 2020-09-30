const express = require("express");
const app = express();
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected");
  }
);
const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.json());

//Route middlewares
app.use("/api/user", authRoute);

//Server
app.get("/", (req, res) => {
  res.send("Welcome to my Express Server");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
