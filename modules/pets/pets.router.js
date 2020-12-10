const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  const petsForAdoption = Pets.get()

  res.json(petsForAdoption)
})

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.

  let {type} = req.body;

  const petAdopted = Pets.dequeue(type)
  if(!petAdopted) {
    res.status(400).send({error: {message: 'no more for adoption'}})
  }
  res.status(204).end()
})

module.exports = router
