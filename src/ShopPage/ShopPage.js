import React from "react";
import Navbar from "../compoments/Content/Navbar/Navbar";
import Footer from "../compoments/Content/Footer/Footer";
import ShopPageHeaDer from "./ShopPageHeaDer/ShopPageHeaDer";
import ShopPageFirst from "./ShopPageFirst";

const ShopPage = () => {
    return(
        <div>
            <Navbar/>
            <ShopPageHeaDer/>
            <ShopPageFirst/>
            <Footer/>
        </div>
    )

}

export default ShopPage;