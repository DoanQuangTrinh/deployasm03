import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './compoments/Content/Home/Home';
import Content from './compoments/Content/Content';
import ShopPage from './ShopPage/ShopPage';
import DetailPage from './ShopPage/DetailsPage/DetailsPage';
import SignupPage from './compoments/Login/SignupPage';
import SigninPage from './compoments/Login/SigninPage';
import { useDispatch } from 'react-redux';
import { login } from './actions/actions';
import { useEffect } from 'react';
import CartPage from './ShopPage/Cart/Cart';
import CheckOutPage from './ShopPage/CheckOutPage/CheckOutPage';
// import DetailPage from './ShopPage/DetailPage/DetailsPage';
// import Home from './components/Home';
// import ShopPage from './components/ShopPage';
// import DetailPage from './components/DetailPage';
// import CartPage from './components/CartPage';
// import CheckoutPage from './components/CheckoutPage';
// import LoginPage from './components/LoginPage';
// import RegisterPage from './components/RegisterPage';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoBGS1DV0H8pBp0MYZDQQOsBSXh9ir-zs",
  authDomain: "reactjs-asm3.firebaseapp.com",
  projectId: "reactjs-asm3",
  storageBucket: "reactjs-asm3.appspot.com",
  messagingSenderId: "1042814776010",
  appId: "1:1042814776010:web:8cc83052e1b44818adfa33",
  measurementId: "G-5V9BBYPRWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Kiểm tra trạng thái đăng nhập từ localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
      // Nếu đang đăng nhập, lấy dữ liệu người dùng từ localStorage và cập nhật vào Redux
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      dispatch(login(currentUser));
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Content /> } />
      <Route path='/ShopPage' element={<ShopPage/>}/>
      <Route path="/product/:id" element={<DetailPage/>} />
      <Route path='/SigninPage/SignupPage' element={<SignupPage/>}/>
      <Route path='/SigninPage' element={<SigninPage/>}/>
      <Route path='/CartPage' element={<CartPage/>}/>
      <Route path='/CheckOutPage' element={<CheckOutPage/>}/>


      
      {/* <Route path='/DetailPage' element={<DetailPage/>}/> */}

      {/* <Route path="/Home" element={<Home />} /> */}
        {/* <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/detail/:productId" element={<DetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
