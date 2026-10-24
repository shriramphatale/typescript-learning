// 1.Array
const chaiFlavours: string[] = ['Masala', "Elaichi", 'Ginger']
const chaiPrice: number[] = [12, 22, 26]

const rating: Array<number> = [2.5, 4.5, 3.5]

// Array of objects
type Chai = {
  name: string,
  price: number
}

const menu: Chai[] = [ {name: 'Masala', price: 15}, {name: 'Ginger', price: 25} ]
menu.push({name: 'Elaichi', price: 16})

// readOnly array
const cities: readonly string[] = ['Mumbai', 'Pune', 'Jaipur', 'Surat']
// cities.push('Baner') -> not applicable for readonly

// Multidimentional Array
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6]
] 

// 2.Tuple -> a typed array with a pre-defined, fixed number of elements
let chaiTuple: [string, number]
chaiTuple = ["Masala", 20]

let arrayOfTuple: [string, number][] = [['Masala',33], ['Ginger',12]]

let userInfo: [string, number, boolean?]
userInfo = ['shivam', 18]
userInfo = ['shivam', 19, true]

const location: readonly [number, number] = [28.66, 32.22] // readonly tuple

// Named Tuple
const chaiItems: [name: string, price: number] = ['Masala', 12]


// 3. Enum -> allows you to define a set of named constants
// automatically assings numeric value

// numeric enum
enum CupSize {
  SMALL,  //0
  MEDIUM, //1
  LARGE   //2
}
let size = CupSize.LARGE

//increamental enum
enum Status {
  PENDING = 100,
  SERVED,   //101 
  CANCELLED //101
}

enum StatusCodes {
  Success = 200,
  BadRequest = 400,
  Unauthorized, //401,
  NotFound, //402
}

// string enum
enum ChaiType {
  MASALA = 'masala',
  GINGER = 'ginger'
}

function makeChai(type: ChaiType){
  console.log(`Making ${type}`)
}
makeChai(ChaiType.GINGER)

enum UserRole {
  Admin = 'ADMIN',
  User = 'USER',
  Guest = 'GUEST'
}

let currentRole = UserRole.Admin

// heterogeneous enum - both string and number
enum UserInfo {
  Name = 'Shriram',
  Age = 22,
  IsActive = 1
}