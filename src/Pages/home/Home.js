import React from 'react';
import { Welcome, FeaturedCategories, FeaturedProducts, LatestProducts,
          Offer, Testimonial
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
      </>
  )
}
