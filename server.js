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

//Get all users
app.get("/api/members", (req, res) => {
  res.json(members);
});

//Get single user
app.get("/api/members/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(members.filter(member => member.id === id));
});
