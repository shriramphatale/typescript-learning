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
