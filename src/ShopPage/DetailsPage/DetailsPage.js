import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import styles from './DetailsPage.module.css'
import ProductDescription from './ProductDescription';
import { CartContext } from '../Cart/CardContent';
import { useContext } from 'react';


const DetailPage = () => {

    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate(); 
    const [cartItems, setCartItems] = useState([]);
    
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (event) => {
        setQuantity(Number(event.target.value));
    };
      
        const handleAddToCart = () => {
          // Xử lý logic thêm sản phẩm vào giỏ hàng
          console.log(`Added ${quantity} items to cart.`);
          const newItem = {
            product: product,
            quantity: quantity
          };
        //   console.log(newItem)
          setCartItems([...cartItems, newItem]);
          addToCart(newItem);

          navigate('/CartPage');
        };
    
    const formatPrice = (price) => {
        const priceString = price.toString();
        const formattedPrice = priceString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return formattedPrice;
    }


      
  const { id } = useParams(); // Lấy id sản phẩm từ Router

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74');
        const products = await response.json();
        const productData = products.find((p) => p._id.$oid === id);
        setProduct(productData);

        const relatedProductsData = products.filter((p) => p.category  === productData.category  && p._id.$oid !== id);
        setRelatedProducts(relatedProductsData);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Hiển thị màn hình tải dữ liệu khi đang lấy dữ liệu sản phẩm
  }

  return (
    <div className={styles.bodyDetails}>
    <div className={styles.DetailsPage}>
        <div className={styles.detailsMainImg}>

        <div className={styles.detailsImgHeader}>
            <img src={product.img1}/>
            <img src={product.img2}/>
            <img src={product.img3}/>
            <img src={product.img4}/>
        </div>
        <div className={styles.detailsImgMain}>
            <img src={product.img4}/>
        </div>
        </div>
    <div className={styles.informationDetails}>
      <h1 className={styles.nameDetailsMain}>{product.name}</h1>
      <p>{product.description}</p>
      <p className={styles.descriptionDetails}>{`${formatPrice(product.price)} VND`}</p>
      <p className={styles.shortdescDetails}>{product.short_desc}</p>
      <p>{`CATEGORY: ${product.category}`}</p>
      <form>
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={handleQuantityChange} />
      </label>
      <button type="button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </form>
    </div>
    </div>
      <button className={styles.buttonDESCRIPTION}>DESCRIPTION</button>
      <h4 className={styles.titleProductDetails}>PRODUCT DESCRPTION</h4>
      <ProductDescription description={product.long_desc} />
      <h4 className={styles.titleProductDetails}>RELATED PRODUCTS</h4>
      <div  className={styles.relatedFooter} >
      {relatedProducts.map((relatedProduct) => (

        <div key={relatedProduct._id.$oid}>
            <img className={styles.relatedProductsImg} src={relatedProduct.img1}/>
          <h3 className={styles.relatedNameDetails}>{relatedProduct.name}</h3>
          <p className={styles.relatedPriceDetails}>{`${formatPrice(relatedProduct.price)} VND`}</p>
        </div>
      ))}
      </div>
    </div>

  );
};

export default DetailPage;
