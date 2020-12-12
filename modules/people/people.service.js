const Queue = require("../queue/Queue");
const store = require("../../store");

// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach((person) => people.enqueue(person));

// --------------------

module.exports = {
  get() {
    // Return all people in the queue.
    // if (people.first === null) {
    //   store.people.forEach((person) => people.enqueue(person));
    // }

    const person = people.display();
    return person;
  },

  enqueue(person) {
    // Add a person to the queue.
    people.enqueue(person);
    return person;
  },

  dequeue() {
    // Remove a person from the queue.
    return people.dequeue()
  },
};
