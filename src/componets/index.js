import React from 'react';

const Navbar = React.lazy(() => import("./Navbar/Navbar"));
const Welcome = React.lazy(() => import("./welcome/Welcome"))
const FeaturedCategories = React.lazy(() => import("./featured/FeaturedCategories"));
const FeaturedProducts = React.lazy(() => import("./featured/FeaturedProducts"));
const LatestProducts = React.lazy(() => import("./featured/LatestProducts"));
const Offer = React.lazy(() => import("./featured/Offer"));
const Testimonial = React.lazy(() => import("./featured/Testimonial"));
const Brands = React.lazy(() => import("./featured/Brands"));

export {
    Navbar,
    Welcome,
    FeaturedCategories,
    FeaturedProducts,
    LatestProducts,
    Offer,
    Testimonial,
    Brands,
}