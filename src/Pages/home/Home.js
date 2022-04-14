import React from 'react';
import { Welcome, FeaturedCategories, FeaturedProducts, LatestProducts,
          Offer, Testimonial, Brands, Footer
        } from '../../componets';
import "./home.css";

export default function Home() {
  return (
      <>
           <Welcome /> 
           <FeaturedCategories /> 
           <FeaturedProducts /> 
           <LatestProducts /> 
           <Offer />
           <Testimonial />
           <Brands />
      </>
  )
}
