const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all the people currently in the queue.

  const adopters = People.get()
  console.log(adopters)
  return res.status(200).json(adopters)
})

router.post('/', json, (req, res) => {
  // Add a new person to the queue.

  const {newPerson} = req.body
  People.enqueue(newPerson)

  res.status(201).json(People.get())
})

// router.delete('/',json, (req,res) =>{
//   let person = People.dequeue();
//   res.send({person : person}).status(204).end();
// });


module.exports = router
