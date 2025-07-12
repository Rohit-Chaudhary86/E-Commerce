import './App.css'

import Checkout from './Components/Checkout';
import Founder from './Components/Founder';
import HomePage from './Components/homePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Orders from './Components/Orders';
import Tracker from './Components/Tracker';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/Founder" element={<Founder/>} />
       <Route path="/Checkout" element={<Checkout/>}/>
       <Route path="/orders" element={<Orders/>} />
       <Route path="/track" element={<Tracker/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
