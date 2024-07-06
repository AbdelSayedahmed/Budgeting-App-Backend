const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("Welcome to the Budgeting App!"));

const budgetController = require("./controllers/budgetController");

app.use("/logs", budgetController);
app.get("*", (req, res) => res.status(404).json({ error: "Page not found" }));

module.exports = app;
