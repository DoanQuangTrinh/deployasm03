
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/actions';
import { useNavigate } from 'react-router-dom';
import styles from './SigninPage.module.css'
import banner from './img/banner1.jpg'


const SigninPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickSignup = () => {
    navigate('./SignupPage');
  };

  const handleLogin = () => {
    // Xử lý đăng nhập thành công và lấy thông tin fullname từ form đăng nhập
    // const fullname = 'fullname'; // Lấy từ form đăng nhập
    // setFullname(fullname);
    // console.log(setFullname(fullname))
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignin = (event) => {
    event.preventDefault();

    // Kiểm tra điều kiện đăng nhập
    if (!email || !password) {
      setError('Vui lòng nhập đầy đủ thông tin.');
    } else {
      // Lấy danh sách người dùng từ localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];

      // Tìm kiếm người dùng theo email và password
      const user = users.find((user) => user.email === email && user.password === password);

      if (user) {
        // Đăng nhập thành công
        // Cập nhật dữ liệu đăng nhập vào Redux (thông qua action ON_LOGIN)
        dispatch(login(user));

        // Cập nhật dữ liệu đăng nhập vào localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));

        // Đưa người dùng về trang chính (hoặc trang đã đăng nhập)
        navigate('/');
        localStorage.setItem('isLoggedIn', 'true');
      } else {
        // Đăng nhập không thành công
        setError('Email hoặc mật khẩu không chính xác.');
        setPassword('');
      }
    }
  };

  return (
    <div className={styles.signinPageMain}>
      <img src={banner} alt='bannerrr' className={styles.bannerSigninPage}/>
      <div className={styles.signinHeader}>
        <h1 className={styles.titleSignin}>Sign in</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSignin} className={styles.formSigninPage}>
          <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />


          <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />

          <button onClick={handleLogin} type="submit">
            Sign in
          </button>
          <div className={styles.footerSignin}>
            <p>Create an account?</p>
            <p onClick={handleClickSignup}>Sign up</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigninPage;
