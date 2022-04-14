import React from 'react';

const Navbar = React.lazy(() => import("./Navbar/Navbar"));
const Welcome = React.lazy(() => import("./welcome/Welcome"))
const FeaturedCategories = React.lazy(() => import("./featured/FeaturedCategories"));
const FeaturedProducts = React.lazy(() => import("./featured/FeaturedProducts"));
const LatestProducts = React.lazy(() => import("./featured/LatesProducts"));


export {
    Navbar,
    Welcome,
    FeaturedCategories,
    FeaturedProducts,
    LatestProducts
}