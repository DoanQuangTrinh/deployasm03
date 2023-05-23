import React, { useContext,useEffect,useState } from 'react';
import { CartContext } from './CardContent';
import styles from './CartPage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan,faGift,faArrowLeftLong,faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const navigate = useNavigate();

  const handleClickShopping = () => {
    navigate('/ShopPage');
  };
  const handleClickCheckout = () => {
    navigate('/CheckoutPage');
  };
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (index, value) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = {
        ...prevQuantities,
        [index]: value
      };
      localStorage.setItem('quantities', JSON.stringify(updatedQuantities));
      return updatedQuantities;
    });
  
    console.log(value);
  };
  // useEffect(() => {
  //   const storedQuantities = JSON.parse(localStorage.getItem('quantities'));
  //   if (storedQuantities) {
  //     setQuantities(storedQuantities);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('quantities', JSON.stringify(quantities));
  // }, [quantities]);

  const calculateTotalMax = () => {
    let total = 0;
  
    cartItems.forEach((item) => {
      const price = item.product.product.price;
      const quantity = item.product.quantity;
      const subtotal = price * quantity;
      total += calculateTotal(item.product.product.price, getTotalQuantity());
    });
  
    return total;
  };
  
  const formatPrice = (price) => {
    const priceString = price.toString();
    const formattedPrice = priceString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return formattedPrice;
}
  
  const { cartItems ,removeFromCart,addToCart } = useContext(CartContext);
  

  // Hàm tính tổng số lượng sản phẩm trong giỏ hàng
  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.product.quantity, 0);
  };

  // Hàm tính tổng giá trị của giỏ hàng
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.product.price * item.product.quantity,
      0
    );
  };
  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
  };
  const calculateTotal = (price, quantity) => {
    return price * quantity;
  };
  console.log(cartItems)
  return (
    <div className={styles.CartPageMain}>
      <div className={styles.cartOnCartPage}>
        <h1 className={styles.cartTitleMax}>CART</h1>
        <p className={styles.cartpMin}>CART</p>
      </div>
      <p className={styles.shoppingCartProduct}>SHOPPING CART</p>
      
      {/* <p>Total Items: {getTotalQuantity()}</p>
      <p>Total Price: {getTotalPrice()}</p> */}
      <div className={styles.listProductTotal}>
        <p>IMAGE</p>
        <p>PRODUCT</p>
        <p>PRICE</p>
        <p>QUANTITY</p>
        <p>TOTAL</p>
        <p>REMOVE</p>
      </div>
      <div className={styles.mainCartHeader}>
      <div>
      <ul className={styles.mainProduct}>
        {cartItems.map((item, index) => (
          <li key={index} className={styles.listproductitem}>
            <img src={item.product.product.img1} />
            <p className={styles.nameProductCart}>{item.product.product.name}</p>
            <p className={styles.priceProductCart}>{`${formatPrice(item.product.product.price)} VND`}</p>
            <label>
              <input
                className={styles.inputProductCart}
                type="number"
                value={item.product.quantity}
                // onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                // onChange={(e) => {
                //   handleQuantityChange(index, parseInt(e.target.value));
                // }}
              />
            </label>
            <p className={styles.priceProductCart}> {formatPrice(calculateTotal(item.product.product.price, getTotalQuantity()))} VND</p>
            <div className={styles.iconCartProduct}>
            <FontAwesomeIcon onClick={() => handleRemoveFromCart(index)} icon={faTrashCan} className={styles.iconNavbar} />
            </div>

          </li>
        ))}
      </ul>
      </div>
      <div className={styles.addSubTotal}>
        <h3 className={styles.cartTotalLast}>CART TOTAL</h3>
        <div className={styles.cardFlexTotal}>
          <p className={styles.subTotalFooter}>SUBTOTAL</p>
          <p className={styles.totalValue}>{formatPrice(calculateTotalMax())} VND</p>
        </div>
        <div className={styles.cardFlexTotal}>
          <p className={styles.subTotalFooter}>TOTAL</p>
          <p className={styles.totalValueMax}>{formatPrice(calculateTotalMax())} VND</p>
        </div>
        <input className={styles.inputYourCoupon} placeholder='Enter your coupon'/>
        <div>
        <button className={styles.buttonFagift}>
        <FontAwesomeIcon icon={faGift} className={styles.iconCartFooter} />
        Apply coupon
        </button>

        </div>
      </div>
      </div>
      <div className={styles.footerNavigate}>
        <div onClick={handleClickShopping} className={styles.faArrowLongRight}> 
          <FontAwesomeIcon icon={faArrowLeftLong} />
          <button className={styles.continueShopping}>Continue shopping</button>
        </div>
        <div>
          <button className={styles.proceedCheckout} onClick={handleClickCheckout}>Proceed to checkout
          <FontAwesomeIcon icon={faArrowRightLong} className={styles.iconFaArrow}/>
          </button>
        </div>
      </div>

    </div>
  );
};

export default CartPage;
