const express = require("express");
const app = express();
const dotenv = require("dotenv");

//Config
dotenv.config({ path: "./config.env" });

//Middlewares
app.use(express.json());
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.send("Ok From Server");
});

//Middlewares for Error

module.exports = app;
