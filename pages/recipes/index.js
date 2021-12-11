import React from 'react';
import Header from "../../components/partials/Header";
import Hero from "../../components/Recipes/Hero";
import Footer from "../../components/partials/Footer";
import Recipes from "../../components/Recipes/Recipes";
import BlueCircle from "../../components/partials/BlueCircle";

const Supplements = () => {
    return (
        <>
            <Header />
            <BlueCircle right="1400px" top="-150px"/>
            <Hero />
            <Recipes />
            <Footer />
        </>
    );
};

export default Supplements;