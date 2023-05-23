import React from 'react';
import styles from './ProductDescription.module.css'
const ProductDescription = ({ description }) => {
  const paragraphs = description.split('\n').map((line, index) => (
    <p key={index}>{line}</p>
  ));

  return <div className={styles.paragraphDetails}>{paragraphs}</div>;
};

export default ProductDescription;
