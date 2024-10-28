import React from 'react';
import './cart.css';
import { useCart } from '../hooks/useCart';

const Cart = () => {
  const { items, addItem, removeItem } = useCart();
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);
 


  return (
    <div className="cart-container">
      <h3>Your Cart</h3>
      <ul className="cart-items-list">
        {items.length > 0 ? (
          items.map((item) => (
            <li key={item.id} className="cart-item">
              <span>
                {item.name} (Quantity: {item.quantity})
              </span>
              <div className="cart-item-buttons">
                <button className="primary" onClick={() => addItem(item.id, item.name, item.price)}> +</button>
                <button className="secondary" onClick={() => removeItem(item.id)}> -</button>
              </div>
            </li>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </ul>
      {items.length > 0 && (
        <div className="cart-total">
          <h4>Total: {totalPrice/100}</h4>
        </div>
      )}
    </div>
  );
};

export default Cart;
