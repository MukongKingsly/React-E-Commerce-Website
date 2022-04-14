import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from "../../images/image1.png";
import "./welcome.css";

export default function Home() {
  return (
      <div className="header">
      <div className="row">
            <div className="col-2">
                  <h1>Give Your Workout <br/> A New Style!</h1>
                  <p>Success isn't always about greatness. It's about consistency. Consistent,
                    <br/>hard work gains succes. Greatnes will come</p>
                  <Link to="/products" className="btn">Explore Now &#8594;</Link>
            </div>
            <div className="col-2">
                  <img src={Image1} alt="" />
            </div>                
      </div>
      </div>
  )
}
