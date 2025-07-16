import React from 'react'
import axios from 'axios';
import { useEffect,useState ,} from 'react';
import './HomePage.css';
import Header from '../../components2/Header';
import { useNavigate } from 'react-router';
import { ProductsGrid } from './ProductsGrid';
function HomePage({cart,loadCart}) {
   const[products,setProducts]=useState([]);
   
  useEffect(()=>{
     async function fetchProducts(){
      const response= await axios.get("/api/products")
       setProducts(response.data)
     }
     fetchProducts()
  },[])
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/founder")
  }
  return (
      <div className="home-page">
        <Header  cart={cart}/>
        <ProductsGrid products={products} loadCart={loadCart}/>
        <div className='centered-button-container'>
        <button onClick={handleClick} className='founder-button' >Founder</button>
        </div>
      </div>
  );
}

export default HomePage