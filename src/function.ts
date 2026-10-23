function makeChai(type: String, cups: number){
  console.log(`Making ${cups} cups of ${type}`);
}

makeChai('Masala', 2);

function getChaiPrice(): number {
  return 22
}

function makeOrder(order: string): string{
  if(!order) return null

  return order;
}

function logChai(): void{  //Logger function -> dont return 
  console.log("Chai is ready")
}

//optional params
function orderChai(type?: string){
  console.log('preparing chai')
}

function orderChai2(type: string = 'Masala'){  // default value
  console.log('preparing chai')
}

function createOrder(order: {type: string, sugar: number, size: 'small' | 'large'}): string{
  return 'order created'
}

createOrder({type: 'masla', sugar: 2, size:'large'})