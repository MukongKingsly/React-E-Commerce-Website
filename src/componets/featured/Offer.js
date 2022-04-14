import React from 'react'
import { Link } from 'react-router-dom';
import { ExclusiveImg } from "../../images/ProjectImg";
import "./featured.css";

function Offer() {
  return (
    <div className="offer">
        <div className="small-container">
            <div className="row">
                <div className="col-2">
                    <img src={ExclusiveImg} alt="" className="offer-img"/>
                </div>
                <div className="col-2">
                    <p>Exclusively Available on RedStore</p>
                    <h1>Smart Band 4</h1>
                    <small>The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED color full-touch display with adjustable brightness,
                        so everything is clear as can be. <br/>
                    </small>
                    <Link to="" className="btn">Buy Now &#8594;</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offer