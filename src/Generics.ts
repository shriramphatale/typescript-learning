// Generics -> allows to write reusable code that works with different data type
// while keeping type safety 

function identity<T>(value:T):T{
  return value;
}

const result = identity('shriram') // string
result.toUpperCase()

const result2 = identity(12) // number
result2.toFixed(2)

// Array
function Array<T>(item: T[]):T | undefined{
  return item[0]
}

console.log(Array([1,2,3,4])) //number array
console.log(Array(['a','b','c']))

function pair<A,B>(a: A, b: B):[A,B]{
  return [a, b]
}
pair("masala", 20)
pair("masala",{flavour: 'Ginger'})

// interface
interface Box<T>{
  content: T
}

const numberBox: Box<number> = { content: 10 }
const stringBox: Box<string> = { content: '10' }

//reusable API responses
interface ApiResponse<T>{
  status: number,
  data: T
}

const res: ApiResponse  <{flavour: string}> = {
  status: 200,
  data: {
    flavour: 'Elaichi'
  }
}

type Doc = {
  id: string,
  fileName: string
}

const res2: ApiResponse<Doc[]> = {
  status: 200,
  data: [
    { id: '1@e34', fileName: 'userNames.pdf'}
  ]
}

// Generic Constraints
function getId<T extends {id: string}>(item: T): string{  
  return item.id;
}

getId({id: '1234', name: 'shriram'}) // object must have id