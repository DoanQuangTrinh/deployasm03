import React from 'react';
import styles from './ProductList.module.css'
import { Link } from 'react-router-dom';


const ProductList = ({ products }) => {
  const formatPrice = (price) => {
    const priceString = price.toString();
    const formattedPrice = priceString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return formattedPrice;
  };
  return (
    <div className={styles.listProductPrice}>
      {products.map(product => (
        <div key={product._id.$oid} >
            <img className={styles.imgProducts} src={product.img1}/>
            <Link to={`/product/${product._id.$oid}`}>{product.name}</Link>
          <h2 className={styles.namePhone}>{product.name}</h2>
          <p>{product.description}</p>
          <p className={styles.fomatPriceProducts}>{`${formatPrice(product.price)} VND`}</p>
        </div>
      ))}
    </div>
  );

};
export default ProductList;
