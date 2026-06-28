import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import { useNavigate } from 'react-router-dom';

function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Shopping Cart</h2>
      <p style={{ fontWeight: 'bold' }}>Total Cart Amount: ${totalAmount}</p>

      {cartItems.map((item) => (
        <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', borderBottom: '1px solid #eee', padding: '1rem 0' }}>
          <img src={item.thumbnail} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
          <div>
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>
            <p>Subtotal: ${item.price * item.quantity}</p>
            
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
              <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))} style={{ padding: '0.2rem 0.5rem' }}>-</button>
              <span style={{ margin: '0 10px', fontSize: '1.2rem' }}>{item.quantity}</span>
              <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))} style={{ padding: '0.2rem 0.5rem' }}>+</button>
              
              <button onClick={() => dispatch(removeItem(item.id))} style={{ marginLeft: '1.5rem', color: 'white', backgroundColor: 'red', border: 'none', padding: '0.3rem 0.6rem', cursor: 'pointer' }}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      <div style={{ marginTop: '2rem' }}>
        <button onClick={() => navigate('/products')} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>Continue Shopping</button>
        <button onClick={() => alert('Coming Soon')} style={{ marginLeft: '1rem', padding: '0.5rem 1rem', cursor: 'pointer', backgroundColor: 'green', color: 'white', border: 'none' }}>Checkout</button>
      </div>
    </div>
  );
}

export default CartItem;