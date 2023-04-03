const express = require("express");
const app = express();
const { getRequest } = require("./prdocuts");

app.get("/", (req, res) => {
  res.status(200).json({
    name: "First Request",
    id: 1,
  });
});

app.get("./product", getRequest);

app.post("/", (req, res) => {
  const { firstName, lastName } = req.body;

  res.status(200).json({
    firstName,
    lastName,
  });
});

app.listen(3000, (req, res) => {
  console.log("Server Is Listening On port 3000");
});
