import ChaiCard from "./components/ChaiCard"
import ChaiList from "./components/ChaiList"
import Counter from "./components/Counter"
import type { Chai } from "./types"

const menu: Chai[] = [
  {id: 1, name: 'Masala', price: 30},
  {id: 2, name: 'Ginger', price: 50},
  {id: 3, name: 'Elaichi', price: 35},
  {id: 4, name: 'Lemon', price: 40},
  {id: 5, name: 'Sugar Free', price: 55},
]

const App = () => {
  return (
    <div>
      <div>
        <ChaiCard name="Headphones" price={500} />
        <ChaiCard name="Iphone" price={80000} isSpecial />
      </div>
      <div>
        <Counter/>
      </div>
      <div>
        <ChaiList items={menu}/>
      </div>
    </div>
  )
}

export default App