// CartContext.js
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Lấy dữ liệu từ Local Storage (nếu có)
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    // Lưu dữ liệu vào Local Storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity) => {
    const newItem = { product, quantity };
    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };
  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.product.quantity, 0);
  };
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.product.price * item.product.quantity,
      0
    );
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,getTotalQuantity,getTotalPrice  }}>
      {children}
    </CartContext.Provider>
  );
};
