// Type Assertion: tells compiler to treat a value as specific type
let response: any = '42';
let numericLength: number = (response as string).length; // treats as string and suggest methods

type Book = {
  name: string;
}

let bookString = "{'name':'One Piece'}"
let bookobj = JSON.parse(bookString) as Book; // treat as type Book
console.log(bookobj.name);

let inputElement = document.getElementById("username") as HTMLInputElement // treat as HTML input element

// any
let value: any;
value = 'chai'
value = 22
value = [2,3,4,5]
value.toUpperCase() //allowed

// type unknown: can hold "any value" but "must check" its type before performing operation
let value2: unknown;
value2 = 'shriram'
value2 = 3
value2 = [2,3,4,5]

// value2.toUpperCase() -> not allowed
if (typeof value2 === 'string'){
  console.log(value2.toUpperCase())
}

const data: unknown = "Chai aur code"
const strData: string = data as string

try {
  
}catch (error) { // error is unknown
  if(error instanceof Error){
    console.log(error.message)
  }
  console.log("Error ", error)
}

// type never -> value never occur | function never finishes normally
type Role = 'admin' | 'user' // if we add 'superAdmin' Role then role changes from never -> superadmin

function basedOnRole( role: Role ): void { // void -> finishes normalyy and i dont care what it returns
  if ( role === 'user'){
    console.log("Redirecting to user dashboard")
    return
  }

  if ( role === 'admin'){
    console.log("Redirecting to admin dashboard")
    return
  }

  role; // type never
}

function neverReturn() : never {
  while(true){}
}