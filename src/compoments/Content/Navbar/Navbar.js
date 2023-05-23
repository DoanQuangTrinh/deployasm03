
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../actions/actions';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartFlatbed, faUser,faSortDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';
import { useState,useEffect } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const username = useSelector((state) => state.user.fullname);

  const handleClick = () => {
    navigate('/');
  };

  const handleClickShop =   () => {
    navigate('/ShopPage');
  };

  const handleClickSign = () => {
    navigate('/SigninPage');
  };

  const handleClickCart = () => {
    navigate('/CartPage');
  };

  const handleLogout = () => {
    // Đăng xuất người dùng
    dispatch(logout());

    // Xóa dữ liệu đăng nhập từ localStorage
    localStorage.removeItem('currentUser');

    // Đưa người dùng về trang chính (hoặc trang đã đăng xuất)
    navigate('/');
};

// const data = localStorage.getItem('currentUser');
// console.log(data)
// if (data) {
//     // Chuyển đổi chuỗi JSON thành đối tượng JavaScript
//     const objectData = JSON.parse(data);
  
//     // Lấy thuộc tính fullname từ đối tượng
//     const fullname = objectData.fullname;
  
//     // Sử dụng giá trị fullname
//     console.log(fullname);
//   } else {
//     // Xử lý logic khi dữ liệu không tồn tại
//     console.log('Dữ liệu không tồn tại');
//   }

  const [fullname, setFullname] = useState('');

  useEffect(() => {
    // Lấy dữ liệu từ localStorage
    const data = localStorage.getItem('currentUser');

    // Kiểm tra nếu dữ liệu tồn tại
    if (data) {
      // Chuyển đổi chuỗi JSON thành đối tượng JavaScript
      const objectData = JSON.parse(data);

      // Lấy thuộc tính fullname từ đối tượng
      const retrievedFullname = objectData.fullname;

      // Lưu giá trị fullname vào state
      setFullname(retrievedFullname);
    }
  }, []);

  return (
    <div>
      <div className={styles.homeHeader}>
        <div className={styles.headerFirst}>
          <button onClick={handleClick} className={styles.buttonNavbar}>
            Home
          </button>
          <button onClick={handleClickShop} className={styles.buttonNavbar}>
            Shop
          </button>
        </div>
        <div className={styles.headerTwo}>
          <button className={styles.buttonNavbar}>BOUTIQUE</button>
        </div>
        <div className={styles.headerLast}>
          <div>
            <FontAwesomeIcon icon={faCartFlatbed} className={styles.iconNavbar} />
            <button onClick={handleClickCart} className={styles.buttonNavbar}>Cart</button>
          </div>
          <div>
            {isLoggedIn ? (
              <>
                <FontAwesomeIcon icon={faUser} className={styles.iconNavbar} />
                <span className={styles.FullnameNavbar}>{fullname}</span>
                <FontAwesomeIcon icon={faSortDown} className={styles.iconNavbar} id='iconNavBarF' />
                <button onClick={handleLogout} className={styles.buttonNavbar}>
                  (Logout)
                </button>
              </>
            ) : (
              <button onClick={handleClickSign} className={styles.buttonNavbar}>
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

