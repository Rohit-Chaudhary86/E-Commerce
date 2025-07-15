import React from 'react'
import axios from 'axios';
import { useEffect,useState ,} from 'react';
import './HomePage.css';
import Header from '../../components2/Header';
import { useNavigate } from 'react-router';
import { ProductsGrid } from './ProductsGrid';
function HomePage({cart}) {
   const[products,setProducts]=useState([]);
   
  useEffect(()=>{
      axios.get("/api/products")
    .then((response)=>{
      console.log(response)
      setProducts(response.data)
      });

  },[])
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/founder")
  }
  return (
      <div className="home-page">
        <Header  cart={cart}/>
        <ProductsGrid products={products}/>
        <div className='centered-button-container'>
        <button onClick={handleClick} className='founder-button' >Founder</button>
        </div>
      </div>
  );
}

export default HomePage