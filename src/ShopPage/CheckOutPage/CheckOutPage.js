import React, { useContext,useState } from 'react';
import { CartContext } from '../Cart/CardContent';
import styles from './CheckoutPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {

         
  const navigate = useNavigate();
  const { cartItems, getTotalQuantity, getTotalPrice } = useContext(CartContext);

  const handleProceedCheckout = () => {
    // Xử lý logic thanh toán và đặt hàng tại đây
    // ...
  };

  const handleGoBack = () => {
    navigate('/CartPage');
  };

  const formatPrice = (price) => {
    const priceString = price.toString();
    const formattedPrice = priceString.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return formattedPrice;
  };


  return (
    <div className={styles.CheckoutPageMain}>
      <div className={styles.checkoutHeader}>
        <h1 className={styles.checkoutTitle}>CHECKOUT</h1>
        <div className={styles.checkouttitletwo}>
        <p className={styles.checkoutSubtitle}>HOME / CART / </p>
        <p className={styles.checkoutpagetitle}>CHECKOUT</p>
        </div>
      </div>
      <div className={styles.orderSummary}>
        <h3 className={styles.orderSummaryTitle}>BILLING DETAILS</h3>

      <div className={styles.mainFooterlast}>
  
        <div className={styles.mainformintermationdetails}>
        <form className={styles.formintermationdetails}>
      <div className={styles.editforminputdetails}>
        <label htmlFor="fullname">FULLNAME:</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          placeholder='Enter Youer Fullname Here!'
        />
      </div>
      <div className={styles.editforminputdetails}>
        <label htmlFor="email">EMAIL:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Enter Youer Email Here!'
        />
      </div>
      <div className={styles.editforminputdetails}>
        <label htmlFor="phoneNumber">PHONE NUMBER:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder='Enter Youer phoneNumber Here !'
          
        />
      </div>
      <div className={styles.editforminputdetails}>
        <label htmlFor="address">ADRESS:</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder='Enter Youer address Here !'
        />
      </div>
      <button className={styles.palaceoderCheckout} type="submit">Place order</button>
    </form>
        </div>

    <div className={styles.oderlastdetails}>
        <h3 className={styles.youroderpagelast}>YOUR ODER</h3>
        <ul className={styles.orderSummaryList}>
          {cartItems.map((item, index) => (
              <li key={index} className={styles.orderSummaryItem}>
              <p className={styles.productnamelats}>{item.product.product.name}</p>
              <p>{`${formatPrice(item.product.product.price)} VND x ${item.product.quantity}`}</p>
            </li>
          ))}
        </ul>
        <div className={styles.orderSummaryTotal}>
          <p className=''>TOTAL</p>
          <p>{`${formatPrice(getTotalPrice())} VND`} </p>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default CheckoutPage;
