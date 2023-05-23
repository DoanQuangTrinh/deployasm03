// Popup.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hidePopup } from '../store/popupReducer';

const Popup = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.popup.isVisible);
  const productData = useSelector((state) => state.popup.productData);

  const handleClose = () => {
    dispatch(hidePopup());
  };

  if (!isVisible) {
    return null; // Không hiển thị Popup nếu isVisible = false
  }

  return (
    <div className="popup">
      {/* Hiển thị thông tin sản phẩm */}
      <h3>{productData.name}</h3>
      <p>{productData.description}</p>

      {/* Nút đóng Popup */}
      <button onClick={handleClose}>Đóng</button>
    </div>
  );
};

export default Popup;
