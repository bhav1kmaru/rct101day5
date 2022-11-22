
import './App.css';
import CartItem from './components/CartItem';
import Total from './components/Total';
import React from 'react'



const data=[
  {name:"Noodles",price:30},{name:"Biryani",price:90},{name:"Chips",price:10}
]

function App() {
  const [total,setTotal]=React.useState(130)
  return (
    <div className="App">
      {data.map((el)=>
<CartItem name={el.name} price={el.price} setTotal={setTotal}/>
      )}
      <Total total={total}/>
    </div>
  );
}


export default App;
