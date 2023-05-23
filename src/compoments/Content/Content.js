import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Categories from "./Home/Categories";
import TrendingProducts from "./Home/TrendingProducts";
import HomeFooter from "./Home/HomeFooter";
const Content = () => {
    return(
        <div>
            <Navbar/>
            <Home/>
            <Categories/>
            <TrendingProducts/>
            <HomeFooter/>
            <Footer/>
        </div>
    )
}

export default Content;