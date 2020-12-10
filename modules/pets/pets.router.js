const express = require("express");
const json = require("body-parser").json();

const Pets = require("./pets.service");

const router = express.Router();

router.get("/", (req, res) => {
  // Return all pets currently up for adoption.
  const petsForAdoption = Pets.get();

  return res.json(petsForAdoption);
});

router.delete("/:pet_type", json, (req, res) => {
  // Remove a pet from adoption.

  let { type } = req.params.pet_type;

  Pets.dequeue(type);
  return res.status(204).end();
});

module.exports = router;
