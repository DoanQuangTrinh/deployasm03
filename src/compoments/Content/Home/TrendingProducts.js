import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./TrendingProducts.module.css";
import {library} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
// import { useDispatch,useSelector  } from 'react-redux';
// import { showPopup,hidePopup  } from "../../../actions/popupActions";
library.add(faXmark);
const TrendingProducts = () => {
  
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  


  // const dispatch = useDispatch();
  // // const popupData = useSelector((state) => state.popupData);
  // const popupData = useSelector((state) => state.popup.data);

  // const handleImageClick = (item) => {
  //   dispatch(showPopup(item));
  // };
  // const handleClosePopup = () => {
  //   dispatch(hidePopup());
  //   console.log('okaa')

  // };


  const formatPrice = (price) => {
    const priceString = price.toString();
    const formattedPrice = priceString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return formattedPrice;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.trendingBody}>
      <p>MADE THE HARD WAY</p>
      <p>TOP TRENDING PRODUCTS</p>
      <div className={styles.listImgTrending}>
        {data.map((item) => (
          <div key={item._id}>
            <img className={styles.imgTrending} src={item.img1}  onClick={() => handleProductClick(item)} />
            <p className={styles.nameAppple}>{item.name}</p>
            <p className={styles.fomatPrice}>{`${formatPrice(item.price)} VND`}</p>
          </div>
        ))}
      </div>
      {selectedProduct && (
  <div className={styles.popup}>
    <div className={styles.popupMain}>

    <img className={styles.imgTrendingPop} src={selectedProduct.img1}/>
      <div>
        <p className={styles.productName}>{selectedProduct.name}</p>
        <p className={styles.productPrice}>{`${formatPrice(selectedProduct.price)} VND`}</p>
        <p className={styles.productDecs}>{selectedProduct.short_desc}</p>
      </div>

    <button className={styles.productButton} onClick={() => setSelectedProduct(null)}><FontAwesomeIcon icon={faXmark}/></button>
    </div>
  </div>
)}
    </div>
  );
};

export default TrendingProducts;
