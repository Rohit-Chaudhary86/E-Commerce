import './App.css'
import axios from 'axios' 
import Checkout from './Components/Checkout';
import Founder from './Components/Founder';
import HomePage from './Components/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Orders from './Components/Orders';
import Tracker from './Components/Tracker';
import {useState, useEffect} from "react"
function App() {
   const[cart,setCart]=useState([])
  useEffect(()=>{
     axios.get("/api/cart-items?expand=product")   /* ?expand=product its a query parameter it lets us add additional info to our request */
       .then((response)=>{
         console.log(response.data)
         setCart(response.data)
       })
  },[])
   return (
    
    <>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<HomePage cart={cart} /> }/>
       <Route path="/Founder" element={<Founder/>} />
       <Route path="/Checkout" element={<Checkout cart={cart}/>}/>
       <Route path="/orders" element={<Orders cart={cart}/>} />
       <Route path="/track" element={<Tracker/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
