// union (|) -> specified types only, could be either num or str
// can create our own types "pending" | "success" etc

let subs:number|string = 99;
subs = '1M'; 

let apiRequest: 'pending' | 'success' | 'failed' = 'pending';
apiRequest = 'success'; 

let airlineSeat: 'window' | 'middle' | 'aisle' = 'window';
airlineSeat = 'window';

// any -> Almost any type | type checking is disabled

const orders = ['21','12','45'];

// let currenOrder; // (any) or (:any) 
let currentOrder:string | undefined; //avoid this use string | undefined

for(let order of orders){
    if(order === '12'){
        currentOrder = order;
        break
    }
}

// currenOrder = 42 //we can assign any type now 

console.log(currentOrder)