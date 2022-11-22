import React from 'react'

export default function CartItem(props) {
  const [quantity,setQuantity] = React.useState(1)
  const add=()=>{
    setQuantity((prevValue)=>prevValue+1)
    setTotal((prevTotal)=>prevTotal+price)
  }
  const del=()=>{
    if(quantity>0){
      setQuantity((prevValue)=>prevValue-1)
      setTotal((prevTotal)=>prevTotal-price)
    }
  }
  let {name,price,setTotal}=props
  const styles={display:"flex",justifyContent:"space-evenly",margin:"auto",padding:"10px",border:"1px solid black",width:"60%"}
  // setTotal((prevTotal)=>prevTotal+price*quantity)
  return (
    <div style={styles}>
      <p>{name}</p>
      <p>{`₹ ${price}`}</p>
      <div style={{display:"flex",gap:"10px"}}>
      <button onClick={del}>-</button>
      <p>{quantity}</p>
      <button onClick={add}>+</button>
      </div>
    </div>
  )
}
