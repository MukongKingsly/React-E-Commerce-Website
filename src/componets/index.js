import React from 'react';

const Navbar = React.lazy(() => import("./Navbar/Navbar"));
const Welcome = React.lazy(() => import("./welcome/Welcome"))
const FeaturedCategories = React.lazy(() => import("./FeaturedCategories"));
const FeaturedProducts = React.lazy(() => import("./FeaturedProducts"));
const LatestProducts = React.lazy(() => import("./LatestProducts"));
const Offer = React.lazy(() => import("./Offer"));
const Testimonial = React.lazy(() => import("./Testimonial"));
const Brands = React.lazy(() => import("./Brands"));
const Footer = React.lazy(() => import("./Footer"));

export {
    Navbar,
    Welcome,
    FeaturedCategories,
    FeaturedProducts,
    LatestProducts,
    Offer,
    Testimonial,
    Brands,
    Footer
}