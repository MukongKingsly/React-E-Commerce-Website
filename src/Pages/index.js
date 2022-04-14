import React from 'react';

const About = React.lazy(() => import("./about/About"));
const Contact = React.lazy(() => import("./contact/Contact"));
const Home = React.lazy(() => import("./home/Home"));
const Products = React.lazy(() => import("./products/Products"));

export {
    About,
    Contact,
    Home,
    Products
}