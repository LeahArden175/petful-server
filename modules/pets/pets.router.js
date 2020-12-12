const express = require("express");
const json = require("body-parser").json();

const People = require('../people/people.service')
const Pets = require("./pets.service");

const router = express.Router();

router.get("/", (req, res) => {
  // Return all pets currently up for adoption.
  const petsForAdoption = Pets.get();

  return res.status(200).json(petsForAdoption);
});

router.delete('/', json, (req, res) => {
  Pets.dequeue(req.body.type);
  res.status(204).end()
});

module.exports = router;
