import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import { Link } from 'react-router-dom';

const plantsData = [
  { category: 'Air Purifying', id: 1, name: 'Snake Plant', price: 15, thumbnail: 'https://via.placeholder.com/100' },
  { category: 'Air Purifying', id: 2, name: 'Spider Plant', price: 12, thumbnail: 'https://via.placeholder.com/100' },
  // THÊM CÁC SẢN PHẨM KHÁC VÀO ĐÂY ĐỂ ĐẠT YÊU CẦU ĐỀ BÀI
  { category: 'Succulents', id: 7, name: 'Aloe Vera', price: 10, thumbnail: 'https://via.placeholder.com/100' },
  { category: 'Indoor Trees', id: 13, name: 'Ficus', price: 45, thumbnail: 'https://via.placeholder.com/100' },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const categories = [...new Set(plantsData.map((plant) => plant.category))];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#f8f9fa' }}>
        <div>
          <Link to="/">Home</Link> | <Link to="/products">Plants</Link>
        </div>
        <div>
          <Link to="/cart" style={{ textDecoration: 'none', fontSize: '1.2rem' }}>
            🛒 Cart ({totalQuantity})
          </Link>
        </div>
      </nav>

      <div style={{ padding: '1rem' }}>
        {categories.map((category) => (
          <div key={category}>
            <h2>{category}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {plantsData
                .filter((plant) => plant.category === category)
                .map((plant) => {
                  const isInCart = cartItems.some((item) => item.id === plant.id);
                  return (
                    <div key={plant.id} style={{ border: '1px solid #ccc', padding: '1rem', textAlign: 'center' }}>
                      <img src={plant.thumbnail} alt={plant.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                      <h3>{plant.name}</h3>
                      <p>${plant.price}</p>
                      <button 
                        onClick={() => handleAddToCart(plant)} 
                        disabled={isInCart}
                        style={{ padding: '0.5rem', cursor: isInCart ? 'not-allowed' : 'pointer' }}
                      >
                        {isInCart ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;