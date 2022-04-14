import React from 'react';
import { Products } from '../../images/ProjectImg';
import './featured.css';

function FeaturedProducts() {
  return (
    <div className="categories">
    <div className="small-container">
    <h2 className="title">Featured Products</h2>
        <div className="row">
        {Products.map((item, index) => {
                return (
                    <div className="col-4" key={index}>
                        <img src={item} alt="featured product" />
                    </div>)
            })}
        </div>
    </div>        
</div>
  )
}

export default FeaturedProducts;