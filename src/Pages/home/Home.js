import React from 'react';
import { Welcome, FeaturedCategories, FeaturedProducts, LatestProducts,
          Offer, Testimonial, Brands
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
