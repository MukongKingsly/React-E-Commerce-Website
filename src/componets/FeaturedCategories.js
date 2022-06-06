import React from 'react';
import { Category, LatestProductsImg  } from '../images/ProjectImg';
import './featured.css';

function FeaturedCategories() {
    let number = Math.floor(Math.random()*LatestProductsImg.length);
    let myArray = [];
    for (let i=0; i++; i<LatestProductsImg.length) {
        myArray.push(i)
    }

  return (
    <div className="categories">
    <div className="small-container">
        <div className="row">
            {Category.map((item, index) => {
                return (
                    <div className="col-3" key={index}>
                        <img src={item} alt="featured category" />
                    </div>)
            })}
        </div>
    </div>
</div>
  )
}

export default FeaturedCategories