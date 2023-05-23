import React from 'react';
import styles from './CategoryNav.module.css'

const CategoryNav = ({ activeCategory, onCategoryChange }) => {
  const categoriesAll = ['All'];
  const categoriesIphone = ['iphone','ipad','Macbook'];
  const categoriesIWathch = ['watch','airpod'];
  const categoriesOther = ['Mouse','Keyboard','Ofer']


  return (
    <div>
      {/* <div className={styles.categoriForm}>
        <h4>CATEGORIES</h4>
        <input type='text' placeholder='Enter Search Here!'/>
      </div> */}
    <div className={styles.CategoryNav}>
        <h3 className={styles.titleApple}>APPLE</h3>
      {categoriesAll.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={styles.butonclass}
        >
          {category}
        </button>
      ))}
      <h3 className={styles.iphoneAll}>IPHONE & MAC</h3>
      {categoriesIphone.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={styles.butonclass}

        >
          {category}
        </button>
      ))}
      <h3 className={styles.iphoneAll}>WIRELESS</h3>
      {categoriesIWathch.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={styles.butonclass}

        >
          {category}
        </button>
      ))}
      <h3 className={styles.iphoneAll}>OTHER</h3>
      {categoriesOther.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={styles.butonclass}

        >
          {category}
        </button>
      ))}
    </div>
    </div>
  );
};

export default CategoryNav;
