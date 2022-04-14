import React from 'react'
import { BrandsLogo } from '../../images/ProjectImg';

const Brands = () => {
  return (
    <div class="brands">
    <div class="small-container">
        <div class="row">
            {BrandsLogo.map((item, index) => {
                return (
                    <div className="col-5" key={index}>
                        <img src={item.BrandSrc} alt="" />
                    </div>
                )
            })}
        </div>
    </div>
</div>
  )
}

export default Brands