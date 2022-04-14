import React from 'react';
import { Category } from '../../images/ProjectImg';
import './featured.css';

function FeaturedCategories() {
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