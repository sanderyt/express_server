const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

const members = [
  { id: 1, name: "Sander", residence: "Amsterdam" },
  { id: 2, name: "Stijn", residence: "Amsterdam" },
  { id: 3, name: "Max", residence: "Rotterdam" }
];

app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to my Express Server");
});

//Get all users
app.get("/api/members", (req, res) => {
  res.json(members);
});

//Get single user
app.get("/api/members/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(members.filter(member => member.id === id));
});
