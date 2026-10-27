interface Chai {
  flavour: string,
  milk?: boolean
}

const chai : Chai = {
  flavour: 'Ginger',
  milk: true
}

//function
interface Discount {
  (price: number): number
}

const apply50: Discount = (price) => price * 0.5

//methods
interface TeaMachine {
  start(): void,
  stop(): void 
}

const machine: TeaMachine = {
  start() {
    console.log("start")
  },

  stop() {
    console.log("stop")
  },
} 
machine.start() //start

//index signature -> define obj with key string and value number
interface chaiRatings {
  [flavour: string]: number
}

const ratings: chaiRatings = {
  masala: 3.5,
  ginger: 4.6
}
ratings["elaichi"] = 2.5

console.log(ratings.masala)
console.log(ratings["ginger"])

// merge interface
interface user {
  name: string
}
interface user {
  age: number
}

const u: user = {
  name: 'shri',
  age: 18
}

interface address {
  address: string
}

interface Info extends user, address {}

