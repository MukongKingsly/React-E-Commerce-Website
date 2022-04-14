import React from 'react'
import { Link } from 'react-router-dom';
import { PlayStore, AppStore, WhiteLogo } from "../images/ProjectImg";

function Footer() {
  return (
    <div className="footer">
    <div className="footerContainer">
        <div className="row">
            <div className="footer-col-1">
                <h3>Download Our App</h3>
                <p>Download App for Android and ios mobile phone</p>
                <div className="app-logo">
                    <Link to=""><img src={PlayStore} alt="" /></Link>
                    <Link to=""><img src={AppStore} alt="" /></Link>
                </div>
            </div>
            <div className="footer-col-2">
                <img src={WhiteLogo} alt="" />
                <p>Our purpose Is To Sustainably Make the Pleasure <br/> and Benefits of Sports Accessible to Many</p>
            </div>
            <div className="footer-col-3 social">
                <h3>Useful Links</h3>
                <ul>
                    <Link to=""><li>Coupons</li></Link>
                    <Link to=""><li>Blog Post</li></Link>
                    <Link to=""><li>Return Policy</li></Link>
                    <Link to=""><li>Join Affiliate</li></Link>
                </ul>
            </div>
            <div className="footer-col-4 social">
                <h3>Follow us</h3>
                <ul>
                    <Link to=""><li>Facebook</li></Link>
                    <Link to=""><li>Twitter</li></Link>
                    <Link to=""><li>Instagram</li></Link>
                    <Link to=""><li>Youtube</li></Link>
                </ul>
            </div>
        </div>
        <hr/>
        <div className="copyright">
            <p>Copyright &#169; 2020 - <strong>E Shop</strong>. All Rights Reserved</p>                
        </div>
    </div>
</div>
  )
}

export default Footer