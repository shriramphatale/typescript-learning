// structural typing
let tea: {
  name: string;
  price: number;
  isHot: boolean
}

tea = {
  name: 'Ginger Tea',
  price: 12,
  isHot: true
}

type Tea = {   // type object
  name: string;
  price: number;
  ingredients: string[]
}

const specialTea: Tea = {
  name: 'Ginger tea',
  price: 33,
  ingredients: ['ginger', 'tea leaves', 'sugar']
}

// duck typing
type cup = { size: string}
let smallCup: cup = { size: 'small'}

let bigCup = {size: 'large', material: 'steel'}
smallCup = bigCup //no error -> checks required properties, not same properties

type Brew = { brewTime: number }
const coffee = { brewTime: 10, beans: 'Arabica' }
const ChaiBrew: Brew = coffee // no error

// type seperation
type Item = { name: string, quantity: number }
type Address = { street: string, pin: number }

type Order = {
  id: string;
  items: Item[]; // array of Item objects
  address: Address
}

const order: Order = {
  id: 'sadasddsad',
  items: [
    { name: 'Fan', quantity: 1 }, 
    {name: 'Motor', quantity: 3}
  ],
  address: {
    street: 'Sahyog Nagar',
    pin: 343434
  }
}

// Partial -> makes all properties optional
type Chai = {
  name: string;
  price: number;
  isHot: boolean
}

const updateChai = (updates: Partial<Chai>) => {
  console.log('updating chai with ', updates);
}

updateChai({name: 'ginger tea'}); // other properties optional
updateChai({isHot: false});
updateChai({})

// Required -> makes all properties required
type chaiOrder = {
  name?: string;
  quantity?: number
}

const placeOrder = (order: Required<chaiOrder>) => {
  console.log(order)
}
placeOrder({name: 'Elaichi Chai', quantity: 2})

// Pick -> select specific properties from an existing type
type ChaiOrder = {
  name: string;
  price: number;
  ingredients: string[];
  isHot: boolean;
}

type BasicChaiInfo = Pick<ChaiOrder, "name" | "price"> // only properties we need

const chaiInfo: BasicChaiInfo = {
  name: 'tea',
  price: 22
}

// Omit -> remove specific properties from an existing type.
type ChaiNew = {
  name: String;
  price: number;
  secretIngredients: string[]
}

type PublicChai = Omit<ChaiNew, 'secretIngredients'> // remove this property
