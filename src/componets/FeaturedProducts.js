import React from 'react';
import { Link } from 'react-router-dom';
import { FeaturedProductsImg } from '../images/ProjectImg';
import './featured.css';

function FeaturedProducts() {
  return (
    <div className="categories">
    <div className="small-container">
    <h2 className="title">Featured Products</h2>
        <div className="row">
        {FeaturedProductsImg.map((item, index) => {
                return (
                    <div className="col-4" key={index}>
                        <Link to="">
                              <img src={item.src} alt="featured product" />
                              <h4>{item.title}</h4>
                        </Link>                        
                        <span className="rating">{item.rating}</span>
                        <p>{item.price}</p>
                    </div>)
            })}
        </div>
    </div>        
</div>
  )
}

export default FeaturedProducts;