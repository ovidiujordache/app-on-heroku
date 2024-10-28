
import React, { createContext, useContext, useState } from 'react';


const CartContext = createContext();


export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);


  // Add item to cart
  const addItem = (id, name,price) => {
setItems((prevItems) => {
    const existingItem = prevItems.find((item) => item.id === id);
    if (existingItem) {
      return prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      return [...prevItems, { id, name, price, quantity: 1 }];
    }
  });
  };

  // Remove item from cart
  const removeItem = (id) => {
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const count = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, count }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
