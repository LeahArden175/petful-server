const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  get() {
    //Return the pets next in line to be adopted.
    if(pets.cats.first === null) {
      store.cats.forEach(cat => pets.cats.enqueue(cat))
    }

    if(pets.dogs.first === null) {
      store.dogs.forEach(dog => pets.dogs.enqueue(dog))
    }

    const cat = pets.cats.display()
    const dog = pets.dogs.display()
    return {cat, dog}
  },

  dequeue(type) {
    // Remove a pet from the queue.
    return pets[type].dequeue();
  }
}
