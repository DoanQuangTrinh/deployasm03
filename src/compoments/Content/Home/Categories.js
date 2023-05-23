import React from "react";
import product1 from './assets/product_1.png'
import product2 from './assets/product_2.png'
import product3 from './assets/product_3.png'
import product4 from './assets/product_4.png'
import product5 from './assets/product_5.png'
import styles from './Categories.module.css'
const Categories = () => {
    return(
        <div className={styles.categories}>
            <div className={styles.titleCategories}>
                <p className={styles.carefully}>CAREFULLY CREATED COLLECTIONS</p>
                <p className={styles.brosweour}>BROWSE OUR CATEGORIES</p>
            </div>
            <div className={styles.listImg}>
                <div className={styles.iphoneMac}>
                    <img src={product1} alt="product1"/>
                    <img src={product2} alt="product2"/>
                </div>
                <div className={styles.ipadWatch}>
                    <img src={product3} alt="product3"/>
                    <img src={product4} alt="product4"/>
                    <img src={product5} alt="product5"/>
                </div>
            </div>
        </div>
    )
}

export default Categories