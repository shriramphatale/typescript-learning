// Typeof 
function getChai(kind: string|number){
  if(typeof(kind)==='string'){
    return `Making ${kind} chai...`; // now more accurate methods and properties suggestions
  }
  return `chai order ${kind}` // number
}

// Truthiness | null
function serveChai(msg?:string){
  if(msg){
    return `Serving ${msg}`
  }
  return `Serving default masala chai`; 
}

// Exhaustive checking -> 'small' | 'medium' | number
function orderChai(size: 'small'|'medium'|'large'|number){
  if(size === 'small'){
    return `small cutting chai...`
  }
  if(size === 'medium' || size === 'large'){
    return `make extra chai`
  }

  return `chai order #${size}` // size is num
}

// instanceOf -> class instances and objects 
class kulhadChai{
  serve(){
    return `Serving Kulhad chai`
  }
}
class cutting{
  serve(){
    return `Serving cutting chai`
  }
}

function serve(chai: kulhadChai|cutting){
  if(chai instanceof kulhadChai){
    return chai.serve() // kulhad chai method
  }
}

//custom type predicates
type ChaiOrder = {
  type: String,
  sugar: number,
}

function isChaiOrder(obj:any): obj is ChaiOrder{ // treat obj as ChaiOrder
  return (
    typeof obj === 'object' && obj !== null && 
    typeof obj.type === 'string' && typeof obj.sugar === 'number'
  ) 
} // return true if obj is chaiOrder type

function serveOrder(item: ChaiOrder | string){
  if(isChaiOrder(item)){
    return `Serving ${item.type} chai with ${item.sugar}` // chaOrder obj
  }
  return `Serving custom chai: ${item}` // string 
}

serveOrder({type: 'masala', sugar: 2}) // passing chaiOrder obj
serveOrder('Ginger Special')           // passing string

// Discriminated unions -> obj types
type MasalaChai = {type: "masala", spiceLevel: number};
type GingerChai = {type: "ginger", amount: number};
type ElaichiChai = {type: "elaichi", aroma: number};

type chai = MasalaChai | GingerChai | ElaichiChai

function makeChai(order: chai){
  switch (order.type) {
    case "masala":
      return "masala chai"
      break;
    
    case 'ginger':
      return "ginger chai"
      break;

    case 'elaichi':
      return "elaichi chai"
      break;
  }
}

makeChai({type: "ginger", amount: 2}) // ginger chai

function brew(order: MasalaChai|GingerChai ){ // check using object property
  if("spicelevel" in order){
    return `Brewing masala chai with spice level ${order.spicelevel}`;
  }
}

function isStringArray(arr: unknown): arr is string[]{ 
  return (
    Array.isArray(arr) &&
    arr.every(item => typeof item === "string")
  );
}