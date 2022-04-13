import React from 'react';

const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));
const Home = React.lazy(() => import("./Home"));
const Products = React.lazy(() => import("./Products"));

export {
    About,
    Contact,
    Home,
    Products
}