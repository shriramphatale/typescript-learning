class Chai {
  flavour: string;
  price: number;

  constructor(flavour: string, price: number){
    this.flavour = flavour;
    this.price = price
    console.log(this)  //masalaChai { flavour: 'Masala', price: undefined }
  }
}

const masalaChai = new Chai("Ginger", 20)
masalaChai.flavour = "masala" 

// 1. Access modifiers -> Public, Private, Protected
  // Public , Private
class specialChai {
  public flavour: string = 'Ginger'

  private secretIngredient = 'cardamon' // only inside class

  reveal(){
    return this.secretIngredient     // can only access private 
  }

}

const chai1 = new specialChai()
chai1.flavour  // public
chai1.reveal() // private

  //protected
class Shop {
  protected shopName = "Chai Corner"  // can only accessed inside Class or Child Class

  protected welcome(){
    console.log(`Welcome to ${this.shopName}`)
  }
}

class Branch extends Shop {
  getName(){
    console.log(this.shopName)
    this.welcome()
  }

  #name = 'Branch1' // js Private enforces for runtime also "Not TS"
}

// 2.readonly - can only assigned at declaration and in constructor
class Cup {
  readonly capacity: number = 250

  constructor(capacity: number){
    this.capacity = capacity
  }
}

const cup1 = new Cup(220)
// cup1.capacity = 22    //error -> readonly

// 3. get and set -> read and update class properties

class ModernChai {
  private _sugar = 2;

  get sugar(){
    return this._sugar
  }

  set sugar(value: number){
    if(value > 5) throw new Error("Too sweet");
    this._sugar = value
  }
}

const Chai2 = new ModernChai()

Chai2.sugar = 3 // set
Chai2.sugar // get

// 4. Static Members -> belongs to class not individual objects

class EkChai {
  static shopName = 'ChaiCode caffe'
}

console.log(EkChai.shopName) // dont need to create object to access

class Math {
  static max(a: number,b: number){
    if(a>b) {
      return a
    } else {
      return b
    }
  }
}

console.log(Math.max(2,3)) //3

// 5. Abstract -> used to create a base class or method 
//    that defines what a child class must implement

abstract class Drink {
  abstract make(): void
}

class MyChai extends Drink {
  make(): void {
    console.log('Making Chai....')
  }
}

// 6.composition 
class Heater {
  heat(){}
}

class ChaiMaker {
  constructor(private heater: Heater){} // access witohout inheritance || 'extends'

  make(){
    this.heater.heat
  }
}