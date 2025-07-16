import './App.css'
import axios from 'axios' 
import Checkout from './Components/Checkout/Checkout';
import Founder from './Components/Founder';
import HomePage from './Components/Home/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Orders from './Components/Orders';
import Tracker from './Components/Tracker';
import {useState, useEffect} from "react"
import OrderComplete from './Components/OrderComplete/OrderComplete'
function App() {
   const[cart,setCart]=useState([])
   async function loadCart(){
     const response= await axios.get("/api/cart-items?expand=product") /* ?expand=product its a query parameter it lets us add additional info to our request */
     setCart(response.data)
    }  
  useEffect(()=>{
    
      loadCart()
  },[])
   return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<HomePage cart={cart} loadCart={loadCart}/> }/>
       <Route path="/Founder" element={<Founder/>} />
       <Route path="/Checkout" element={<Checkout cart={cart} loadCart={loadCart}/>}/>
       <Route path="/orders" element={<Orders cart={cart}/>} />
       <Route path="/track" element={<Tracker/>} />
       <Route path='/order-placed' element={<OrderComplete/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
