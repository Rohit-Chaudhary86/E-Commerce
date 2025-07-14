import React from 'react'
import axios from 'axios';
import { useEffect,useState ,} from 'react';
import './HomePage.css';
import { formatMoney } from '../utils/Money';
import Header from '../components2/Header';
import { useNavigate } from 'react-router';
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
        <div className="products-grid">
          {products.map((product) => {
            return (
              
                <div key={product.id} className="product-container">
                  <div className="product-image-container">
                    <img
                      className="product-image"
                      src={product.image}
                    />
                  </div>

                  <div className="product-name limit-text-to-2-lines">
                    {product.name}
                  </div>

                  <div className="product-rating-container">
                    <img
                      className="product-rating-stars"
                      src={`images/ratings/rating-${product.rating.stars * 10}.png`}
                    />
                    <div className="product-rating-count link-primary">
                      Reviews {product.rating.count}
                    </div>
                  </div>

                  <div className="product-price">{formatMoney(product.priceCents)}</div>

                  <div className="product-quantity-container">
                    <select>
                      {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
                    </select>
                  </div>

                  <div className="product-spacer"></div>

                  <div className="added-to-cart">
                    <img src="images/icons/checkmark.png" />
                    Added
                  </div>

                  <button className="add-to-cart-button button-primary">
                    Add to Cart
                  </button>
                </div>
              
            );
          })}
          
        </div>
        <div className='centered-button-container'>
        <button onClick={handleClick} className='founder-button' >Founder</button>
        </div>
      </div>
    
  );
}

export default HomePage