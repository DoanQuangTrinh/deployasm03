import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import CategoryNav from './CategoryNav';
import styles from './ShopPageFirst.module.css'


const ShopPageFirst = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74');
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  // Lọc danh sách sản phẩm theo danh mục
  const filteredProducts = category === 'All' ? products : products.filter(product => product.category === category);

  return (
    <div>
      <div className={styles.headerShopPage}>
        <h3>CATEGORIES</h3>
        <input value={'Enter Search Here'}/>
      </div>
    <div className={styles.ShopPageFirst}>
      {/* <h1>CATEGORIES</h1> */}
      {/* Hiển thị danh sách các danh mục sản phẩm */}
      <CategoryNav activeCategory={category} onCategoryChange={handleCategoryChange} />
      {/* Hiển thị danh sách sản phẩm */}
      <ProductList products={filteredProducts} />
    </div>
    </div>
  );
};

export default ShopPageFirst;
