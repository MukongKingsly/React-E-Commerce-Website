import React from 'react';
import { Welcome, FeaturedCategories, FeaturedProducts, LatestProducts } from '../../componets';
import "./home.css";

export default function Home() {
  return (
      <>
           <Welcome /> 
           <FeaturedCategories /> 
           <FeaturedProducts /> 
           <LatestProducts /> 
      </>
  )
}
