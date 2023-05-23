import React, { useState,useContext } from 'react';
import banner1 from './img/banner1.jpg'
import styles from './SignupPage.module.css'
import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../../Context/Context';

const SignupPage = () => {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  
  function handleClickalll(e) {
    e.preventDefault();
    window.location = '/SigninPage';
}
  
  const HandleSignup = (event) => {
    event.preventDefault();

    // Kiểm tra điều kiện đăng ký
    if (!fullname || !email || !password || !phone) {
      setError('Vui lòng nhập đầy đủ thông tin.');
    } else if (password.length < 8) {
      setError('Mật khẩu phải có ít nhất 8 ký tự.');
    } else {
      // Kiểm tra xem email đã tồn tại trong danh sách người dùng hay chưa
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const existingUser = users.find((user) => user.email === email);
      if (existingUser) {
        setError('Email đã tồn tại.');
      } else {
        // Tạo người dùng mới
        const newUser = {
          fullname,
          email,
          password,
          phone,
        };

        // Thêm người dùng vào danh sách và lưu vào localStorage
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // Đưa người dùng về trang Sign In
        window.location.href = '/SigninPage';
      }
    }
  };

  return (
    <div className={styles.SignupPageMain}>
      <img className={styles.imgBannerSignup} src={banner1} alt='banner'/>
      <div className={styles.signupPageHeader}>
      <h1 className={styles.titleHaerderSignup}>Sign up</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={HandleSignup} className={styles.formSignup}>
        <input type="text" placeholder='Fullname' value={fullname} onChange={(e) => setFullname(e.target.value)} />

        <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />

        <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />

        <input type="text" value={phone} placeholder='Phone' onChange={(e) => setPhone(e.target.value)} />

        <button type="submit">SIGN UP</button>
      </form>
      <div className={styles.footerSignup}>
        <p>Login?</p>
        <p className={styles.handleClicksignup} onClick={handleClickalll}>Click</p>
      </div>
      </div>
    </div>
  );
};

export default SignupPage;
