// 1. Type aliases: Use the `type` keyword to give a name to any type, such as primitives, 
      // objects, unions, arrays, and functions.
      // cannot redeclare using same name , cannot extend using "extends" use & 

type chaiOrder = {
  type: string,
  sugar: number,
  strong: boolean
}

function makeChai(order: chaiOrder){
  console.log('preparing chai ', order)
}

function serveChai(order: chaiOrder){
  console.log('your chai is ready ', order)
}

// intersection (&) - > can combine types
type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type maslaChai = BaseChai & Extra // combine both prperties

const cup: maslaChai = {
  teaLeaves: 5,
  masala: 2
}

// optional values
type User = {
  name: string,
  gender?:'male' | 'female' // optional
} 
const u1: User = {name: 'shriram',}

//readOnly
type Config = {
  readonly appName: string,
  version: number
}
const cfg:Config = {
  appName: 'askDoc',
  version: 1
}
// cfg.appName = 'masterji' -> cannot assign value


// 2. Interface -> defines strucutre of an object

// type teaRecipe = { // Object type can be used with class  
//   water: number,
//   milk: number
// }

interface teaRecipe {
  water: number,
  milk:number
} 

class MasalaChai implements teaRecipe {
  water = 100;
  milk = 50;
}

// type size = 'small' | 'large' // class can only implement object type

interface cupSize {
  size: 'small' | 'large'
}

class chai implements cupSize {
  size: "small" | "large" = "small";
} 

// type Response = {ok: true} | {ok: true}  // this is also not allowed
// class myRes implements Response{
//   ok: boolean = true
// }


// declaration mergining
interface Chai {
  sugar: number
}
interface Chai {
  milk: number    // merges this two values
}

interface specialChai extends Chai {  // inherites properties & methods
  ginger: boolean
} 

const prepareChai: specialChai = {
  sugar:2,
  milk:1,
  ginger: true
}