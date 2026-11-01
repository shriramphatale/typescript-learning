import React, { useState } from "react"

interface OrderFormProps {
  onSubmit(order: {name: string, cups: number}):void
}

const OrderForm = ({ onSubmit }: OrderFormProps) => {

  const [name, setName] = useState<string>('Masala')
  const [cups, setCups] = useState<number>(1)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    onSubmit({name, cups})
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label>Name</label>
      <input type="text" 
        value={name}  
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value)
        }}
      /> <br />

      <label>Cups</label>
      <input type="number" 
        value={cups}  
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setCups(Number(e.target.value))
        }}
      /> <br />

      <button type="submit">place order</button>
    </form>
  )
}

export default OrderForm