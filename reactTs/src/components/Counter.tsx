import { useState } from "react"

const Counter = () => {

  const [count, setCount] = useState<number>(0) // generics

  return (
    <div>
      <p>Cups ordered: {count}</p>
      <button onClick={() => setCount((c)=>c+1)}>
        Order one more
      </button>
    </div>
   
  )
}

export default Counter