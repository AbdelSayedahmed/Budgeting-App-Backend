const express = require("express");
const router = express.Router();
const transactions = require("../models/transactions.json");
const nanoid = require("nanoid");
const fs = require("fs");

router.get("/NotFound", (req, res) => res.send("Index not found!"));

router.get("/", (req, res) => res.status(200).json(transactions));

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const transaction = transactions.find((transaction) => transaction.id === id);

  if (transaction) {
    res.status(200).send(transaction);
  } else {
    res.status(404).json({ error: `Transaction with id ${id} not found` });
  }
});

router.post("/", (req, res) => {
  const currentTrans = { id: nanoid.nanoid(), ...req.body };
  transactions.push(currentTrans);

  fs.writeFile(
    "./models/transactions.json",
    JSON.stringify(transactions),
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error saving transactions");
      } else {
        res.status(201).send(transactions[transactions.length - 1]);
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const transOnj = transactions.findIndex((transaction) => transaction.id === id);

  if (transOnj !== -1) {
    transactions.splice(transOnj, 1);
    fs.writeFile("./models/transactions.json", JSON.stringify(transactions), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error saving transactions");
      } else {
        res.status(200).send(`Transaction with id ${id} has been deleted`);
      }
    });
  } else {
    res.status(404).send({ error: `Transaction with id ${id} not found` });
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const transObj = transactions.findIndex((transaction) => transaction.id === id);
  if (transObj !== -1) {
    transactions[transObj] = { ...transactions[transObj], ...req.body };

    fs.writeFile("./models/transactions.json", JSON.stringify(transactions), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error saving transactions");
      } else {
        res.status(200).send(transactions[transObj]);
      }
    });
  } else {
    res.status(404).send({ error: `Transaction with id ${id} not found` });
  }
});

module.exports = router;
