import React from 'react';
import { TestimonialData } from './TestimonialData';
import "./featured.css"

function Testimonial() {
  return (
    <div className="testimonial">
        <div className="container">
            <div className="row">
                {TestimonialData.map((item, index) => {
                    return (
                        <div className="col-3" key={index}>
                        <i className="fas">{item.icon}</i>
                        <p>{item.comment}</p>
                        <img src={item.imgSrc} alt=""/>
                        <h3>{item.name}</h3>
                        </div> 
                    )
                })}
                 
            </div>
        </div>
    </div>
  )
}

export default Testimonial